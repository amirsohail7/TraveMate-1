import React from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import css from "./Comments.module.css";

function WriteComment(_props) {
  const [comment, setComment] = useState("");
  const author = localStorage.getItem("Name");
  console.log(_props);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comments = {
      comment,
      author,
    };

    axios
      .put(`http://localhost:3040/blog/update/${_props.blog._id}`, comments)
      .then(() => {
        // history.push('/')
        console.log("data is posted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={css.container}>
      <h2 className={css.Form__title}>Leave a Comment</h2>
      <form className={css.FormGrid} onSubmit={handleSubmit}>

        <div className={css.form__item}>
          <label className={css.form__label}>Comments</label>
          <textarea
            className={css.form__input}
            required
            value={comment}
            placeholder="Share your thoughts"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button className={css.btn}>Post</button>
      </form>
    </div>
  );
}
export default WriteComment;
