import React, { useEffect, useState } from "react";
import Api from "../Apicall";
export default function Task9(params) {
  const [data, setData] = useState([]);
  const [uniq, setUniq] = useState();

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

  const contry = [...new Set(data.map((val) => val.country))];
  const city = [...new Set(data.map((val) => val.city))];
  const age = [...new Set(data.map((val) => val.populationCounts[0].year))];
  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h4>Task9 seletor</h4>
      <div id="div_1">
        <div id="inner_div">
          <select id="sel_1">
            <option value="someOption">Country</option>

            {contry.map((val) => {
              <option value={val}>{val}</option>;
            })}
          </select>
          <select id="sel_2">
            <option value="someOption">state</option>
            <option value="someOption">state</option>
          </select>
          <select id="sel_3">
            <option value="someOption">City</option>
            <option value="someOption">City</option>
          </select>
        </div>
      </div>
    </>
  );
}
