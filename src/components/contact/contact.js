import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      {/* heading */}
      <div 
       className="heading">
        <h3 className="section-h3">
          Contact
        </h3>
        <span className="section-span"></span>
      </div>

      {/* card*/}
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-container">
            <div data-aos="zoom-in">
              <h1 className="contact-h1">
                Thanks For Visiting!</h1>
              <h3 className="contact-h3">
                Feel free to contact me.
              </h3>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form
            data-aos="zoom-in"
            className="contact-form"
            action="mailto:ryanectaylor@gmail.com"
          >
            <input
              className="contact-input"
              type="email"
              placeholder="e.g. example@email.com"
              name=""
            />
            <input
              className="contact-input"
              type="text"
              placeholder="e.g. John Doe"
              name=""
            />
            <textarea
              className="contact-input"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
            />
            <button
              className="contact-button"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;