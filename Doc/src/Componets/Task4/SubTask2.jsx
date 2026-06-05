import { CountContext } from "./SubTask3";
import { useContext, useState } from "react";

function SubTask2() {
  const { num, setNum } = useContext(CountContext);
  const decrement = () => setNum((num) => num - 1);
  return (
    <>
      <button onClick={decrement}> Decrement</button>
    </>
  );
}
export default SubTask2;
