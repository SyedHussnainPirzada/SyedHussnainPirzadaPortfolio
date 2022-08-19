import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Skills = () => {
  const data = [
    {
      id: 1,
      name: "Html",
      percentage: "85",
    },
    {
      id: 2,
      name: "CSS",
      percentage: "82",
    },
    {
      id: 3,
      name: "SCSS",
      percentage: "84",
    },
    {
      id: 4,
      name: "Javascript",
      percentage: "80",
    },
    {
      id: 5,
      name: "React Js",
      percentage: "78",
    },
    {
      id: 6,
      name: "React Native",
      percentage: "75",
    },
  ];
  return (
    <>
      <div className="container ">
        <div className="col-10 mx-auto ">
          <div className="text-center main_heading py-2">
            <h1>
              Skills
              <p>Programming Skills I'Have</p>
            </h1>
          </div>
          <div className="row text-center shadows pb-4">
            {data?.map((user, index) => (
              <div
                className="col-md-4 col-10 mx-auto my-2 text-center"
                key={index}
              >
                <h4 className="py-3 dark-white">{user.name}</h4>
                <div className="counterUp ">
                  <CountUp end={user.percentage} suffix=" %" redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
