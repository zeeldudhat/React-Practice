import { useMemo } from "react";
import { useState, useRef, useEffect, useCallback } from "react";
("useStrict");
function Task2() {
  const [count, setCount] = useState(1);
  const [prevCount, setPrevCount] = useState(count);

  const Checkchange = useMemo(() => {
    console.log("useMemo", count);
    // if (count < 1) {
    //   setCount(1);
    // } else if (count > 3) {
    //   setCount(3);
    // }
    // return count;
  }, [count]);

  useEffect(() => {
    console.log("useEffect", count);
  //   if(count < 1) {
  //     setCount(1);
  //   } else if(count > 3) {
  //     setCount(3);
  //   }
  //   // return count;
  }, [count]);


  function left() {
    setCount(count - 1);
  }
  function right() {
    setCount((oldCount) => oldCount + 1);
  }

  function handleClick(e) {
    setCount(Number(e.target.value));
  }
 
  return (
    console.log("111111111111",count),
    
      <div id="container">
        {/* <h1>{Checkchange}</h1> */}
        <h1>{count}</h1>
        <button onClick={left}>&lt;</button>{" "}
        <button value="1" onClick={handleClick}>
          1
        </button>{" "}
        <button value="2" onClick={handleClick}>
          2
        </button>{" "}
        <button value="3" onClick={handleClick}>
          3
        </button>{" "}
        <button onClick={right}>&gt;</button>{" "}
        <button onClick={handleClick}>Alternate</button>
      </div>
    
  );
}

export default Task2;
