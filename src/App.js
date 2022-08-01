import React from "react";
//Bootstrap Import In App.js
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//Styles Import In App.js
import "./assets/style/style.scss";
//Import Header In App.js
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
