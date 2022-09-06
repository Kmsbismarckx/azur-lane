import React from "react";
import classes from "./Select.module.css";

const Select = ({ options, onChange, value, className }) => {
  return (
    <select
      className={classes.select + " " + className}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
