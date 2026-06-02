import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext();

function Pluse() {
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={count,setCount}>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
      </div>
    </UserContext.Provider>
  );
}
function Minus() {
  const [count, setCount] = useState();

  //   useEffect(() => {
  //     setCount(count-1);
  //   },[count]);
  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export { Pluse, Minus };
