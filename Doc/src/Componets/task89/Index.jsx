import React, { useEffect } from "react";
import Api from "../Apicall";
import { useState } from "react";
// import Users from "./Subfile";
function Task8() {
  const [data, setData] = useState([]);

  let api_call = async function () {
    try {
      const req = await fetch("https://dummyjson.com/users");
      const res = await req.json();
      let lists = await res.users;
      console.log(lists);

      if (lists) {
        setData(lists);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    api_call();
  }, []);

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
          {data.map((values) => {
            const { id, firstName, lastName, age, address } = values;
            return (
              <>
                <tr
                  key={`ID_${id}`}
                  style={
                    age > 10 && age < 30
                      ? { backgroundColor: "green", color: "white" }
                      : age > 30 && age < 45
                        ? { backgroundColor: "yellow", color: "black" }
                        : { backgroundColor: "red", color: "white" }
                  }
                >
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{age}</td>
                  <td>{address.city}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Task8;
