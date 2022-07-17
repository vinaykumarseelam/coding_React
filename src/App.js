import React from "react";
import Heading from "./Components/Heading";
import Body from "./Components/Body";
import Button from "./Components/Buttons";
import ButtonsProp from "./Components/ButtonsProps";
const App = () => {
  var myElement = <h1>JSX Constatnt Value</h1>;
  let yourElement = (
    <h1>
      <u>Hii This is Vinay</u>
    </h1>
  );
  return (
    <>
      {/* {yourElement}
      {myElement} */}

      {/* <Heading title="Vinay" body="myBody" />
      <Heading title="Kumar" />
      <Body title="body" />
      <Heading title="Reddy" />
      <Body title="Seelam" /> */}

      {/* <Button title="Vinay's Button" />
      <Button title="Kumar's Button" />
      <Button title="Reddy's Button" />
      <Button title="Seelam's Button" />
      <Button title="React's Button" />
      <Button title="Developer's Button" />
      <Button title="Coding's Button" /> */}

      <ButtonsProp color="blue" name="vinay's Button">
        Click Vinay !!
      </ButtonsProp>
      <ButtonsProp color="green" name="kumar's Button">
        Click Kumar !!
      </ButtonsProp>
      <ButtonsProp color="yellow" name="Reddy's Button">
        Click Reddy !!
      </ButtonsProp>
      <ButtonsProp color="orange" name="seelam's Button">
        Click Seelam !!
      </ButtonsProp>
      <ButtonsProp color="black" name="React's Button">
        Click React !!
      </ButtonsProp>
    </>
  );
};

export default App;
