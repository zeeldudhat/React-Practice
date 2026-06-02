import { useState } from "react";

function Todolist() {
  const [oldval, setvalue] = useState("");
  const [list, setlist] = useState([]);
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
    return (
      <>
        <input
          type="text"
          value={Getdata}
          onChange={(e) => setvalue(e.target.value)}
        />
      </>
    );
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
        {list.map((curVal, index) => {
          return (
            <>
              <li id={index}>
                {curVal}
                <button onClick={handleChange}>+</button>{" "}
                <button onClick={handledelete}>-</button>
              </li>
            </>
          );
        })}{" "}
        <br />
      </div>
    </>
  );
}

export default Todolist;
