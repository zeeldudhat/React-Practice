import { CountContext } from "./SubTask3";
import { useContext } from "react";
import Decrement from "./SubTask2";
function SubTask1() {  
  const { num, setNum } = useContext(CountContext);
  const increment = () => setNum((num) => num + 1);
  return (
    <>
      <button onClick={increment}> Increment</button>
      <Decrement />
    </>
  );
}
export default SubTask1;
