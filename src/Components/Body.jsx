import React from "react";

const Body = (props) => {
  console.log(props.title);
  return <h1>{props.title}</h1>;
};

export default Body;
