import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";

function Home() {
  return <h1>Home Page!</h1>;
}
function Menu() {
  return (
    <>
      <h2>Menu page</h2>
      <nav>
        <Link to="/menu/fast">FastFood</Link>
        <Link to="/menu/guj">Gujarati</Link>
      </nav>
      <Outlet />
    </>
  );
}
function FastFood() {
  return (
    <>
      <h1>Fast food Menu</h1>
      <ul>
        <li>Burger</li>
        <li>Pizzaa</li>
        <li>FrenchFries</li>
        <li>NAchozz</li>
      </ul>
    </>
  );
}
function Gujarati() {
  return (
    <>
      <h2>Gujarati Thali</h2>
      <ul>
        <li>Kaju lasan</li>
        <li>Kaju Paneer</li>
        <li>Sev Tameta</li>
      </ul>
    </>
  );
}
function Info() {
  const { about } = useParams();
  return (
    <>
      <h3>You are on the {about} Page</h3>
    </>
  );
}
function Payment() {
  return <h2>Payment Details Page </h2>;
}
function Navigation() {
  return (
    <>
      {/* <BrowserRouter>
        <nav>
          <Link to="/hom">Home</Link> <Link to="/menu">Menu</Link>{" "}
          <Link to="/payment">Payment</Link>{" "}
        </nav>
        <Routes>
          <Route path="/hom/homepage" element={<Home />} />
          <Route path="/menu/Menu" element={<Menu />}>
            <Route path="fas/fastfood" element={<FastFood />} />
            <Route path="guj/gujratifood" element={<Gujarati />} />
          </Route>
          <Route path="/payment/payment" element={<Payment />} />
          <Route path="/:about" element={<Info />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default Navigation;
