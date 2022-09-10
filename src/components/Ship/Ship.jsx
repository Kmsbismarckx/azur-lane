import React from "react";
import classes from "./Ship.module.css";

const Ship = ({ ship, onClick, setCurrentShip }) => {
  let shipImgURL =
    process.env.PUBLIC_URL +
    `/media/prototypes/${ship.name.toLowerCase()}icon.png`;
  return (
    <li id={ship.id} className={classes.ship}>
      <h1>{ship.name}</h1>
      <div className={classes.ship__description}>
        <img
          className={
            classes.ship__icon +
            " ship__img " +
            ship.rarity.toLowerCase().split(/\s+/).join("")
          }
          src={shipImgURL}
          alt={ship.name}
          onClick={() => {
            onClick();
            setCurrentShip({
              name: ship.name,
              imgURL: shipImgURL,
              type: ship.type,
              rarity: ship.rarity,
              affiliation: ship.affiliation,
              fp: ship.stats.fp,
              hp: ship.stats.hp,
              aa: ship.stats.aa,
              ms: ship.stats.ms,
              avi: ship.stats.avi,
              trp: ship.stats.trp,
              skills: ship.skills,
            });
          }}
        />
      </div>
    </li>
  );
};

export default Ship;
