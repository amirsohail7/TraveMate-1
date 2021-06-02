//import { Link } from 'react-router-dom';
import React from "react";
import "./DirectoryItem.css";

const DirectoryItem = ({ tours }) => {
  return (
    <div className="item_list">
      {tours.map((tour) => (
        <div className="item_preview" key={tour._id}>
          <h2>{tour.Name}</h2>
          <p>Destination {tour.Destination}</p>
          <p>Price : {tour.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
