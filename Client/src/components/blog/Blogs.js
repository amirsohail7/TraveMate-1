import React, { useState, useEffect } from "react";
import css from "./Blogs.module.css";
import BlogItem from "./BlogItem";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3040/blog")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div class={css.container}>
      <div class={css.Hero_Image}></div>
      <div class={css.Blogs}>{blogs && <BlogItem blogs={blogs} />}</div>
    </div>
  );
};

export default Blogs;
