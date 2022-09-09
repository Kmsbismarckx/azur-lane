import React from "react";
import classes from "./Input.module.css";

const Input = (props, className) => {
  return (
    <div className={classes.input__text_search}>
      <input {...props} className={classes.input__text} />
    </div>
  );
};

export default Input;
