import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import { useEffect } from "react";

function Login() {
  return (
    <>
    <h1> Register Form</h1>

      <form>
        <label> Email:</label>
        <input type="email" required />
        <br />
        <label> Password:</label>
        <input type="password" required />
        <br />
        <button type="submit" onClick={SubmitEvent}>
          submit
        </button>
      </form>
      <nav>
        <Link to="/register">Register</Link>
      </nav>

    </>
  );
}
function Displaydata() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Displaydata;
