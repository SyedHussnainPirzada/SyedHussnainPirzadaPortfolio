import React from "react";
//Bootstrap Import In App.js
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//Styles Import In App.js
import "./assets/style/style.scss";
//Import Header In App.js
import Header from "./components/Header";
// Import WebCursor In App.js
import WebCursor from "./components/WebCursor";
const App = () => {
  return (
    <>
      <WebCursor />
      <Header />
    </>
  );
};

export default App;
