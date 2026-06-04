import { CountContext } from "./Index";
import { useContext, useState } from "react";
import Decrement from "./Decrement"
function Increment() {
  const {num ,Setnum} = useContext(CountContext);
  console.log(Setnum);
  
function add()
{
  Setnum(num + 1);
}
  return (
    <>
      <button onClick={add}>
        {" "}
        Increment
      </button>
      <Decrement />
    </>
  );
}
export default Increment;
