import React from "react";
import { Link } from "react-router-dom";
import css from "./Cards.module.css";

const HotelCard = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      {hotels.map((hotel) => (
        <li className={css.cards__item} key={hotel._id}>
          <Link
            className={css.cards__item__link}
            to={`/hoteldetail/${hotel._id}`}
          >
            <div className={css.cards__item__info}>
              <h6 className={css.cards__item__text}>{hotel.name}</h6>
              <h5 className={css.cards__item__text}>{hotel.address}</h5>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default HotelCard;
