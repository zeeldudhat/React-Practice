import { useState } from "react";
import Displaydata from "./component/task5/Login";
import Reverse from "./component/task2/Reverse";
import Context from "./component/task3/Context";
import { increment, decrement } from "./Redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      {/* 
      <BrowserRouter><nav><Link to="/component/task1" >Task1</Link><Link to="/component/task2" >Task2</Link><Link to="/component/task3" >Task3</Link><Link to="/component/task4" >Task4</Link><Link to="/component/task5" >Task5</Link></nav><Router><Route path="/component/task1/index" element={<Task1/>} /><Route path="/component/task2" element={<Navigation/>} /><Route path="/component/task3" element={<Navigation/>} /><Route path="/component/task4" element={<Navigation/>} /><Route path="/component/task5" element={<Navigation/>} /></Router></BrowserRouter> */}
      {/* <Displaydata /> */}
      {/* <Reverse /> */}
      {/* <Context/> */}

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
