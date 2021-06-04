import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";

const AddBlogForum = () => {
  const [Title, setTitle] = useState(" ");
  const [createdAt, setCreatedAt] = useState(" ");
  const [author, setAuthor] = useState(sessionStorage.getItem("userID"));
  const [Description, setDescription] = useState(" ");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      Title,
      createdAt,
      author,
      Description,
    };

    axios.post("http://localhost:3040/blog/create_blog", blog).then(() => {
      console.log("data is posted");
      console.log(blog);
      history.push("/TravelerDash");
    });
  };

  return (
    <div className={formCSS.blogbg}>
      <div className={formCSS.container}>
        <h2 className={formCSS.form__title}>Add Blog Form</h2>

        <form className={formCSS.form} onSubmit={handleSubmit}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Blog Title : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Date: </label>
            <input
              className={formCSS.form__input}
              type="Date"
              required
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Description : </label>
            <textarea
              className={formCSS.form__input}
              required
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className={formCSS.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddBlogForum;
