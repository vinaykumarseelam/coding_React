//---------------Props & Children Example -------------

import React from "react";

const ButtonsProp = (props) => {
  const clicked = () => {
    alert(`${props.name} clicked`);
  };

  const filter = () => {
    if (props.size === "l") return <h1>{props.children}</h1>;
    if (props.size === "m") return <h3>{props.children}</h3>;
    if (props.size === "s") return <h5>{props.children}</h5>;

    return <p>{props.children}</p>;
  };
  return (
    <button style={{ backgroundColor: props.color }} onClick={clicked}>
      {filter()}
    </button>
  );
};

export default ButtonsProp;
