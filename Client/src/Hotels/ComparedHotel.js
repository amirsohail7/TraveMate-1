import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./Compare.module.css";
import DrivingDistance from "../components/shared/DrivingDistance";
import { Rating } from "@mui/material";
import DisplayImagesList from "../components/shared/DisplayImagesList";

const ComparedHotel = (_props) => {
  const [hotel, setHotel] = useState(null);
  console.log(_props);
  let arr = _props.hotel;
  console.log(arr);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/hotel/${arr}`)
      .then((response) => {
        console.log(response.data);
        setHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={css.service__container}>
      {hotel && (
        <div className={css.compare_fields}>
          <h2>{hotel.name}</h2>
          <Rating
            name="read-only"
            value={hotel.rating}
            readOnly
            precision={0.5}
          />
          <p>{hotel.reviewsCount} reviews</p>
          <p className={css.green}>{hotel.priceLevel}</p>
          <h4>Amenities</h4>
          <div className={css.compare_list}>
            {hotel.amenities.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <DrivingDistance
            ulat={_props.lat}
            ulng={_props.lng}
            slat={hotel.latitude}
            slng={hotel.longitude}
          />
        </div>
      )}
      <div className={css.images}>
        {hotel && <DisplayImagesList photos={hotel.photos} />}
      </div>
    </div>
  );
};

export default ComparedHotel;
