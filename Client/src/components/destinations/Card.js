import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";

export default function CarousalCard() {
  const [clicked, setClicked] = React.useState(false);

  const handleLike = () => {
    setClicked(!clicked);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="service">
            R
          </Avatar>
        }
        title="Ahmed"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary">
          Capital Hotel
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </CardContent>
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
  );
}
