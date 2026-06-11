import React, { useEffect } from "react";
import Api from "../Apicall";
import { useState } from "react";
import Subfile from "./Subfile";

function Task8() {
  const [data, setData] = useState([]);
  async function api_call() {
    try {
      const res = await Api("GET", "https://dummyjson.com/users");
      setData(res.users);
      // console.log(res.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    api_call();
  }, []);

  // const green = {
  //   backgroundColor: "green",
  //   color: "white",
  // };
  // const red = {
  //   backgroundColor: "red",
  //   color: "white",
  // };
  // const yellow = {
  //   backgroundColor: "yellow",
  //   color: "black",
  // };
  return (
    <>
      <h2>TAsk8</h2>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <Subfile data={data} />
        </tbody>
      </table>
    </>
  );
}
export default Task8;
