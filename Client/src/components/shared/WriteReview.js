import React from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import css from "./review.module.css";

function WriteReview(_props) {
  const [service, setService] = useState(_props.service);
  const [serviceType, setServiceType] = useState(_props.serviceType);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const author = localStorage.getItem("userID");

  const pushReview = (rid) => {
    axios.put(
      `http://localhost:3040/${serviceType}/${service}/AddReview/${rid}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      comment,
      rating,
      author,
      service,
      serviceType,
    };
    console.log(review);
    axios
      .post("http://localhost:3040/review/create_review", review)
      .then((response) => {
        console.log("data is posted");
        pushReview(response.data._id);
        alert("Review Submited");
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
