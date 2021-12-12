import React from "react";
import axios from "axios";
import { useState } from "react";
import css from "../review.module.css";

const DisplayComments = ({ Comments }) => {
  console.log(Comments);
  if (!Comments) {
    return null;
  }
  if (Comments.length != 0) {
    return (
      <div>
        {Comments.map((comment) => (
          <div className={css.comment} key={comment.comment}>
            <h4>{comment.author}</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h3 className={css.muted}> No Comments yet </h3>
      </div>
    );
  }
};
export default DisplayComments;
