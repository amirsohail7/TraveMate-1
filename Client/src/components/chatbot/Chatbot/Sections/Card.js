import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ListItemText from "@mui/material/ListItemText";

function CardComponent(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.cardInfo.fields.description.stringValue}
        image={props.cardInfo.fields.image.stringValue}
        width="100"
        height="100"
      />
      <ListItemText>
        {props.cardInfo.fields.description.stringValue}{" "}
      </ListItemText>
    </Card>
  );
}

export default CardComponent;
