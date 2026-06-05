import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TestApi from "./Componets/TestApi";
import Component from "./Componets";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component />
      {/* <TestApi /> */}
    </>
  );
}

export default App;
