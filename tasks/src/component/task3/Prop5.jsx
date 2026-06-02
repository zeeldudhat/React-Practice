import { useContext } from "react";
import { Geet } from "./Context";
import PropDrilling from "./Context";
function Prop5() {
  const hel = useContext(Geet);
  return <p>from 5 {hel}</p>;
}
export default Prop5;
