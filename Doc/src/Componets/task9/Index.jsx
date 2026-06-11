import React, { useEffect, useState } from "react";
import Api from "../Apicall";
import Selection from "./Selection";
export default function Task9(params) {
  const [data, setData] = useState([]);
  const info = [
    {
      country: "",
      city: "",
      age: "",
    },
  ];
  const [new_data, setNewData] = useState([info]);

  async function callApi() {
    try {
      const res = await Api(
        "GET",
        "https://countriesnow.space/api/v0.1/countries/population/cities",
      );
      const response = await res.data;
      if (response) {
        setData(response);
        console.log(data);
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  const country = [...new Set(data.map((val) => val.country))];

  useEffect(() => {
    callApi();
  }, []);

  function addnew() {
    setNewData([...new_data, info]);
  }

  function delete_data(group_ind, row_ind) {
    const copy = [...new_data];
    copy[group_ind].splice(row_ind, 1);

    if (copy[group_ind].length === 0) {
      copy.splice(group_ind, 1);
    }
    setNewData(copy);
  }

  function fieldChange(e, group_ind, row_ind, fieldName) {
    const dumy = [...new_data];

    dumy[group_ind][row_ind][fieldName] = e.target.value;

    if (fieldName === "country") {
      dumy[group_ind][row_ind].city = "";
      dumy[group_ind][row_ind].age = "";
    } else if (fieldName === "city") {
      dumy[group_ind][row_ind].age = "";
    }
    setNewData(dumy);
  }

  function addRow(group_ind) {
    const dumy = [...new_data];
    if (!Array.isArray(dumy[group_ind])) return;

    dumy[group_ind] = [...dumy[group_ind], info];
    setNewData(dumy);
  }
  const getTotalRows = () => {
    return new_data.reduce((sum, group) => sum + group.length, 0);
  };
  return (
    <>
      <h4>Task9 seletor</h4>
      <div style={{ display: "inline-block" }}>
        <div
          id="div_1"
          style={{ display: "inline-block", flexDirection: "row" }}
        >
          {/* <button id="btn_1" style={{ width: "100px" }} onClick={addnew}>
            Add
          </button> */}
          {new_data.map((group_val, group_ind) => {
            return (
              <div
                key={group_ind}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h4>Div {group_ind + 1}</h4>
                <button onClick={() => addRow(group_ind)}>Add Row</button>

                {group_val.map((row, row_ind) => {
                  const filter_city = [
                    ...new Set(
                      data
                        .filter((item) => item.country === row.country)
                        .map((item) => item.city),
                    ),
                  ];
                  const age = [
                    ...new Set(
                      data
                        .filter(
                          (item) =>
                            item.country === row.country &&
                            item.city === row.city,
                        )
                        .flatMap((item) =>
                          item.populationCounts.map((props) => props.year),
                        ),
                    ),
                  ];
                  return (
                    <div id="inner_div" key={row_ind}>
                      <Selection
                        id="sel_1"
                        value={row.country}
                        onChange={(e) =>
                          fieldChange(e, group_ind, row_ind, "country")
                        }
                        dropdown="Country"
                        filterObj={country}
                      />

                      <Selection
                        id="sel_2"
                        value={row.city}
                        onChange={(e) =>
                          fieldChange(e, group_ind, row_ind, "city")
                        }
                        dropdown="city"
                        filterObj={filter_city}
                      />
                      <Selection
                        id="sel_3"
                        value={row.age}
                        onChange={(e) =>
                          fieldChange(e, group_ind, row_ind, "age")
                        }
                        dropdown="age"
                        filterObj={age}
                      />
                      <button
                        id="btn_1"
                        style={{ width: "100px" }}
                        onClick={() => delete_data(group_ind, row_ind)}
                        disabled={getTotalRows() === 1}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <button id="btn_1" style={{ width: "100px" }} onClick={addnew}>
        Add
      </button>
    </>
  );
}
