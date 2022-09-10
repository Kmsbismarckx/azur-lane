import React, { useState } from "react";
import classes from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/ships">
          <img
            src={process.env.PUBLIC_URL + `/media/site__icon.png`}
            alt="Azurlane"
          />
        </Link>
      </div>

      <Navbar />
      {active && (
        <div className={classes.nav__links}>
          <Link
            className={classes.nav__link}
            to="/Ships"
            onClick={() => setActive(false)}
          >
            Ships
          </Link>
        </div>
      )}

      <BurgerMenu
        onClick={() => {
          if (active) {
            setActive("");
          } else {
            setActive("active");
          }
          console.log(active);
        }}
        active={active}
      />
    </div>
  );
};

export default Header;
