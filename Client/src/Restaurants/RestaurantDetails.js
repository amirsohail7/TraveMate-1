import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetail, setTourDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/restaurant/${id}`)
      .then((response) => {
        setTourDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!restaurantDetail) return null;
  console.log(restaurantDetail.Name);

  return (
    <div>
      {restaurantDetail.map((restaurant) => (
        <div>
          <h2>{restaurant.name}</h2>
          <p>Location {restaurant.city}</p>
          <p>Address {restaurant.address}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.email}</p>
          <p>{restaurant.description}</p>
          <p>{restaurant.priceRange}</p>
          <p>{restaurant.openingTime}</p>
          <p>{restaurant.closingTime}</p>
          <p>{restaurant.daysOpen}</p>
          <p>Provider : {restaurant.provider.username}</p>
        </div>
      ))}
    </div>
  );
};
export default RestaurantDetails;
