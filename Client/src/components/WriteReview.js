import React from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import css from "./review.module.css";

function WriteReview(service, serviceType) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const provider = localStorage.getItem("userID");

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      comment,
      rating,
      service,
      serviceType,
      provider,
    };
    console.log(review);
    axios.post("http://localhost:3040/review/Write_review", review).then(() => {
      // history.push('/')
      console.log("data is posted");
    });
  };

  return (
    <div className={css.container}>
      <h2 className={css.Form__title}>Leave a Review</h2>
      <form className={css.FormGrid} onSubmit={handleSubmit}>
        <div className={css.form__item}>
          <label className={css.form__label}>Rate your Experience</label>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className={css.form__item}>
          <label className={css.form__label}>Comments</label>
          <textarea
            className={css.form__input}
            required
            value={comment}
            placeholder="Share your Experience"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button className={css.btn}>Post</button>
      </form>
    </div>
  );
}
export default WriteReview;
