import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./TravelerDash.module.css";
import { Card } from "react-bootstrap/";
import useFetch from "../../shared/useFetch";
import DirectoryItem from "../../shared/DirectoryItem";
import UpdateProfile from "./Forms/UpdateProfile";

//import { Button } from "react-bootstrap";

// provider dash uses react-bootstrap

const TravelerDash = () => {
  //let ID = sessionStorage.getItem("userType");
  const [edit_profile, setEdit] = useState(false);

  const {
    error,
    isPending,
    data: tours,
  } = useFetch("http://localhost:3040/tour/");
  const history = useHistory();

  //Button Handlers
  const handle_bookings = () => {};

  const handle_payments = () => {};

  const handle_blog = () => {
    history.push("/AddHotelForm");
  };

  const handle_reviews = () => {};

  const handle_profile = () => {
    setEdit(!edit_profile);
    console.log(edit_profile);
  };

  const handle_logout = () => {
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <div className={css.Main_container}>
      <header>
        <span>
          <div>
            <h2>Traveler Dashboard</h2>
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

      <toolbar>
        <div className={css.add_services}>
          <button className={css.btn} onClick={handle_bookings}>
            Bookings
          </button>
          <button className={css.btn} onClick={handle_payments}>
            Payments
          </button>
          <button className={css.btn} onClick={handle_blog}>
            Add blog
          </button>
          <button className={css.btn} onClick={handle_reviews}>
            Reviews
          </button>
        </div>
      </toolbar>
      <main>
        <div>
          <h3> Bookings </h3>
          <div className="directory_container">
            <h3> Tours</h3>
            {error && <div>{error}</div>}
            {isPending && <div className="loader"></div>}
            {tours && <DirectoryItem tours={tours} />}
          </div>
        </div>
      </main>
      <nav>
        <h3>Traveler Tools</h3>
        <h4>Bookings</h4>
        <h4>Approvals</h4>
      </nav>
      <footer>
        <h5>TraveMate</h5>
      </footer>
    </div>
  );
};

export default TravelerDash;
