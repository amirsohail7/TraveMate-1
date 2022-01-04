import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import css from "./Blogs.module.css";
import WriteComment from "./WriteComment";
import DisplayComments from "./DisplayComments";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

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
          {/* <section><Avatar alt={blogDetail.Title } src="/static/images/cards/paella.jpg" />
          <h2>{blogDetail.author.username}</h2>
          </section> */}

          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 600,
              minWidth: 500,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img
                    alt=""
                    src="/static/images/grid/complex.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5" component="div">
                      {blogDetail.author.username}
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ width: 60 }}
                  >
                    <FavoriteIcon/> {/* likes count here */}
                    {/* blogDetail.author.username.interests.likes.length */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div class={css.details}>
          <h2>{blogDetail.Title}</h2>
          <h6>{blogDetail.createdAt}</h6>
          <Typography>{blogDetail.Description}</Typography>
        </div>
        <div class={css.feedbacks}>
          <WriteComment blog={blogDetail} />
          <DisplayComments Comments={blogDetail.comments} />
        </div>
      </div>
    </>
  );
};
export default BlogDetails;
