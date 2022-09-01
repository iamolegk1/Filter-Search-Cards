import * as React from "react";

import IMAGE from "./1.png";
import "./styles.css";

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
