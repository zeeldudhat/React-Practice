import React, { useEffect, useState } from "react";
import Api from "../Apicall";
export default function Task9(params) {
  const [data, setData] = useState([]);
  // const [select_contry, setContry] = useState("");
  // const [select_city, setCity] = useState("");
  // const [select_age, setAge] = useState("");
  const [new_data, setNewData] = useState([
    [
      {
        country: "",
        city: "",
        age: "",
      },
    ],
  ]);

  async function callApi() {
    try {
      const res = await Api(
        "GET",
        "https://countriesnow.space/api/v0.1/countries/population/cities",
      );
      const response = await res.data;
      // console.log(response);
      if (response) {
        setData(response);
        console.log(response);
      }
      // const contry = data.map((val) => {
      //   let { country } = val;
      //   return country;
      // });
    } catch (error) {
      console.log(error);
    }
  }

  //   let uniq_val = data.filter((val, ind, arr) => {
  //     arr.findIndex(val);
  //   });
  //   console.log(uniq_val);

  const country = [...new Set(data.map((val) => val.country))];
  // const filter_city = [
  //   ...new Set(
  //     data
  //       .filter((val) => val.country === select_contry)
  //       .map((val) => val.city),
  //   ),
  // ];
  // const age = [
  //   ...new Set(
  //     data
  //       .filter(
  //         (val) => val.country === select_contry && val.city === select_city,
  //       )
  //       .flatMap((val) => val.populationCounts.map((pop) => pop.year)),
  //   ),
  // ];
  useEffect(() => {
    callApi();
  }, []);

  function addnew() {
    setNewData([
      ...new_data,
      [
        {
          country: "",
          city: "",
          age: "",
        },
      ],
    ]);
    console.log(new_data);
  }

  function delete_data(group_ind) {
    const copy = [...new_data];
    if (copy[group_ind].length === 1) {
      copy.splice(group_ind, 1);
    } else {
      copy[group_ind].pop();
    }
    setNewData(copy);
  }

  function handle_contry(e, group_ind, row_ind) {
    const dumy = [...new_data];
    dumy[group_ind][row_ind].country = e.target.value;
    dumy[group_ind][row_ind].city = "";
    dumy[group_ind][row_ind].age = "";
    setNewData(dumy);
  }
  function handle_city(e, group_ind, row_ind) {
    const dumy = [...new_data];
    dumy[group_ind][row_ind].city = e.target.value;
    dumy[group_ind][row_ind].age = "";
    setNewData(dumy);
  }
  function handle_age(e, group_ind, row_ind) {
    const dumy = [...new_data];
    dumy[group_ind][row_ind].age = e.target.value;
    setNewData(dumy);
  }

  function addRow(group_ind) {
    const dumy = [...new_data];
    if (!Array.isArray(dumy[group_ind])) return;

    dumy[group_ind] = [
      ...dumy[group_ind],
      {
        country: "",
        city: "",
        age: "",
      },
    ];
    setNewData(dumy);
  }
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
            const filter_city = [
              ...new Set(
                data
                  .filter((item) => item.country === group_val.country)
                  .map((item) => item.city),
              ),
            ];
            const age = [
              ...new Set(
                data
                  .filter(
                    (item) =>
                      item.country === group_val.country &&
                      item.city === group_val.city,
                  )
                  .flatMap((item) =>
                    item.populationCounts.map((props) => props.year),
                  ),
              ),
            ];
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
                  return (
                    <div id="inner_div" key={row_ind}>
                      <select
                        id="sel_1"
                        value={row.country}
                        onChange={(e) => handle_contry(e, group_ind, row_ind)}
                      >
                        <option value="">Country</option>

                        {country.map((val, ind) => {
                          return (
                            <option key={ind} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        id="sel_2"
                        value={row.city}
                        onChange={(e) => handle_city(e, group_ind, row_ind)}
                      >
                        <option value="">City</option>

                        {filter_city.map((val, ind) => {
                          return (
                            <option key={ind} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        id="sel_3"
                        value={row.age}
                        onChange={(e) => handle_age(e, group_ind, row_ind)}
                      >
                        <option value="">Age</option>

                        {age.map((val, ind) => {
                          return (
                            <option key={ind} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                      <button
                        id="btn_1"
                        style={{ width: "100px" }}
                        onClick={() => delete_data(group_ind)}
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
      {/* <div id="div_1">
        <div id="inner_div">
        <select id="sel_1" value={select_contry} onChange={(e) => setContry(e.target.value)}>
        <option value="someOption">Country</option>
        
        {country.map((val, ind) => {
          return <option key={ind} value={val}>{val}</option>;
            })}
          </select>
          <select id="sel_2" value={select_city} onChange={(e) => setCity(e.target.value)}>
            <option value="someOption">City</option>
            {filter_city.map((val, ind) => {
              return <option key={ind} value={val}>{val}</option>;
            })}
          </select>
          <select id="sel_3" value={select_age} onChange={(e) => setAge(e.target.value)}>
            <option value="someOption">age</option>
            {age.map((val, ind) => {
              return <option key={ind} value={val}>{val}</option>;
            })}
          </select>
        </div>
      </div> */}
      <button id="btn_1" style={{ width: "100px" }} onClick={addnew}>
        Add
      </button>
    </>
  );
}
