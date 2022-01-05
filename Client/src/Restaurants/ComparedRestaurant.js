import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./Compare.module.css";
import DrivingDistance from "../components/shared/DrivingDistance";
import { Rating } from "@mui/material";
import DisplayImagesList from "../components/shared/DisplayImagesList";

const CompareRestaurant = (_props) => {
  const [restaurant, setRestaurant] = useState(null);
  console.log(_props);
  let arr = _props.restaurant;
  console.log(arr);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/restaurant/${arr}`)
      .then((response) => {
        console.log(response.data);
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={css.service__container}>
      {restaurant && (
        <div className={css.compare_fields}>
          <h2>{restaurant.name}</h2>
          <Rating
            name="read-only"
            value={restaurant.rating}
            readOnly
            precision={0.5}
          />
          <p>{restaurant.reviewsCount} reviews</p>
          <p className={css.green}>{restaurant.priceLevel}</p>
          <h4>Cuisines</h4>
          <div className={css.compare_list}>
            {restaurant.cuisine.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <DrivingDistance
            ulat={_props.lat}
            ulng={_props.lng}
            slat={restaurant.latitude}
            slng={restaurant.longitude}
          />
        </div>
      )}
      <div className={css.images}>
        {restaurant && <DisplayImagesList photos={restaurant.photos} />}
      </div>
    </div>
  );
};

export default CompareRestaurant;
