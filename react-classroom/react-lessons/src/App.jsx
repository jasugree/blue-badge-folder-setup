import React, { useState, useEffect } from "react";

import "./App.css";
import Calculator from "./components/day03-challenge/Calculator/Calculator";
import Count23 from "./components/day03-challenge/Count-23";
import InputField from "./components/day03-challenge/inputFieldDemo/InputField";
import TenLittleMonkeys from "./components/day03-challenge/TenLittleMonkey";

function App() {
  // This is a comment
  const welcomeName = "Jake";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys />
      <hr />
      <Count23 /> */}
      <InputField />
      <hr />
      <Calculator />
    </div>
  );
}

export default App;
