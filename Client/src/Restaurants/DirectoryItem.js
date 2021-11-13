//import { Link } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import "./DirectoryItem.css";

const DirectoryItem = ({ restaurants }) => {
  return (
    <div className="item_list">
      {restaurants.map((restaurant) => (
        <div className="item_preview" key={restaurant._id}>
          <Link to={`/restaurantdetail/${restaurant._id}`}>
            <h2>{restaurant.name}</h2>
          </Link>

          <div className="info">
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
          <div className="side">
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
