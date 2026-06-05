import React, { useState } from "react";
import { CountContext } from "./SubTask3";
import Increment from "./SubTask1";

// import Decrement from "./"

// import Increment from "./"
// export default function Task4() {

//   const [num, Setnum] = useState(1);

//   const inc = () => Setnum((num) => num + 1);
//   const dec = () => Setnum((num) => num - 1);
//   return (
//     <>
//       <CountContext.Provider value={{ num, increment: inc, decrement: dec }}>
//         <Increment increment={inc} />
//         <p>Counter: {num}</p>
//         <Decrement decrement={dec} />
//       </CountContext.Provider>
//     </>
//   );
// }

function Task4() {
  const [num, setNum] = useState(1);

  // const dec = () => setNum((num) => num - 1);

  const val = {
    num,
    setNum
  };

  return (
    <>
      <CountContext.Provider value={val}>
        <Increment />
        <p>Counter: {num}</p>
      </CountContext.Provider>
    </>
  );
}
export default Task4;
