import React, { createContext, useContext } from "react";
import Prop2 from "./Prop2";
import Prop5 from "./Prop5";
export const Geet = createContext(null);
function PropDrilling() {
  return (
    <Geet.Provider value="hello">
      <Prop1 />
    </Geet.Provider>
  );
}
function Prop1() {
  return (
    <>
      <p>From 1 </p>
      <Prop2 />
    </>
  );
}

export default PropDrilling;
