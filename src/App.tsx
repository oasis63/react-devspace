import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Formdemo from "./components/Formdemo";

function App() {
  return (
    <>
      <CounterOne />
      <br />
      <CounterTwo />
      <br />
      <Formdemo />
    </>
  );
}

export default App;
