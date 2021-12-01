import React, { useState, useEffect } from "react";
import AccountMenu from "../shared/AccountMenu";
import { Button } from "../shared/Button";

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
                to="/chatbot"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Chatbot
              </Link>
            </li>

            {/* we can use thing To Do tab to open a chat bot feature which interact with user, 
                ask their intrests,hobbies and suggests
                them destination according to those iontrest and shows to do activities their, 
                here carousal can be used for the view */}

            <li className="nav-item">
              <Link
                to="/resturants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Things To Do
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN IN
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" link="/signin">
              SIGN IN
            </Button>
          )}

          <AccountMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
