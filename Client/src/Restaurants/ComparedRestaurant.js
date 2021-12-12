import axios from "axios";
import React, { useEffect, useState } from "react";
import css from './Compare.module.css'

const CompareRestaurant = (_props) => {
  const [restaurant, setRestaurant] = useState(null);
  console.log(_props);
  let arr = _props.restaurant;
  console.log(arr)


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
    <div>
    {restaurant &&
      <div className={css.compare_fields}>
      <h3>Name</h3><li className={css.compared_name}>{restaurant.name}
      </li>
      <h3>Reviews Count</h3><li className={css.compared_rating}>{restaurant.numberOfReviews}</li>
      <h3>Rating</h3><li className={css.compared_rating}>{restaurant.rating}</li>
      <h3>Cuisine</h3><li className={css.compared_rating}>{restaurant.cuisine.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}</li>
      </div>
          }
    </div>
  );
};

export default CompareRestaurant;