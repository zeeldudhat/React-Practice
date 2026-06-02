function Greeting({ name = "World" }) {
  return <h1>Hello, {name}!</h1>;
}

const fruitlist = [1, 2, 3, 4, 5];
function Mylist() {
  return <ul>{fruitlist.map( x => x * 2)}
  <li>{fruitlist}</li>
  </ul>;
}

function Compare(){
  const a = 5;
  const b = 10;
  // if (a > b) {
  //   return <h4>{a} is greater than b</h4>;
  // } else {
  //   return <h4>{b} is greater than a</h4>;
  // }
  return <h4>{a>b?a+" is Greate":b + " is greater"}</h4>;
}


export { Greeting, Mylist,Compare };
