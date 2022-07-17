import React from "react";

const ButtonsProp = (props) => {
  const clicked = () => {
    alert(`${props.name} clicked`);
  };
  return (
    <button style={{ backgroundColor: props.color }} onClick={clicked}>
      {props.children}
    </button>
  );
};

export default ButtonsProp;
