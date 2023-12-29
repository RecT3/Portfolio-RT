import React from "react";
import ProgressBar from "../../aspects/progress_bar";
import SkillBox from "../../aspects/skill_box";
import "./skills.css";

import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiMongodb, SiNodedotjs, SiDjango, SiReact } from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="container">
      <div data-aos="fade-up" className="title">
        <h3>My Skills</h3>
        <span></span>
      </div>
      <div className="content">
        <div className="left-box">
          <div data-aos="zoom-in" className="progress">
            <div className="progress-bars">
              <ProgressBar logo={<FaPython />} name={"Python"} value={95} />
              <ProgressBar logo={<SiCplusplus />} name={"C++"} value={88} />
              <ProgressBar logo={<FaJava />} name={"Java"} value={80} />
              <ProgressBar logo={<FaJsSquare />} name={"Javascript"} value={75} />
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="first2">
            <SkillBox logo={<SiNodedotjs />} black={"white"} white={"black"} skill={"Node Js"} />
            <SkillBox logo={<SiReact />} black={"black"} white={"white"} skill={"React"} />
          </div>
          <div className="last2">
            <SkillBox logo={<SiMongodb />} black={"black"} white={"white"} skill={"MongoDB"} />
            <SkillBox logo={<SiDjango />} black={"white"} white={"black"} skill={"Django"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
