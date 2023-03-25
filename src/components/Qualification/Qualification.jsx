import React from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill, BsFillCalendarCheckFill } from "react-icons/bs";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h3 className="section__title">Qualification</h3>
      <span className="section__subtitle">My journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active">
            <FaGraduationCap className="qualification__icon" /> Education
          </div>
          <div className="qualification__button button--flex">
            <BsBriefcaseFill className="qualification__icon" /> Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2021 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
