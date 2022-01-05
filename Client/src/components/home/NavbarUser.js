import React, { useState, useEffect } from "react";
import { Button } from "../shared/Button";
import "./Navbar.css";
import avatar from "../../images/Avatar.png";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  const [user, setUser] = useState();
  const [type, setType] = useState();
  let DP = localStorage.getItem("DP");

  useEffect(() => {
    {
      /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */
    }
    setInterval(() => {
      let usetype = localStorage.getItem("userType");
      const userString = localStorage.getItem("isLoggedIn");
      const user = JSON.parse(userString);
      setUser(user);
      setType(usetype);
    }, []);
  }, 50000);

  const logout = () => {
    localStorage.clear();
    setUser(false);
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
        <Link to={`/${type}/Dashboard`}>
          {DP ? (
            <img
              src={`http://localhost:3040/${DP}`}
              alt="avatar"
              className="avatar"
            />
          ) : (
            <img src={avatar} alt="avatar" className="avatar" />
          )}
        </Link>
      </div>
    );
  }
};

export default NavbarUser;
