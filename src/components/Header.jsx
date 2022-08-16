import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Link } from "react-scroll";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-3">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand fs-3" to="home">
            Hussnain
            <br />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </li>
              <Switch className="fs-4" onClick={() => toggleTheme()} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
