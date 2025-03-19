import { useState } from "react";
import "./App.css";
import './index.css';
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Graducation from "./components/resume/Education";
import Learnings from "./components/Learnings/Learnings";
import Portfolio from "./components/portfolio.jsx/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Skills from "./components/Skills/Skills";


function App() {
  // const [count, setCount] = useState(0);

  return (<>
  
  <Sidebar/>
  <main className="main">
    <Home/>
    <About/>
    <Skills/>  
    <Graducation/>
    <Learnings/>
    <Portfolio/>
    {/* <Blog/> */}
    <Contact/>

  </main>
  </>);
}

export default App;
