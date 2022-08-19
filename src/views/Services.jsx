import React from "react";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { VscFileCode } from "react-icons/vsc";
const Services = () => {
  const data = [
    {
      id: 1,
      name: "Website Design",
      details: "Create interactive front end as per the design",
      icon: <AiOutlineDesktop />,
    },
    {
      id: 2,
      name: "Website Development",
      details:
        "I also develop the websites. I create high performance website with blazing fast speed",
      icon: <IoCode />,
    },
    {
      id: 3,
      name: "App Development",
      details:
        "I develop mobile application. I create mobile app with eye catching ui",
      icon: <AiOutlineMobile />,
    },
    {
      id: 4,
      name: "Project Architecture",
      details: "Create project Architecture",
      icon: <VscFileCode />,
    },
  ];
  return (
    <>
      <div className="container ">
        <div className="col-10 mx-auto ">
          <div className="text-center main_heading">
            <h1>
              Services
              <p>What I'M Providing?</p>
            </h1>
          </div>
          <div className="row ">
            {data?.map((user, index) => (
              <div className="col-md-4 col-10 mx-auto my-2" key={index}>
                <div className="card p-4 h-100">
                  <div className="card-head text-center">
                    <h4> {user.icon}</h4>
                    <h4>{user.name}</h4>
                  </div>
                  <div className="card-body text-center">
                    <h6>{user.details}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
