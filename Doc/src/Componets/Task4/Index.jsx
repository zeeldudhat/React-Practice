import React, { createContext, useContext, useState } from "react";
import Increment from "./Increment";

export const CountContext = createContext(null);
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

export default function Task4() {
  const [num, Setnum] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ num, Setnum }}>
        <Increment />
        <p>Counter: {num}</p>
      </CountContext.Provider>
    </>
  );
}
