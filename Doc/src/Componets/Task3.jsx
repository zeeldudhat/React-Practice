import { useState } from "react";

function Task3() {
  const [old, setOld] = useState(true);
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
      {/* {console.log(old)} */}
      <p
        onClick={() => {
          setOld(old => !old)
        }}
      >
        {old ? "ABC" : "XYZ"}
      </p>
    </>
  );
}
export default Task3;
