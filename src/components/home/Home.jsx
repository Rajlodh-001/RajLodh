import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="Home">
      <div className="intro">
      <Shapes/>
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Raj Lodh</h1>
        <span className="home__eduction">I'm Full-stack developer</span>
        <HeaderSocials/>

        <a href="#Contact" className="btn">Hire Me</a>
        <ScrollDown/>
     
      </div>
    </section>
  );
};

export default Home;
