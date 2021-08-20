import React, { useState, useEffect } from "react";
import "./App.css";
import ChuckFetch from "./components/day04-challenge/ChuckFetch/ChuckFetch";
import MortyParent from "./components/day04-challenge/MortyFetch/MortyParent";
import UseEffectPractice from "./components/day04-challenge/useEffectPractice/UseEffectPractice";


function App() {
  // This is a comment
  const welcomeName = "Jake";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <UseEffectPractice/>
      <ChuckFetch/> */}
      <MortyParent />
    </div>
  );
}

export default App;
