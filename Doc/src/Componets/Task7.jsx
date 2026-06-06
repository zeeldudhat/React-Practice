import { useState, useEffect, useRef } from "react";

function Task7() {
  const [oldval, setvalue] = useState("");
  const [list, setlist] = useState([]);
  const [change, setChange] = useState();

  function handlesubmit(e) {
    e.preventDefault();
    if (!list.includes(oldval) && oldval !== "" && !change) {
      let data = [...list, oldval];
      setlist(data);
      setvalue("");
    } else if (change && !list.includes(oldval)) {
      let find = list.splice(change, 1, oldval);
      setvalue("");
      setChange(null);
    } else {
      console.log("emptys ");
    }
  }

  function handledelete(e) {
    delete e.target.value;
  }
  function handleChange(e) {
    let btn = document.getElementById("btn_pls_0");
    let ind = btn.parentElement.value;
  }

  let list_i = list.map((curVal, ind) => {
    return (
      <ToDoListItems
        value={curVal}
        /*key={`${ind}`}*/ index={ind}
        list={list}
        setlist={setlist}
        val={oldval}
        setval={setvalue}
        ch={change}
        setch={setChange}
      />
    );
  });
  return (
    <>
      <div>
        <h1>TODO List..</h1>
        {/* <form className="todoform" /*onSubmit={handlesubmit}> */}
        <input
          type="text"
          value={oldval}
          placeholder="Add the task!!"
          onChange={(e) => setvalue(e.target.value)}
        />{" "}
        <button type="submit" onClick={handlesubmit}>
          Add TAsk
        </button>
        {/* </form> */}
      </div>
      <div className="OuterDiv">
        <ul>{list_i}</ul>
      </div>

      <br />
    </>
  );
}

function ToDoListItems({
  value,
  index,
  list,
  setlist,
  val,
  setval,
  ch,
  setch,
}) {
  let delet = () => {
    alert(index);
    let result = list.filter((val, ind) => ind != index);
    setlist(result);
  };

  let add = () => {
    let update = list.filter((val, ind) => {
      if (ind === index) {
        return val;
      }
    });
    setval(update);
    setch((prev) => list.indexOf(update[0]));
  };
  return (
    <li>
      {value} <button onClick={delet}>X</button>{" "}
      <button onClick={add}>+</button>
    </li>
  );
}

export default Task7;
