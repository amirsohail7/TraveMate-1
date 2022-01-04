import React from "react";
import { Link } from "react-router-dom";
import css from "./Cards.module.css"

const CardItem = ({destinations}) => {
  console.log(destinations);
  return (
    <>
      {destinations.map((destination) => (
        <li className={css.dest_cards__item} key={destination._id}>
          <Link className={css.dest_cards__item__link} to={`/attractionDetail/${destination._id}`}>
            <div className={css.dest_cards__item__info}>
              <h6 className={css.dest_cards__item__text}>{destination.name}</h6>
              <h5 className={css.dest_cards__item__text}>{destination.address}</h5>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default CardItem;
