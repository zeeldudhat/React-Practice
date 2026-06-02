import { Link, Outlet } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function Collection() {
  return (
    <>
      <h5>ContactPage..</h5>

      <nav>
        <Link to="child1"> Collection1</Link>
        <Link to="child2"> Collection2</Link>
        <Link to="child3"> Collection3</Link>
      </nav>

      <Outlet />
    </>
  );
}

function Child1() {
  function call() {
    var div = document.getElementById("div1");

    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  return (
    <>
      <button onClick={call}>
        <h1>Product1</h1>
      </button>
      <div id="div1" style={{ display: "none" }}>
        <p>Details of Product</p>;<p>Details of Parice</p>;
        <p>Details of Quantity</p>;<p>Details of Order</p>;{" "}
      </div>
    </>
  );
}

function Child2() {
  function call() {
    var div = document.getElementById("div2");

    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  return (
    <>
      <button onClick={call}>
        <h1>Product2</h1>
      </button>
      <div id="div2" style={{ display: "none" }}>
        <p>Details of Product</p>
        <p>Details of Parice</p>
        <p>Details of Quantity</p>
        <p>Details of Order</p>{" "}
      </div>
    </>
  );
}
function Child3() {
  function call() {
    var div = document.getElementById("div3");

    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  return (
    <>
      <button onClick={call}>
        <h1>Product3</h1>
      </button>
      <div id="div3" style={{ display: "none" }}>
        <p>Details of Product</p>
        <p>Details of Parice</p>
        <p>Details of Quantity</p>
        <p>Details of Order</p>{" "}
      </div>
    </>
  );
}

export { Child1, Child2, Child3 };
export default Collection;
