import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "./Login";
function Register() {
  return (
    <>
      <h1> Register Form</h1>
      <form action="Get">
        <label>FirstName</label>
        <input type="text" required />
        <br />   
        <label>LastName</label>
        <input type="text" required />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Password</label>
        <input type="password" required />
        <br />
        <br />
        <label>Mobile NO.</label>
        <input type="tel" minLength={10} required />
        <br />
        <br />
        <label>Gender:</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" value="male" />
        <label>Male</label>
        <input type="radio" value="female" />
        <label>Female</label>&nbsp;&nbsp;&nbsp;
        <br />
        <label>Age:</label>
        <input type="number" id="age" min="18" max="80" required />
        &nbsp;&nbsp;&nbsp;
        <br />
        <label>Hobbies: </label>
        <select>
          <option defaultValue="Select value">Select</option>
          <option>Cricket</option>
          <option>Hoky</option>
          <option>Running</option>
        </select>
        <br />
        <button type="submit">Submit</button>
        <nav>
          <Link to="/">Login</Link>
        </nav>
      </form>
    </>
  );
}
export default Register;
