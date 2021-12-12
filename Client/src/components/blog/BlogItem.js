import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const BlogItem = ({ blogs }) => {
  const [clicked, setClicked] = React.useState(false);

  const handleLike = () => {
    setClicked(!clicked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 345,
        },
      }}
    >
      {blogs &&
        blogs.map((blog) => (
          <Card sx={{ maxWidth: 345 }}>
            <Link to={`/blogdetail/${blog._id}`}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={blog.Title}
                subheader={blog.createdAt}
              />
            </Link>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={handleLike}>
                {clicked ? (
                  <FavoriteIcon
                    sx={{
                      cursor: "pointer",
                      color: "grey",
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{
                      cursor: "pointer",
                      color: "grey",
                    }}
                  />
                )}
              </IconButton>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};
export default BlogItem;
