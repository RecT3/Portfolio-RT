import React from "react";
import ProjectCard from "../../aspects/project_card";
import "./work.css";

const Work = () => {
  return (
    <div id="works" className="container">
      <div data-aos="fade-up" className=" heading">
        <h3>Projects</h3>
        <span></span>
      </div>
      <div className=" card-wrapper">
        <div className=" card-box">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Work;