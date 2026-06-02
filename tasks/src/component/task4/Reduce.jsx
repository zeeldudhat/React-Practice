import React from "react";
import { useReducer, useState } from "react";

function Component() {
  const initial = { count: 1 };
  const [state, dispatch] = useReducer(handle, initial);
//   const [count, setcount] = useState();
  function handle(state, action) {
    switch (action.type) {
      case "increment":
        return {count:  state.count + 1};
      case "Decrement":
        return {count: state.count-1};
    }
  }
  return (
    <>
    <div>
        <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>{" "}
      <button value={1}>1</button>{" "}
      <button value={2}>2</button>{" "}
      <button value={3}>3</button>{" "}
      <button onClick={() => dispatch({ type: "Decrement" })}>
        Decreament
      </button>
    </div>
    </>
  );
}
export default Component;
