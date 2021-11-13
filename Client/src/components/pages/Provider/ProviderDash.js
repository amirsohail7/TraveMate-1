import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./ProviderDash.module.css";
import { Card } from "react-bootstrap/";
import useFetch from "../../shared/useFetch";
import DirectoryItem from "../../Tours/DirectoryItem";
import UpdateProfile from "./Forms/UpdateProfile";

//import { Button } from "react-bootstrap";

// provider dash uses react-bootstrap

const ProviderDash = () => {
  //let ID = sessionStorage.getItem("userType");
  const [edit_profile, setEdit] = useState(false);

  const {
    error,
    isPending,
    data: tours,
  } = useFetch("http://localhost:3040/tour/");
  const history = useHistory();

  //Button Handlers
  const handle_restaurant = () => {
    history.push("/AddRestaurantForum");
  };

  const handle_tour = () => {
    history.push("/AddTourForum");
  };

  const handle_hotel = () => {
    history.push("/AddHotelForm");
  };

  const handle_profile = () => {
    setEdit(!edit_profile);
    console.log(edit_profile);
  };

  const handle_logout = () => {
    sessionStorage.clear();
    history.push("/signin");
  };

  return (
    <div className={css.Main_container}>
      <header>
        <span>
          <div>
            <h2>Provider Dashboard</h2>
            <h3>Welcome!</h3>
          </div>
          <button className={css.btnprofile} onClick={handle_profile}>
            {" "}
            Update Profile{" "}
          </button>
          <button className={css.btnprofile} onClick={handle_logout}>
            {" "}
            Logout{" "}
          </button>
          {edit_profile ? <UpdateProfile /> : null}
        </span>
      </header>

      <x>
        <div className={css.add_services}>
          <button className={css.btn} onClick={handle_restaurant}>
            Add Resturant
          </button>
          <button className={css.btn} onClick={handle_tour}>
            Add Tour
          </button>
          <button className={css.btn} onClick={handle_hotel}>
            Add Hotel
          </button>
          <button className={css.btn} onClick={handle_hotel}>
            Create Package
          </button>
        </div>
      </x>
      <main>
        <div>
          <h3> Active Services</h3>
          <div className="directory_container">
            <h3> Tours</h3>
            {error && <div>{error}</div>}
            {isPending && <div className="loader"></div>}
            {tours && <DirectoryItem tours={tours} />}
          </div>
        </div>
      </main>
      <nav>
        <h3>Provider Tools</h3>
        <h4>Bookings</h4>
        <h4>Analytics</h4>
        <h4>Approvals</h4>
      </nav>
      <footer>
        <h5>TraveMate</h5>
      </footer>
    </div>
  );
};

export default ProviderDash;
