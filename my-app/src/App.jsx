import { useState } from "react";
import { Car } from "./component/Wish.jsx";
import { Garage } from "./component/Wish.jsx";
import Button from "./component/State.jsx";
import LifeCycle from "./component/LifeCycle.jsx";
import { Greeting, Mylist, Compare } from "./component/Massag.jsx";
import Update from "./component/Update.jsx";
import { Parentprops } from "./component/Childprops.jsx";
import  Form  from "./component/Form.jsx";
import GreetingWithBorder from "./component/Border.jsx";
// import { Loading } from "./component/Form.jsx";
import { Use, Usestate } from "./component/Use.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Greeting name="Alice" />
      <Car color="blue" name="Toyota" />
      <Garage />
      <Button />
      <LifeCycle textColor="green" />
      <Update favcolor="yellow" />
      <Mylist />
      <Compare /> 
      <Parentprops /> */}
      <Form name="John" />
      <GreetingWithBorder name="Jane" />
{/*      
      <Use />
      <Usestate /> */}
    </>
  );
}

export default App;
