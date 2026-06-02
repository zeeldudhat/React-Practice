import { useState } from "react";

function Abc() {
  const [old, setOld] = useState("ABC");
  return (
    <>
      <h5> Onclike of text changes</h5>
      {console.log(old)}
      <p onClick={change} >
        {old}
      </p>
    </>
  );
  function change(e) {
    //   let val={old};
    if (old =="ABC" ) {
      setOld("XYZ");
    } else {
      setOld("ABC");
    }
  }
}
export default Abc;
