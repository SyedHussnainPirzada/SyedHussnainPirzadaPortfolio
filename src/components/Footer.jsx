import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="text-center">
        <h6>&copy; {year} by Hussnain. All Rights Reserved</h6>
      </div>
    </>
  );
};

export default Footer;
