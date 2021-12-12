import React, { useState,useEffect } from 'react';
import css from './Cards.module.css';
import CardItem from './CardItem';
import axios from "axios";

const Cards=()=> {
const [destinations,setDestinations]=useState(null);

  useEffect(() => {
    axios
    .get("http://localhost:3040/attractionRec/recommendAttraction/39")
    .then((response)=>{
      setDestinations(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, []);

  return (
    <div className={css.cards}>
      <h1>Trending Destinations!</h1>
      <div className={css.cards__container}>
        <div className={css.cards__wrapper}>
          <ul className={css.cards__items}>
          {destinations && <CardItem destinations={destinations} />}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
