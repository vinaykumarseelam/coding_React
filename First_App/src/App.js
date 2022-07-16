import React from "react";
import Heading from "./Components/Heading";

const App = () => {
  var myElement = <h1>JSX Constatnt Value</h1>;
  let yourElement = (
    <h1>
      <u>Hii This is Vinay</u>
    </h1>
  );
  return (
    <>
      {yourElement}
      {myElement}
      <h1>Vinay</h1>
      <h1>Vinay</h1>
    </>
  );
};

export default App;
