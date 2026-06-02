import React, { useEffect, useState } from "react";
import Increment from "./Increment";
import { Display } from "./Count";
import { useNavigate } from "react-router-dom";
import Count2 from "./Count2";

function Task1() {
  const Task1Nav = useNavigate();

  return (
    <>
      <button Onclick={Task1Nav("/Count")}>Count</button>
      <button Onclick={Task1Nav("/Count2")}>Count2</button>
    </>
  );
}
export default Task1;
