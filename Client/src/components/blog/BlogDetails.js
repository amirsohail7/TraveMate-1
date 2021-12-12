import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import css from "./Blogs.module.css"
import WriteComment from './WriteComment'
import DisplayComments from './DisplayComments';

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/blog/${id}`)
      .then((response) => {
        setBlogDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!blogDetail) return null;
  console.log(blogDetail.Title);

  return (
    <>
      <div class={css.detail_container}>
        <div class={css.user_info}>
          <section><Avatar alt={blogDetail.Title } src="/static/images/cards/paella.jpg" />
          <h2>{blogDetail.author.username}</h2>
          </section>
          
          
          
        </div>
        <div class={css.details}>
        <h2>{blogDetail.Title}</h2>
        <h6>{blogDetail.createdAt}</h6>
          <Typography>{blogDetail.Description}</Typography>
        </div>
        <div class={css.feedbacks}>
        <WriteComment blog={blogDetail}/>
        <DisplayComments Comments={blogDetail.comments}/>
        </div>
      </div>
    </>
  );
};
export default BlogDetails;
