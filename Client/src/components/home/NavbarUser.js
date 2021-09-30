import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "../shared/Button";
import "./Navbar.css";

const NavbarUser = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    {
      /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */
    }
    setInterval(() => {
      const userString = localStorage.getItem("isLoggedIn");
      //const user = JSON.parse(userString);
      setUser(userString);
    }, []);
  }, 5000);

  const logout = () => {
    localStorage.setItem("isLoggedIn", false);
    console.log("Log OUT clicked");
  };

  if (!user) {
    console.log("User not logged in");
    return (
      <div className="navbar-nav ml-auto">
        <Button buttonStyle="btn--outline" link="/signin">
          LOGIN
        </Button>
      </div>
    );
  }
  if (user) {
    console.log("User logged in");
    return (
      <div className="navbar-nav ml-auto">
        <Button buttonStyle="btn--outline" link="/" onClick={logout}>
          LOGOUT
        </Button>
      </div>
    );
  }
};

export default NavbarUser;
