import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import "./about.css";
import background from "../../images/background.png";

const About = () => {
  return (
    <div id="home" className="about">
      <div className="container">
        <div className="left-container">
          <div className="info">
            <h2 className="heading">Hello, I am Ryan Taylor</h2>
            <TypeAnimation
              sequence={[
                "Software Developer", 2000, ""
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="sub-heading"
            />
            <p className="description">
              Rising Senior at Howard University studying Computer Science with career interests in product managment, cybersecurity, and machine learning.
            </p>
          </div>
          <div className="buttons">
            <a
              href={resumePDF}
              className="download-link"
              download
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1" }}>
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons">
            <ul className="social-icons">
                <a href="https://github.com/RecT3">
                  <AiFillGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/ryan-ec-taylor/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a href="https://www.instagram.com/ryanectaylor/">
                  <AiFillInstagram className="icon" />
                </a>
                <a href="https://www.facebook.com/ryanectaylor/">
                  <FaFacebook className="icon" />
                </a>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <div className="img-container">
            <img
              src={background}
              alt="Ryan Taylor"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;