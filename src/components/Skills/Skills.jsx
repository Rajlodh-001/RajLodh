import React from "react";

import "./skills.css";
import AboutMe from "../../assets/avatar-2.svg";
// import AboutBox from "./AboutBox";
// import DownloadButton from "./DownloadPdf";

// QL, MySQL, MongoDB.
// Node.js, Express.js, Mongoose, APIs, Git, Github.
// HTML, CSS, Bootstrap 5,Tailwind CSS, JavaScript, React , Next.js
const Skills = () => {
  const data = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "Bootstrap 5" },
    { id: 4, skill: "Javascript" },
    { id: 5, skill: "React.Js" },
    { id: 6, skill: "Next.js" },
    { id: 7, skill: "Tailwind CSS" },
    { id: 8, skill: "Node.js" },
    { id: 9, skill: "Express.js" },
    { id: 10, skill: "Git" },
    { id: 18, skill: "React Redux" },

    { id: 11, skill: "GitHub Actions" },
    { id: 18, skill: "Redux ToolKit" },
    { id: 12, skill: "Mongoose" },
    { id: 13, skill: "Github" },
    { id: 14, skill: "APIs" },
    { id: 18, skill: "JWT Auth" },

    { id: 15, skill: "SQL" },
    { id: 16, skill: "MongoDB" },
    { id: 17, skill: "MySQL" },
  ];

  return (
    <section className="skill container section" id="Skills">
      <h2 className="section__title">Technology & Skills</h2>
      <div className="skill__container grid">
        {/* <img src={AboutMe} alt="" className="skill__img" /> */}
        <div className="skill__data grid">
          <div className="skill__info">
            <p className="skills__description">
              {/* A Full Stack Developer with a strong foundation in  React.js, Next.js, Node.js, Express.js, and MongoDB. Proficient in building scalable, responsive web applications using modern technologies like Tailwind CSS, Redux Toolkit, and JWT Authentication. Passionate about clean code, API development, and optimizing performance to deliver seamless user experiences. */}
            </p>
            <p className="skills__description_segment">
              <span>Front-End Development:</span> HTML, CSS, Bootstrap 5,
              Tailwind CSS, JavaScript, React.js, Next.js
            </p>
            <p className="skills__description_segment">
              <span>State Management:</span> React Redux, Redux Toolkit
            </p>
            <p className="skills__description_segment">
              <span> Back-End Development:</span> Node.js, Express.js, API
              Development, JWT Authentication
            </p>
            <p className="skills__description_segment">
              <span>Database Management:</span> SQL, MySQL, MongoDB, Mongoose
            </p>
            <p className="skills__description_segment">
              <span>Version Control & CI/CD:</span> Git, GitHub, GitHub Actions
            </p>
            <p className="skills__description_segment">
              <span>Additional Skills:</span> RESTful APIs, Authentication & Authorization, Performance Optimization
            </p>
            <p className="skills__description_segment"><span id="last">Some Skills Listed :</span></p>
            <p className="skill__description">
              {data.map((item, index) => (
                <span className="skills_data" key={index}>
                  {item.skill}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      {/* <AboutBox /> */}
    </section>
  );
};

export default Skills;
