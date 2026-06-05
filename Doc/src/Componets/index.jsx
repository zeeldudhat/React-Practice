import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Task6 from "./Task6";
import Homepage from "./Task6/index";
import Collection from "./Task6/Collection";
import About from "./Task6/About";
import Contact from "./Task6/Contact";
import Task7 from "./Task7";
import Task8 from "./task89/Index";

function Component() {
  return (
    <>
      <h1> Navigate to Links</h1>

      <BrowserRouter>
        <nav>
          <Link to="/">Component</Link>
          <Link to="/Task1">Task1</Link>
          <Link to="/Task2">Task2</Link>
          <Link to="/Task3">Task3</Link>
          <Link to="/Task4">Task4</Link>
          <Link to="/Task5">Task5</Link>
          <Link to="/Task6">Task6</Link>
          <Link to="/Task7">Task7</Link>
          <Link to="/Task8">Task8</Link>
          {/*<Link to="/Task9" >Task9</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome! Select a task above.</h2>} />
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/Task4" element={<Task4 />} />
          <Route path="/Task5" element={<Task5 />} />
          <Route path="/Task6" element={<Task6 />}>
            <Route path="homepage" element={<h2>HomePage</h2>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="collection" element={<Collection />} />
          </Route>
          <Route path="/Task7" element={<Task7 />} />
          <Route path="*" element={<h2>Page not found.</h2>} />
          <Route path="Task8" element={<Task8 />} />
          {/* <Route path="Task9" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Component;
