import React from "react";
import Data from "./Data";
import Card from "./Card";

import "./education.css";
const Education = () => {
  return (
    <section className="education container section" id="Education">
      <h2 className="section__title">Eduction </h2>

      <div className="education__container grid">

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "eduction") {
              return <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>;
            }
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
