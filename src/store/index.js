import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { shipReducer } from "./reducers/shipReducer";
import { shipsReducer } from "./reducers/shipsReducer";

const rootReducer = combineReducers({ shipReducer, shipsReducer });

export const store = configureStore({ reducer: rootReducer });
