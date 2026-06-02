import React, { useEffect, useState } from "react";
import Increment from "./Increment";
import CheckCopy from "./CheckCopy";

function Count2() {
  const [count, setcount] = useState(0);
  // function increment() {
  //   console.log(count);
  //   setcount(count + 1);
  // }
  function decremenrt() {
    setcount(count - 1);
  }

  useEffect(() => {
    if (count == 0) {
      document.getElementById("dec").style.display = "none";
    } else {
      document.getElementById("dec").style.display = "";
    }
  }, [count]);
  return (
    <>
      <button onClick={() => Increment(count, setcount)}>+</button>
      <p>{count}</p>
      <button id="dec" onClick={decremenrt}>
        -
      </button>
      <CheckCopy count={count} />
    </>
  );
}
export default Count2 ;