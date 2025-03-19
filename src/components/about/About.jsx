import React from "react";

import "./about.css";
import AboutMe from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import DownloadButton from "./DownloadPdf";
const About = () => {
  return (
    <section className="about container section" id="About">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={AboutMe} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Raj Lodh, Full Stack developer from Mumbai, I have rich
              experience in web site Design and Working of JavaScript, also I am
              good at Express and DataBase
            </p>
            {/* <a href="" className="btn">
              Download CV
            </a> */}
            <DownloadButton/>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Cloud Infrastructure</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DevOps</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
