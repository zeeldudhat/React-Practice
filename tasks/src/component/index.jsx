import { useNavigate } from "react-router-dom";
import Button from "./task2/Button";
import Task1 from "./task1";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Navigation()
{
    const Nav=useNavigate();

    return(
        <>
     <button onClick={Nav("/task5")} >Task1</button>;
        </>
    );

}
export default Navigation;