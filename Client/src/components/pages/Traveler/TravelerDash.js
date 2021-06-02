import React from "react";
import { useHistory } from "react-router-dom";
import css from "./TravelerDash.module.css";

// provider dash uses react-bootstrap

const TravelerDash = () => {
  const history = useHistory();

  //Button Handlers
  const handle_restaurant = () => {
    history.push("/AddRestaurantForum");
  };

  const handle_tour = () => {
    history.push("/AddTourForum");
  };

  return (
    <div className={css.Container}>
      <head>
        <h2>Traveler Dashboard</h2>
        <h3>Welcome!</h3>
        <button className="btn"> Update Profile </button>
      </head>

      <x>
        <div className={css.Add_services}>
          <button className={css.btn} onClick={handle_restaurant}>
            Add Resturant
          </button>
          <button className={css.btn} onClick={handle_tour}>
            Add Tour
          </button>
        </div>
      </x>
      <main> hi</main>
      <right>maps</right>
      <nav></nav>
      <footer></footer>
    </div>
  );
};

export default TravelerDash;
