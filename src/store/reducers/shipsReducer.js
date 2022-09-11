import prototypeShipsData from "../../prototypeShips.json";
const prototypeShips = prototypeShipsData["prototypes"];

const defaulShipsState = {
  ships: prototypeShips,
};

export const shipsReducer = (state = defaulShipsState, action) => {
  switch (action.type) {
    case "SET_SHIPS":
      return { ...state, ships: action.payload };
    default:
      return state;
  }
};
