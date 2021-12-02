//import { Link } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import "./DirectoryItem.css";

const DirectoryItem = ({ tours }) => {
  return (
    <div className="item_list">
      {tours.map((tour) => (
        <div className="item_preview" key={tour._id}>
          <Link to={`/tourdetail/${tour._id}`}>
            <h2>{tour.Name}</h2>
          </Link>

          <div className="info">
            <p>Destination {tour.Destination}</p>
            <p>Departure from : {tour.DepartureLocation}</p>
            <p>{tour.Departure}</p>
            <p>{tour.Description}</p>
          </div>
          <div className="side">
            <p>PKR {tour.Price}</p>
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
