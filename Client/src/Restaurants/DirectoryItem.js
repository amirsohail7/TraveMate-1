//import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import "./DirectoryItem.css";
import { Rating } from "@mui/material";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const DirectoryItem = ({ restaurants }) => {
  const [toCompare, setToCompare] = useState([]);
  const history = useHistory();
  const getValue = (e) => {
    let data = toCompare;
    data.push(e.target.value);
    setToCompare(data);
    if (toCompare.length > 2) {
      history.push(`/rescompare/${toCompare[0]}/${toCompare[1]}`);
    }
    console.log(toCompare);
  };

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
              <Rating name="read-only" value={restaurant.rating} readOnly />
            </div>
          </Link>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={restaurant._id}
                onChange={(e) => getValue(e)}
              />
            }
            label="Compare"
          />
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
