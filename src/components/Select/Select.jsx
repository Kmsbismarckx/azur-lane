import React from "react";
import classes from "./Select.module.css";

const Select = ({ options, onChange, value, className }) => {
  return (
    <div className={classes.select}>
      <select
        className={className}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
