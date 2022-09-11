const defaultShipState = {
  ship: {},
};

export const shipReducer = (state = defaultShipState, action) => {
  switch (action.type) {
    case "SET_SHIP":
      return { ...state, ship: action.payload };
    default:
      return state;
  }
};
