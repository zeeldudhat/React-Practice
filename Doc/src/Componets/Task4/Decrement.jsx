import { CountContext } from "./Index";
import { useContext, useState } from "react";

function Decrement({ decrement }) {
  const num = useContext(CountContext);

  return (
    <>
      <button> Decrement</button>
    </>
  );
}
export default Decrement;
