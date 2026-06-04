import { useState, useEffect, useRef } from "react";

function Todolist() {
  const [oldval, setvalue] = useState("");
  const [list, setlist] = useState([]);
  const inputRef = useRef(null);

  function handlesubmit(e) {
    e.preventDefault();
    let data = [...list, oldval];
    setlist(data);
    setvalue("");
  }

  function handledelete(e) {
    delete e.target.value;
  }
  function handleChange(e) {
    let Getdata = e.target.value;
  }
  return (
    <>
      <div>
        <h1>TODO List..</h1>
        <form className="todoform" onSubmit={handlesubmit}>
          <input
            type="text"
            className="todoinput"
            value={oldval}
            placeholder="Add the task!!"
            onChange={(e) => setvalue(e.target.value)}
          />{" "}
          <button type="submit">Add TAsk</button>
        </form>
      </div>
      {list.map((curVal, ind) => {

        return (
          <>
            <div className="list">
              {console.log()}
              <li key={`to_do_${ind}`}>
                {curVal.text}{" "}
                <button onClick={handleChange}>+</button>{" "}
                <button onClick={handledelete}>-</button>
              </li>
            </div>
          </>
        );
      })}{" "}
      <br />
    </>
  );
}

export default Todolist;
