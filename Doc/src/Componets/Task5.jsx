import { useState } from "react";

function Number() {
  const [num, setnum] = useState("1");
  function increment() {
    let val = 1;
    let numlen = num.length * 2;

    let lastnum = num.charAt(num.length - 1);
    let startnum = parseInt(lastnum) + 1;

    val = "";
    for (let i = startnum; i <= numlen; i++) {
      val += i;
    }
    setnum((num) => num + val);
    // numlen = 1;
  }

  return (
    <>
      <p onClick={increment}>Count : {num}</p>
    </>
  );
}
export default Number;
