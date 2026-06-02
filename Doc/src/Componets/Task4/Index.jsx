import React, { createContext, useContext, useState } from "react";
import  Increment  from "./Increment";
import  Decrement  from "./Decrement";

export const CountContext = createContext(0);
function Counter() {
  const [num, Setnum] = useState(1);
  return (
    <>
      <CountContext.Provider value={{num,Setnum}}>
        <Increment />
        <p>Counter: {num}</p>
        <Decrement />
      </CountContext.Provider>
    </>
  );
}
export default Counter;
