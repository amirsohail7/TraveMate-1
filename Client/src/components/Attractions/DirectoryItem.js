import React from "react";
import { Link } from "react-router-dom";
import css from "./DirectoryItem.module.css";
import { FormControlUnstyledContext, Rating } from "@mui/material";

const DirectoryItem = ({ attractions }) => {
  console.log(attractions);
  return (
    <div className={css.item_list}>
      {attractions.map((attraction) => (
        <div className={css.item_preview} key={attraction._id}>
          <img src={`attraction.photo.images.small.url`}></img>

          <Link to={`/attractionDetail/${attraction._id}`}>
            <h2>{attraction.name}</h2>

            <div className={css.info}>
              <p>Address: {attraction.address}</p>
              <p>Email:{attraction.email}</p>
            </div>
            <div className={css.side}>
              <Rating name="read-only" value={attraction.rating} readOnly />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DirectoryItem;
