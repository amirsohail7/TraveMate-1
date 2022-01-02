import React from "react";
import { Link } from "react-router-dom";
import css from "./Cards.module.css";

const CardItem = ({ destinations }) => {
  console.log(destinations);
  return (
    <>
      {destinations.map((destination) => (
        <div className={css.dest_cards__item} key={destination._id}>
          <Link
            className={css.dest_cards_item_link}
            to={`/attractionDetail/${destination._id}`}
          >
            <div className={css.dest_cards_item_info}>
              <h3 className={css.dest_cards_item_text}>{destination.name}</h3>
              <p className={css.dest_cards_item_text}>{destination.address}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardItem;
