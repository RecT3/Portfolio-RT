import React from "react";
import styled from "styled-components";
import { RxExternalLink } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SlWrench } from "react-icons/sl";
import "./aspects.css";
import RetroCity from "../images/RetroCity.png";
import Quikbook from "../images/Quikbook.png";

const data = [
  {
    id: 1,
    img: "https://i.ibb.co/0s3pdnc/1.png",
    title: "Image Filters",
    link: "",
    git: "",
    desc: "Recreated the image filters: sepia, grayscale, blur, flip, using Python. By editing the rgb values of each pixel, I was able to create a program that would apply these filters to any image.",
  },
  {
    id: 2,
    img: RetroCity,
    title: "Retro City",
    link: "",
    git: "https://github.com/mattget21/RetroCity",
    desc: "Collaborated with a team of 4 to create a game portal that housed six retro games. I was responsible for the backend, which included the implementation of the game logic, and the creation of the database.",
  },
  {
    id: 3,
    img: "",
    title: "PictoChat Clone (WIP)",
    link: "",
    git: "",
    desc: "A clone of the Nintendo DS app, PictoChat. This project is still a work in progress, but the goal is to create a chatroom that allows users to draw and send messages to each other. Made with React, Node.js, and Socket.io.",
  },
  {
    id: 4,
    img: Quikbook,
    title: "Quikbook",
    link: "",
    git: "",
    desc: "Placed 3rd at the BE Smart Hackathon with this project. Quikbook streamlined the rebooking of flights and hotels, without the need for a customer service representative. Made with American Airlines' Flight Engine API, Node.js, and React.",
  },
];

const ProjectCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="project-card-container"
          >
            <Popup className="img-content">
              <div className="image-container">
                {data.img ? (
                  <img src={data.img} alt={data.title} className="image" />
                  ) : (
                  <SlWrench className="image"/>
                )}
              </div>
              <div className="popup">
                <p className="project-description">{data.desc}</p>
                <div className="button-group">
                  {data.link && (
                      <Link to={data.link} target="_blank" className="button">
                        <RxExternalLink className="project-icon" />
                        <p className="button-text">Demo</p>
                      </Link>
                  )}
                  {data.git && (
                    <Link to={data.git} target="_blank" className="button">
                      <AiFillGithub className="project-icon" />
                      <p className="button-text">Code</p>
                    </Link>
                  )}
                </div>
              </div>
            </Popup>
            <p className="project-title">{data.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;


const Popup = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
