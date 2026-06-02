import { useEffect, useRef, useState } from "react";

function Use() {
  const inputRef = useRef(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(inputRef.current);
      inputRef.current++;
    }, 2000);
  }, []);

  return (
    <div>
      <p>Input Value: {inputRef.current}</p>
<button onClick={() => inputRef.current++ }>Change Value</button>    </div>
  );
}

function Usestate() {
  const [inputValue, setInputValue] = useState(1);
 useEffect(() => {
    const timer = setTimeout(() => {
      console.log(inputValue);
      setInputValue((prev) => prev + 1);
    }, 2000);
  }, [inputValue]);

  function handleClick() {
  }
  return (
    <div>
      <p>Input Value: {inputValue}</p>
      <button onClick={handleClick}>Find Value</button>
    </div>
  );
}
export { Use, Usestate };
