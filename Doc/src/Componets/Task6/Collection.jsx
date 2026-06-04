import { Link, Outlet } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function Collection() {
  return (
    <>
      <h5>ContactPage..</h5>

      <nav>
        <Link to="/child1"> Collection1</Link>
        {/* <Link to="/child2"> Collection2</Link>
        <Link to="/child3"> Collection3</Link> */}
      </nav>

      <Outlet />
    </>
  );
}

function Child1() {
  function call1(event) {
    var div = document.getElementById("div1");

    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  return (
    <>
      <button onClick={() => {document.getElementById("div1").style.display = "none" ? "block" : "none";}}>
        <h1>Product1.1</h1>
      </button>
      <div id="div1" style={{ display: "none" }}>
        <p>Details of Product 01.1</p>
        <p>Details of Parice 01</p>
        <p>Details of Quantity 01</p>
        <p>Details of Order 01</p>{" "}
      </div>
      <button onClick={()=> {document.getElementById("div2").style.display = "none" ? "block" : "none";}}>
        <h1>Product2.1</h1>
      </button>
      <div id="div2" style={{ display: "none" }}>
        <p>Details of Product 02.1</p>
        <p>Details of Parice 02</p>
        <p>Details of Quantity 02</p>
        <p>Details of Order 02</p>{" "}
      </div>
      <button onClick={()=> {document.getElementById("div3").style.display = "none" ? "block" : "none";}}>
        <h1>Product3.1</h1>
      </button>
      <div id="div3" style={{ display: "none" }}>
        <p>Details of Product 03.1</p>
        <p>Details of Parice 03</p>
        <p>Details of Quantity 03</p>
        <p>Details of Order 03</p>{" "}
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
        <h1>Product1.2</h1>
      </button>
      <div id="div2.2" style={{ display: "none" }}>
        <p>Details of Product 01.2</p>
        <p>Details of Parice 01</p>
        <p>Details of Quantity 01</p>
        <p>Details of Order 01</p>{" "}
      </div>
      <button onClick={call}>
        <h1>Product2.2</h1>
      </button>
      <div id="div2.2" style={{ display: "none" }}>
        <p>Details of Product 02.2</p>
        <p>Details of Parice 02</p>
        <p>Details of Quantity 02</p>
        <p>Details of Order 02</p>{" "}
      </div>
      <button onClick={call}>
        <h1>Product3,.2</h1>
      </button>
      <div id="div3.2" style={{ display: "none" }}>
        <p>Details of Product 03.2</p>
        <p>Details of Parice 03</p>
        <p>Details of Quantity 03</p>
        <p>Details of Order 03 </p>{" "}
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
        <h1>Product1.3</h1>
      </button>
      <div id="div3.1" style={{ display: "none" }}>
        <p>Details of Product 01.3</p>
        <p>Details of Parice 01</p>
        <p>Details of Quantity 01</p>
        <p>Details of Order 01 </p>{" "}
      </div>
      <button onClick={call}>
        <h1>Product2.3</h1>
      </button>
      <div id="div3.2" style={{ display: "none" }}>
        <p>Details of Product 02.3</p>
        <p>Details of Parice 02</p>
        <p>Details of Quantity 02</p>
        <p>Details of Order 02</p>{" "}
      </div>
      <button onClick={call}>
        <h1>Product3.3</h1>
      </button>
      <div id="div3.3" style={{ display: "none" }}>
        <p>Details of Product 03.3</p>
        <p>Details of Parice 03</p>
        <p>Details of Quantity 03</p>
        <p>Details of Order 03 </p>{" "}
      </div>
    </>
  );
}

export { Child1, Child2, Child3 };
export default Collection;
