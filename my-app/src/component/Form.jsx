import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import MyStyle from '../component/MyStyles.module.css';
function Form() {
  const [name, setName] = useState("");
  const [Details, setDetails] = useState("");
  const [select, setSelect] = useState("Default");
  const [inputs, setInputs] = useState({});
  const [hobbies, setHobbies] = useState({});
  const [gender, setGender] = useState("");

  function Handel(event) {
    const name = event.target.value;
    setName(name);
  }
  function HandelDetails(event) {
    const Details = event.target.value;
    setDetails(Details);
  }

  function HandelSelect(event) {
    const select = event.target.value;
    setSelect(select);
  }

  function HandelHobbies(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setHobbies((prev) => ({ ...prev, [name]: value }));
  }

  function HandelGender(event) {
    const value = event.target.value;
    setGender(value);
  }
  function HandelSubmit(event) {
    alert(
      `Your name is: ${name}` +
        `\n your Deatils is: ${Details}` +
        `\n your employment status is: ${select}` +
        `\n your Father Name is: ${inputs.FatherName}` +
        `\n your Mother Name is: ${inputs.MotherName}` +
        `\n your hobiles are:${JSON.stringify(Object.keys(hobbies))}` +
        `\n your gender is: ${gender}`,
    );
    // event.preventDefault();
  }

  function handleParent(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((val) => ({ ...val, [name]: value }));
  }
  function Message(event) {
    alert("This is a portal message!");
  }

  return (
    <>
      <h1>Input Form</h1>
      <form onSubmit={HandelSubmit} className="myheader mybutton" id="form">
        <label name="name">Name:</label>
        <input type="text" id="name" value={name} className="mybutton" onChange={Handel} />
        {/* <p>Your name is: {name}</p> */}
        <br />
        <br />
        <label name="text">Enter Details:</label>
        <textarea
          id="text"
          rows="1"
          cols="10"
          value={Details}
          onChange={HandelDetails}
        ></textarea>
        <br />
        <br />
        <select value={select} onChange={HandelSelect}>
          <option value="Default">Select the Designation</option>
          <option value="Busines">Business</option>
          <option value="Salaried">Salaried</option>
          <option value="Self Emploed">SelfEmployed</option>
        </select>
        <br /> <br />
        <label name="Father_Name">Father Name:</label>
        <input 
          value={inputs.FatherName}
          onChange={handleParent}
          type="text"
          name="FatherName"
          className="input"
        />
        <br />
        <label name="Mother_Name">Mother Name:</label>
        <input
          name="MotherName"
          value={inputs.MotherName}
          onChange={handleParent}
          type="text"
          className="input"
        />
        <br />
        <label name="Hobbies">Hobbies:</label>
        <br />
        <input
          type="checkbox"
          name="Cricket"
          value={hobbies.Cricket}
          className="input"
          onChange={HandelHobbies}
        />
        Cricket
        <input
          type="checkbox"
          name="Football"
          value={hobbies.Football}
          className="input"
          onChange={HandelHobbies}
        />
        Football
        <input
          type="checkbox"
          name="Hockey"
          value={hobbies.Hockey}
          className={MyStyle.checkbox}
          onChange={HandelHobbies}
        />
        Hockey
        <br />
        <br />
        <label name="Gender">Gender:</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          className="input"
          checked={gender === "Male"}
          onChange={HandelGender}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          className="input"
          checked={gender === "Female"}
          onChange={HandelGender}
        />{" "}
        Female
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
  function Loading() {
    return ReactDOM.createPortal(
      <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <div style={{  padding: "5px", borderRadius: "2px" }}>
        <button style={{backgroundColor:"white" ,color:"black"}} onClick={Message}>Detail</button>{" "}
      </div>
    </div>,
    document.body,
  );
}

<loading />
}

export default Form;
