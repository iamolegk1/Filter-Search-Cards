import * as React from "react";
import "./styles.css";
import IMAGE from "./1.png";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <h1>Test</h1>
      <img src={IMAGE} alt="logo"></img>
    </>
  );
};

export default App;
