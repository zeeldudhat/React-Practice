import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Collection() {
  return (
    <>
      <h5>ContactPage..</h5>
      <ul>
        <li>
          <HashLink smooth to="/Task6/collection/#collection-1">
            Collection 1
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/Task6/collection/#collection-2">
            Collection 2
          </HashLink>
        </li>
          <HashLink smooth to="/Task6/collection/#collection-3">
            Collection 3
          </HashLink>
        <h1 id="collection-1">Product1</h1>

        <div id="div1">
          <p>Details of Product 01.1</p>
          <p>Details of Parice 01</p>
          <p>Details of Quantity 01</p>
          <p>Details of Order 01</p>{" "}
        </div>
        <h2>Product2</h2>
        <div id="div2">
          <p>Details of Product 02.1</p>
          <p>Details of Parice 02</p>
          <p>Details of Quantity 02</p>
          <p>Details of Order 02</p>{" "}
        </div>

        <h1>Product3</h1>
        <div id="div3">
          <p>Details of Product 03.1</p>
          <p>Details of Parice 03</p>
          <p>Details of Quantity 03</p>
          <p>Details of Order 03</p>{" "}
        </div>

        <h1 id="collection-2">Collection2</h1>
        <div id="div1">
          <p>Details of Product 01.2</p>
          <p>Details of Parice 01</p>
          <p>Details of Quantity 01</p>
          <p>Details of Order 01</p>{" "}
        </div>
        <h1>Product2.2</h1>
        <div id="div2">
          <p>Details of Product 02.2</p>
          <p>Details of Parice 02</p>
          <p>Details of Quantity 02</p>
          <p>Details of Order 02</p>{" "}
        </div>
        <h1>Product3,.2</h1>
        <div id="div3">
          <p>Details of Product 03.2</p>
          <p>Details of Parice 03</p>
          <p>Details of Quantity 03</p>
          <p>Details of Order 03 </p>{" "}
        </div>
        <li>
          <h1 id="collection-3">Collection2</h1>

          <div id="div1">
            <p>Details of Product 01.3</p>
            <p>Details of Parice 01</p>
            <p>Details of Quantity 01</p>
            <p>Details of Order 01 </p>{" "}
          </div>
          <h1>Product2.3</h1>
          <div id="div2">
            <p>Details of Product 02.3</p>
            <p>Details of Parice 02</p>
            <p>Details of Quantity 02</p>
            <p>Details of Order 02</p>{" "}
          </div>
          <h1>Product3.3</h1>
          <div id="div3">
            <p>Details of Product 03.3</p>
            <p>Details of Parice 03</p>
            <p>Details of Quantity 03</p>
            <p>Details of Order 03 </p>{" "}
          </div>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
export default Collection;
