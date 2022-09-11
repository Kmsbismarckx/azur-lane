import React from "react";
import { useSelector } from "react-redux";
import SkillShip from "../components/SkillsShip/SkillShip";
import { useParams } from "react-router-dom";

const About = () => {
  console.log(useParams());
  const { id } = useParams();
  const ships = useSelector((state) => state.shipsReducer.ships);
  return (
    <div>
      <SkillShip ship={ships[id - 1]} />
    </div>
  );
};

export default About;
