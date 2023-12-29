import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div id="resume" className="container">
      {/* heading */}
      <div data-aos="fade-up" className="heading">
        <h3 className="section-h3">Experience</h3>
        <span className="section-span"></span>
      </div>
      {/* cards */}
      <div className="card-wrapper">
        <div className="left-container">
          <fieldset data-aos="zoom-in" className="section-fieldset">
            <legend className="section-legend">Leadership</legend>
            <div className="design-container">
              {/* design */}
              <div className="line-container">
                <div className="ball-design"></div>
                <div className="line-design"></div>
                <div className="ball-design"></div>
              </div>
              {/* design */}
              <div className="box-design">
                <h1 className="box-heading">
                  Branch Manager
                </h1>
                <span className="box-sub-heading">
                  Vector Marketing
                </span>
                <span className="box-date">
                  May 2023 - August 2023
                </span>
                <p className="box-description">
                Successfully led recruitment efforts by actively engaging with hundreds of candidates through various channels, including social media, on-campus initiatives, and employee referrals. Demonstrated strong leadership by developing and overseeing a team of 12 sales representatives. Additionally, played a key role in driving sales growth by spearheading a team that achieved $36,000 in sales during the summer period.
                </p>
              </div>
              <div className="box-design">
                <h1 className="box-heading">
                  Field Sales Manager
                </h1>
                <span className="box-sub-heading">
                  Vector Marketing
                </span>
                <span className="box-date">
                  June 2022 - May 2023
                </span>
                <p className="box-description">
                Facilitated the organization of meetings, evaluations, and field training across multiple offices. Contributed to the recruitment process by participating in interviews and training sessions for new applicants. Demonstrated a strong sales performance by personally generating $20,000 in sales over the summer. Significantly expanded my customer base by a factor of 15 through effective personal referrals.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className=" right-container">
          <fieldset data-aos="zoom-in" className="section-fieldset">
            <legend className="section-legend">
              Education
            </legend>
            <div className=" design-container">
              {/* design */}
              <div className=" line-container">
                <div className=" ball-design"></div>
                <div className=" line-design"></div>
                <div className=" ball-design"></div>
              </div>
              {/* design */}
              <div className=" box-design">
                <h1 className=" box-heading">
                  Bachelor's, Computer Science
                </h1>
                <span className=" box-sub-heading">
                  Howard University
                </span>
                <span className=" box-date">
                  August 2021 - December 2024 (Expected)
                </span>
                <p className=" box-description">
                Pursuing a Bachelor of Science in Computer Science with an expected graduation date of December 2024. Currently maintaining a GPA of 3.5. Completed relevant coursework encompassing areas such as Large Scale Programming, Computer Science III, Computer Organization II, Fundamentals of Algorithms, Theory of Computation, and Introduction to Computer Networks.
                </p>
              </div>
            </div>
          </fieldset>
          <fieldset data-aos="zoom-in" className="section-fieldset">
            <legend className="section-legend">Awards</legend>
            <div className="design-container">
              {/* design */}
              <div className="line-container">
                <div className="ball-design"></div>
                <div className="line-design"></div>
                <div className="ball-design"></div>
              </div>
              {/* design */}
              <div className="box-design">
                <h1 className="box-heading">
                  President's Club Letter
                </h1>
                <span className="box-sub-heading">
                  Vector Marketing
                </span>
                <span className="box-date">
                  June 2022
                </span>
                <p className="box-description">
                Acknowledged as one of Vector Marketing's top sellers, ranking within the top 0.01% among 25,000 new recruits nationwide.
                </p>
              </div>
              <div className="box-design">
                <h1 className="box-heading">
                  BE Smart Hackathon
                </h1>
                <span className="box-sub-heading">
                  Black Enterprise
                </span>
                <span className="box-date">
                  November 2023
                </span>
                <p className="box-description">
                Engaged in a competitive hackathon with 180 students from 25 HBCUs, collaborating with a team of four to secure third place out of 36 teams. Demonstrated strong problem-solving, teamwork, and efficiency under pressure.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;