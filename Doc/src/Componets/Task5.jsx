import { useState } from "react";

function Number() {
  const [num, setnum] = useState("1");
  const [len, setlen] = useState(1);
  let val = 1;
  function increment() {
    for (let p = 1; p <= num.length; p++) {
      for (let i = 1; i < num.length; i++) {
        val++;
        toString(val);
        setnum((num) => num + val);
      }
    }
  }

  return (
    <>
      <p onClick={increment}>Count : {num}</p>
    </>
  );
}
export default Number;
