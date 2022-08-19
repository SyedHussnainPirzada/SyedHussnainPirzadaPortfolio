import React from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";
import MyImage from "../assets/images/myImage.png";
const Home = () => {
  return (
    <>
      <div className="container bbb">
        <div className="col-10 mx-auto ">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="Home">
                <h4>
                  Hello,I'M <span>Syed Hussnain Pirzada</span>
                </h4>
                <Typical
                  steps={[
                    "React Js Developer",
                    2500,
                    "React Native Developer",
                    2500,
                    "Front End Developer",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="h5"
                />
                <div className="d-flex forbtn">
                  <Link to="contact" spy={true} smooth={true}>
                    <button className="btn buttonOne border m-2">
                      Hire Me
                    </button>
                  </Link>
                  <button className="btn buttonTwo border m-2">
                    Get Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
              <img src={MyImage} alt="Hello World" className="w-25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
