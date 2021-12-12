import React, { useState, useEffect } from "react";
import { Button } from "../shared/Button";
import NavbarUser from "./NavbarUser";

//using link instead of a tag it dont refresh whole page when clicked and itsbetter when route is taking us
// to some page/directry inside app, a is better when its taking us to some external site or page
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false); //these states or used to togllex 'x' which appear in mobile to close and open menu
  const [button, setButton] = useState(true); //these states or used for signup button to appear adn dispapear b/w mobile nav and fillviwe nav

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TraveMate
            <i className="fa fa-compass" aria-hidden="true" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/tours" className="nav-links" onClick={closeMobileMenu}>
                Tours
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/hotels"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resturants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resturants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/attractions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Attractions
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <NavbarUser />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
