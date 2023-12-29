import React from "react";
import "./aspects.css"; // Import the styles

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className={`box ${black}-background ${white}-text`}>
      <div className={`logo-background ${white}-background ${black}-text`}>{logo}</div>
      <p className="skill-text">{skill}</p>
    </div>
  );
};

export default SkillBox;
