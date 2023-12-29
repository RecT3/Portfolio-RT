import React from "react";
import { RiInstagramFill, RiLinkedinBoxFill, RiFacebookBoxFill } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="container">
      <div className="footer-wrapper">
        <h2 data-aos="zoom-out" className="footer-h2">Let's Connect</h2>
        <div className="button-container">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://www.facebook.com/ryanectaylor/"
            className="button-box"
          >
            <RiFacebookBoxFill className="button-icon" />
            <p>Facebook</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://www.linkedin.com/in/ryan-ec-taylor/"
            className="button-box"
          >
            <RiLinkedinBoxFill className="button-icon" />
            <p>LinkedIn</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.instagram.com/ryanectaylor/"
            className="button-box"
          >
            <RiInstagramFill className="button-icon" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="footer-text">
          | Copyright &copy; <span>2023 RecT3</span> All rights reserved |
        </div>
      </div>
    </div>
  );
};

export default Footer;
