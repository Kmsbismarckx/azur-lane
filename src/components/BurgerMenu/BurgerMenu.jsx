import React from "react";

const BurgerMenu = ({ onClick, active }) => {
  if (active) {
    return (
      <div className={"burger__menu " + "burger__" + active} onClick={onClick}>
        <span></span>
      </div>
    );
  }
  return (
    <div className="burger__menu" onClick={onClick}>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
