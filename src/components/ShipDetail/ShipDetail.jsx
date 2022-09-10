import React from "react";
import classes from "./ShipDetail.module.css";

const ShipDetail = ({ name, urlPreFix, currentShip, prop }) => {
  return (
    <p className={classes.ship__detail}>
      {name}:
      <img
        src={urlPreFix + `/media/types/${currentShip[prop]}.png`}
        alt={currentShip[prop]}
      />
      {currentShip[prop]}
    </p>
  );
};

export default ShipDetail;
