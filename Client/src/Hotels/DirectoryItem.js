//import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import css from "./DirectoryItem.module.css";
import { Rating } from "@mui/material";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const DirectoryItem = ({ hotels }) => {
  const [toCompare, setToCompare] = useState([]);
  const history = useHistory();
  const getValue = (e) => {
    let data = toCompare;
    data.push(e.target.value);
    setToCompare(data);
    if (toCompare.length > 1) {
      history.push(`/compare/${toCompare[0]}/${toCompare[1]}`);
    }
    console.log(toCompare);
  };

  return (
    <div className={css.item_list}>
      {hotels.map((hotel) => (
        <div className={css.item_preview} key={hotel._id}>
          <Link to={`/hoteldetail/${hotel._id}`}>
            <h2>{hotel.name}</h2>

            <div className={css.info}>
              <p>Address: {hotel.address}</p>
              <p>Email:{hotel.email}</p>
              <p>Reviews:{hotel.reviewsCount}</p>
              <p>Cuisine: {hotel.cuisine}</p>
            </div>
            <div className={css.side}>
              <p>{hotel.priceLevel}</p>
              <Rating name="read-only" value={hotel.rating} readOnly />
            </div>
          </Link>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={hotel._id}
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
