import Counter from "./Index.jsx";
import {CountContext} from "./Index.jsx";
import { useContext,useState } from "react";

function Increment() {
  const old=useContext(CountContext);
  console.log({old});
  
  const [num,Setnum]=useState(old);
  console.log(num);
  
  return (
    <>
      <button onClick={()=>Setnum((num)=>num+1)}> Increment</button>
    </>
  );
}
export default Increment;
