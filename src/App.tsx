import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Formdemo from "./components/Formdemo";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import HtmlCompiler from "./components/CodeEditor/HtmlCompiler";
import StoreDemo1 from "./components/StoreDemo/StoreDemo1";
import StoreDemo2 from "./components/StoreDemo/StoreDemo2";

function App() {
  return (
    <>
      {/* <h1> Custom hook</h1>
      <CounterOne />
      <br />
      <CounterTwo />
      <br />
      <Formdemo /> */}

      <h1> State handling by Zustand</h1>

      <StoreDemo1 />
      <StoreDemo2 />

      {/* <div>
        <h1>HTML, JS, CSS Code Editor</h1>
        <CodeEditor />
      </div> */}
      {/* <HtmlCompiler /> */}
    </>
  );
}

export default App;
