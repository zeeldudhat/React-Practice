import { Routes, Route, Link, Outlet } from "react-router-dom";
import Collection from "./Collection";
import About from "./About";
import Contact from "./Contact";

function Task6() {
  return (
    <>
      <nav>
        <Link to="homepage">HomePage</Link>
        <Link to="contact">ContactPage</Link>
        <Link to="about">AboutPage</Link>
        <Link to="collection">Collection</Link>{" "}
      </nav>
      <Outlet />
    </>
  );
}
export default Task6;
