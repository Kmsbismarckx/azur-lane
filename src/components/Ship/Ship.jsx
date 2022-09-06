import React from "react";
import classes from "./Ship.module.css";

const Ship = ({ ship }) => {
  return (
    <li id={ship.id} className={classes.ship}>
      <h1>{ship.name}</h1>
      <div className={classes.ship__description}>
        <img
          className={
            classes.ship__icon +
            " " +
            ship.rarity.toLowerCase().split(/\s+/).join("")
          }
          src={
            process.env.PUBLIC_URL +
            `/media/prototypes/${ship.name.toLowerCase()}icon.png`
          }
          alt={ship.name}
        />
        <div>
          <p>{ship.rarity}</p>
          <p>{ship.type}</p>
          <p>{ship.affiliation}</p>
        </div>
      </div>
    </li>
  );
};

export default Ship;
