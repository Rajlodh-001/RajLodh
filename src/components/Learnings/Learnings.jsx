import React from "react";
import Data from "./Data";
import Card from "./Card";

import "./learnings.css";
const Learnings = () => {
  return (
    <section className="resume container section" id="Learnings">
      <h2 className="section__title">Learnings & Practice</h2>

      <div className="resume__container grid">

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "eduction") {
              return <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>;
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>;
            }
          })}
        </div>


      </div>
    </section>
  );
};

export default Learnings;
