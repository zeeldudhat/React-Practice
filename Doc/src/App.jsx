import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Component from "./Componets";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component/>
    </>
  );
}

export default App;
