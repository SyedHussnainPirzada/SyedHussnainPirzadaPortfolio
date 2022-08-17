import React from "react";
//Import react-animated-cursor from react-animated-cursor
import AnimatedCursor from "react-animated-cursor";
const WebCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={20}
      color="129, 77, 177"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default WebCursor;
