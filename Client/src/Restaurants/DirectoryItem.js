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

            <div className="info">
              <p>Address: {restaurant.address}</p>
              <p>Email:{restaurant.email}</p>
              <p>Reviews:{restaurant.reviewsCount}</p>
              <p>Cuisine: {restaurant.cuisine}</p>
            </div>
            <div className="side">
              <p>{restaurant.priceLevel}</p>
              <p>Rating {restaurant.rating}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
