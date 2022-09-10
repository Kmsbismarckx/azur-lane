import React, { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../context";

const About = () => {
  const { aboutShip } = useContext(HeaderContext);

  console.log("ships:" + aboutShip.name);
  const skills = [];
  // for (let key in ships.skills) {
  //   skills.push({
  //     [key]: ships.skills[key],
  //   });
  // }

  return (
    <div>
      <h1 style={{ paddingTop: "100px" }}>aboutShip.name</h1>
    </div>
  );
};

export default About;
