import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="col-10 mx-auto ">
          <div className="text-center main_heading">
            <h1>
              About Me
              <p>Why Choose Me?</p>
            </h1>
          </div>
          <div className="shadows">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                Image here
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="about_text">
                  <h6>
                    I'M React Js developer with background knowledge of Redux
                    and Redux-Toolkit with more than 2 years experience.I have
                    acquired the skills and knowledge necessary to make your
                    project a success. I enjoy every step of the design and
                    development process, from discussion and collaboration.
                  </h6>
                  <h5>Here are a Few Highlights:</h5>
                  <span>React Js Developer</span>
                  <span>Interactive Front End as per the design</span>
                  <span>Redux for State Mnanagement</span>
                  <span>Mui & Ant Design for Designing</span>
                  <span>Create Project Architecture</span>
                </div>
                <div className="d-flex about_text">
                  <Link to="contact" spy={true} smooth={true}>
                    <button className="btn border buttonOne m-2">
                      Hire Me
                    </button>
                  </Link>
                  <button className="btn border buttonTwo m-2">
                    Get Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
