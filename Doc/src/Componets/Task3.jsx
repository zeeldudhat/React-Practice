import { useState } from "react";

function Task3() {
  const [old, setOld] = useState("ABC");
  // function change(e) {
  //   //   let val={old};
  //   if (old == "ABC") {
  //     setOld("XYZ");
  //   } else {
  //     setOld("ABC");
  //   }
  // }
  return (
    <>
      <h5> Onclike of text changes</h5>
      {console.log(old)}
      <p
        onClick={() => {
          old == "ABC" ? setOld("XYZ") : setOld("ABC");
        }}
      >
        {old}
      </p>
    </>
  );
}
export default Task3;
