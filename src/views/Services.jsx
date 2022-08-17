import React from "react";

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Website Design",
      details: "Create interactive front end as per the design",
    },
    {
      id: 2,
      name: "Website Development",
      details: "Develop website as per requirement",
    },
    {
      id: 3,
      name: "Project Architecture",
      details: "Create project structure as per requirement",
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
              <div className="col-md-4 col-10 mx-auto" key={index}>
                <div className="card p-4 h-100">
                  <div className="card-head">
                    <h4>{user.name}</h4>
                  </div>
                  <div className="card-body">
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
