import { useState, useEffect, useRef } from "react";

function Task7() {
  const [oldval, setvalue] = useState("");
  const [list, setlist] = useState([]);
  let new_val;
  function handlesubmit(e) {
    e.preventDefault();
    if (!list.includes(oldval) && oldval !== "" && !list.includes(new_val)) {
      let data = [...list, oldval];
      setlist(data);
      setvalue("");
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

    // console.log(btn);
    // let btn1 = Object.keys(btn);
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

function ToDoListItems({ value, index, list, setlist, val, setval }) {
  let delet = () => {
    alert(index);
    let result = list.filter((val, ind) => ind != index);
    setlist(result);
    console.log(list);
  };

  let add = (e) => {
    let update = list.filter((val, ind) => ind == index);
    new_val = setval(String(update));
  };
  return (
    <li>
      {value} <button onClick={delet}>X</button>{" "}
      <button onClick={add}>+</button>
    </li>
  );
}

export default Task7;
{
  /* <li key={`to_do_${ind}`}>
        {curVal}{" "}
        <button onClick={handleChange} id={`btn_pls_${ind}`}>
          +
        </button>{" "}
        <button onClick={handledelete} id={`btn_mns_${ind}`}>
          -
        </button>
      </li> */
}
