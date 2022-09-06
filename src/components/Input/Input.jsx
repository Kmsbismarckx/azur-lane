import React from "react";
import classes from "./Input.module.css";
const Input = (props, { className }) => {
  return <input className={classes.input__text} {...props} />;
};

export default Input;
