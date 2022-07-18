import React from "react";
import "./style-Type.css";

const Style = () => {
  return (
    <>
      <button style={{ color: "blue", textTransform: "uppercase" }}>
        Inline styling
      </button>

      <button className="jsClass">Class Styling</button>

      <button id="jsId">Id Styling</button>
    </>
  );
};

export default Style;
