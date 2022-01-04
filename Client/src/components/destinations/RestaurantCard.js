import React from "react";
import { Link } from "react-router-dom";
import css from "./Cards.module.css"

const RestaurantCard = ({restaurants}) => {
  console.log(restaurants);
  return (
    <>
      {restaurants.map((restaurant) => (
        <li className={css.cards__item} key={restaurant._id}>
          <Link className={css.cards__item__link} to={`/restaurantdetail/${restaurant._id}`}>
            <div className={css.cards__item__info}>
              <h6 className={css.cards__item__text}>{restaurant.name}</h6>
              <h5 className={css.cards__item__text}>{restaurant.address}</h5>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default RestaurantCard;
