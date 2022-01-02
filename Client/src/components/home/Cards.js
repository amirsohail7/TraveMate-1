import React, { useState, useEffect } from "react";
import css from "./Cards.module.css";
import CardItem from "./CardItem";
import axios from "axios";

const Cards = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3040/attractionRec/recommendAttraction/39")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={css.dest_cards}>
      <h1>Places you may like to visit</h1>
      <div className={css.dest_cards__container}>
        {destinations && <CardItem destinations={destinations} />}
      </div>
    </div>
  );
};

export default Cards;
