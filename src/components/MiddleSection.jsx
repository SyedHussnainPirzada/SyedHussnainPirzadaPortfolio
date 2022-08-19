import React from "react";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Services from "../views/Services";
import Skills from "../views/Skills";

const MiddleSection = () => {
  return (
    <>
      <div id="home" style={{ height: 600 }} className="mx-5 home_main_div">
        <Home />
      </div>
      <div id="about" style={{ height: 600 }} className="mx-5 home_main_div">
        <About />
      </div>
      <div id="skills" style={{ height: 600 }} className="mx-5 home_main_div">
        <Skills />
      </div>
      <div id="services" style={{ height: 600 }} className="mx-5 home_main_div">
        <Services />
      </div>
      <div id="contact" style={{ height: 600 }} className="mx-5 home_main_div">
        <Contact />
      </div>
    </>
  );
};

export default MiddleSection;
