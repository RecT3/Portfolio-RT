import React from "react";
import styled from "styled-components";
import "./aspects.css";

const ProgressBar = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="progress-bar-container">
      <div className="label-container">
        <p className="label">
          {logo} {name}
        </p>
        <p className="percent-value"> {value}%</p>
      </div>
      <div className="progress-bar">
        <Progress
          className="progress-bar-fill"
          style={{
            width: `${value}%`,
            animation: `progress-animation ${duration}s linear`,
          }}
        ></Progress>
      </div>
    </div>
  );
};

export default ProgressBar;

const Progress = styled.div`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;