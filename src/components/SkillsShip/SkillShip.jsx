import React from "react";
import classes from "./SkillsShip.module.css";

const SkillShip = ({ ship }) => {
  const names = [];
  const skills = [];

  for (let key in ship.skills) {
    skills.push(ship.skills[key]);
    names.push([key]);
  }

  return (
    <div className={classes.ship__item}>
      <h1 className={classes.ship__item_name} style={{ paddingTop: "100px" }}>
        {ship.name}
      </h1>
      <img
        className={classes.ship__item_img}
        src={process.env.PUBLIC_URL + `/media/prototypes/${ship.name}large.png`}
        alt={ship.name}
      />
      {names.map((name, index) => (
        <div className={classes.ship__item_description} key={name}>
          <h1>{name}</h1>
          <div className={classes.ship__item_skill_description}>
            <img
              className={classes.ship__item_skill}
              src={process.env.PUBLIC_URL + `/media/skills/${name}.png`}
              alt="name"
              width="55"
              height="55"
            />
            <p>{skills[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillShip;
