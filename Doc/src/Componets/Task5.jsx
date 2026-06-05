import { useState } from "react";

// function Task5() {
//   const [num, setnum] = useState("1");
//   function increment() {
//     let val = 1;
//     let numlen = num.length * 2;
//     let lastnum = num.charAt(num.length - 1);
//     let startnum = parseInt(lastnum) + 1;
//     val = "";
//     for (let i = startnum; i <= numlen; i++) {
//       val += i;
//     }
//     setnum((num) => num + val);
//   }

//   return <p onClick={increment}>Count : {num}</p>;
// }
// export default Task5;

export default function Task5() {
  const [num, setnum] = useState([1]);

  function handledata() {
    let len = num.length * 2;
    console.log(len);
    let arr = [];
    for (let i = 1; i <= len; i++) {
      arr.push(i);
    }
    setnum(arr);
  }
  return <p onClick={handledata}>Count:{num.join(",")}</p>;
}
