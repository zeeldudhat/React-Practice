import { useState } from "react";
function Task1() {
  const [name, setName] = useState("");
  return (
    <>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Current value: {name}</p>
    </>
  );
}

export default Task1;
