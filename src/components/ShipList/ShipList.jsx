import React from "react";
import Ship from "../Ship/Ship";
import classes from "./ShipList.module.css";
import ShipFilter from "../ShipFilter/ShipFilter";

const ShipList = ({ ships, filter, setFilter, onClick, setCurrentShip }) => {
  if (!ships.length) {
    return (
      <div className={classes.ship__list_wrapper}>
        <ShipFilter filter={filter} setFilter={setFilter} />
        <div
          className={classes.ship__list}
          style={{ justifyContent: "middle" }}
        >
          <h1 style={{ textAlign: "center" }}>Ничего не найдено!</h1>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.ship__list_wrapper}>
      <ShipFilter filter={filter} setFilter={setFilter} />
      <ul className={classes.ship__list}>
        {ships.map((ship) => (
          <Ship
            key={ship.id}
            ship={ship}
            onClick={onClick}
            setCurrentShip={setCurrentShip}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
