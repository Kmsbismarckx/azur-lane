import React from "react";
import classes from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.header__nav_links}>
      <Link className={classes.header__nav_link} to="/About">
        About
      </Link>
      <Link className={classes.header__nav_link} to="/Ships">
        Ships
      </Link>
    </div>
  );
};

export default Navbar;
