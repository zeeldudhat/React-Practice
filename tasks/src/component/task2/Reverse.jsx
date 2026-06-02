import { useState, useEffect, useCallback } from "react";
import Button from "./Button";

function Reverse() {
  const [count, setCount] = useState(1);
  const [swap, setSwap] = useState(true);

  useEffect(() => {
    if (count < 1) {
      setCount(1);
    } else if (count > 3) {
      setCount(3);
    }
    

    console.log(count);
  }, [count]);
  function handleClick(e) {
    setCount(Number(e.target.value));
  }

  function reversebtn() {
    setSwap((prev) => !prev);
    console.log(swap);
  }
  const left = useCallback(() => {
    if (swap == false) {
      console.log(count);

      setCount(count + 1);
    } else {
      setCount((prevs) => prevs - 1);
    }
  }, [swap]);
  const right = useCallback(() => {
    console.log("22222222",swap);
    if (swap == false) {
      console.log('11111111111111', count);
      setCount((oldCount) => oldCount  - 1);
    } else {
      setCount((oldCount) => oldCount + 1);
    }
  }, [swap]);

  return (
    <div id="container">
      <h1>{count}</h1>
      <button onClick={left}>&lt;</button>{" "}
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button onClick={right}>&gt;</button>
      <Button event={reversebtn} />
    </div>
  );
}

export default Reverse;
