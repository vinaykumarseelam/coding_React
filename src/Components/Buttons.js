import React from "react";

const Button = (props) => {
  const clicking = function click() {
    alert(props.title);
  };
  return <button onClick={clicking}>Button</button>;
};

export default Button;
