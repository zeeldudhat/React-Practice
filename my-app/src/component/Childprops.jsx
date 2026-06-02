import React from "react";
function Childprops(props) {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      <h1>
        My name is {props.name} and I am {props.age} years old.
      </h1>
      <div>{props.children}</div>
    </div>
  );
}
function Childprops2(props) {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      <h1>
        My name is {props.name} and I am {props.age} years old.
      </h1>
      <div>{props.children}</div>
    </div>
  );
}
function Parentprops() {
  return (
    <>
      <h1>child component</h1>
      <Childprops name="Alice" age={30}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </Childprops>
      <Childprops2 name="Bob" age={25}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </Childprops2>
    </>
  );
}
export { Childprops, Childprops2, Parentprops };
