import Api from "./Apicall";
import { useState } from "react";
function TestApi() {
  const [data, setData] = useState(null);
  async function callApi() {
    const res = await  Api( "GET", "https://dummyjson.com/products" );
    // .then((res) => res);
     setData(res);
     console.log(res);

  }
  return (
    <div>
      <button onClick={callApi}>Call API</button>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
export default TestApi;
