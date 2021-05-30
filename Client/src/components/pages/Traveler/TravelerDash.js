import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    <div>
      <h2>Traveler Dashboard</h2>
      <button className="btn"> Update Profile </button>
      <div className="Add_services">
        <button className="btn" onClick={handle_restaurant}>
          Add Resturant
        </button>
        <button className="btn" onClick={handle_tour}>
          Add Tour
        </button>
      </div>
    </div>
  );
};

export default TravelerDash;
