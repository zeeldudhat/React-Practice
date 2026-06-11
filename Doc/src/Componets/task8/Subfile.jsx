import React from "react";
import Style from "./BackColor.module.css";

function Subfile({ data }) {
  return (
    <>
      {data.map((values) => {
        const {
          id,
          firstName,
          lastName,
          age,
          address: { city },
        } = values;
        return (
          <tr
            key={`id${id}`}
            className={
              age > 10 && age < 30
                ? Style.green
                : age >= 30 && age < 40
                  ? Style.red
                  : Style.yellow
            }
          >
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{city}</td>
          </tr>
        );
      })}
    </>
  );
}
export default Subfile;
