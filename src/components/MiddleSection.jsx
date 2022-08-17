import React from "react";
import About from "../views/About";
import Home from "../views/Home";
import Services from "../views/Services";

const MiddleSection = () => {
  return (
    <>
      <div id="home" style={{ height: 500 }} className="mx-5">
        <Home />
      </div>
      <div id="about" className="mx-5">
        <About />
      </div>
      <div id="services" className="mx-5 my-5 py-4">
        <Services />
      </div>
      <div
        id="contact"
        style={{ height: 800, border: "1px solid black" }}
        className="mx-5 my-2"
      >
        <h1>This is Contact section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
    </>
  );
};

export default MiddleSection;
