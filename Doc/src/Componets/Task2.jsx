import { useState, useE } from "react";
function FromDisplay() {
  const [view,setview]=useState();
  const [Data, setData] = useState('');
  return (
    <>
      <h4>Inpute and View data on Button clcik</h4>
      <label>Add Data:</label>
      <input
        type="text"
        value={Data}
        onChange={(e)=>setData(e.target.value)}
      />
      <button type="submit" onClick={()=>setview(Data)}>
        Submit
      </button>
      <p>Data:{view} </p>{" "}
    </>
  );
}



export default FromDisplay;
