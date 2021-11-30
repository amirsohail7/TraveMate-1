import React from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import css from "./review.module.css";

const ServiceReview = ({ Reviews }) => {
  console.log(Reviews);
  if (!Reviews) {
    return null;
  }
  if (Reviews.length != 0) {
    return (
      <div>
        {Reviews.map((review) => (
          <div className={css.review}>
            <h4>{review.author.name}</h4>
            <p>{review.comment}</p>
            <Rating name="read-only" value={review.rating} readOnly />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h3 className={css.muted}> No Reviews yet </h3>
      </div>
    );
  }
};
export default ServiceReview;
