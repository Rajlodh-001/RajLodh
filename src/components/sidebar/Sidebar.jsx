import React, { useState } from "react";
import "./sidebar.css";



const Sidebar = () => {

  const[toggle,showMenu]=useState(false);
  return(
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
    <a href="#Home" className="nav__logo">
      {/* <img src=".\src\assets\logo.svg" alt="" /> */}
      <div className="nav__logo__text">
      <p className="nav__logo_text">R</p><p className="nav__logo_red_dot ">.</p>
      </div>
     
    </a>


    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#Home" className="nav__link">
            <i className="icon-home"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#About" className="nav__link">
              <i className="icon-user-following"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#Skills" className="nav__link">
              {/* <i className="icon-user-following"></i> icon-pin,-badge */}
              <i className="icon-graph"></i>
            </a>
          </li>



          <li className="nav__item">
            <a href="#Education" className="nav__link">
              <i className="icon-graduation"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#Learnings" className="nav__link">
              <i className="icon-briefcase"></i>
            </a>
          </li>

          <li className="nav__item">
            <a href="#Portfolio" className="nav__link">
              <i className="icon-layers"></i>
            </a>
          </li>
          {/* <li className="nav__item">
            <a href="#Blog" className="nav__link">
              <i className="icon-note"></i>
            </a>
          </li> */}
          <li className="nav__item">
            <a href="#Contact" className="nav__link">
              <i className="icon-bubble"></i>
            </a>
          </li>
        </ul>
      </div>

    </nav>
    <div className="nav__footer">
      <span className="copyright">&copy; 2024 - 2025.</span>
    </div>
  </aside>

  <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=>{showMenu(!toggle)}}>
    <i className="icon-menu"></i>
  </div>
    </>
  )


};

export default Sidebar;
