import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

async function Apicall(method, url, data) {
  const payload = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (data) {
    payload.body = JSON.stringify(data);
  }
  if (method === "GET") {
    try {
      const call = await fetch(url, payload);
      const res = await call.json();      
      return res;
    } catch (err) {
      console.log(err);
    }
  } else if (method === "POST") {
    const call = await fetch(url, payload)
      .then((res) => res.json())
      .then((data) => console.log(data));
    return call;
  } else if (method === "PUT") {
    const call = await fetch(url, payload)
      .then((res) => res.json())
      .then((data) => console.log(data));
    return call;
  } else if (method === "DELETE") {
    const call = await fetch(url, payload)
      .then((res) => res.json())
      .then((data) => console.log(data));
    return call;
  } else {
    console.log("Invalid method");
  }
  return null;
}
export default Apicall;
// Axios
// async function Apicall(method, url, data) {
//   const payload = {
//     method,
//     header: { "Content-Type": "application/json" },
//   };
//   if (data) payload.body = data;
//   function fun({ res }) {
//     {
//       return res.data;
//       console.log(res);
//     }
//   }
//   if (method === "GET") {
//     const req = await axios
//       .get(url)
//       .then((res) => fun({ res }))
//       .catch((error) => console.log(error));
//     console.log(req.data);
//     return req.data;
//   } else if (method === "POST") {
//     const req = await axios
//       .post(url, payload)
//       .then((res) => fun({ res }))
//       .catch((error) => console.log(error));
//     return req;
//   } else if (method === "PUT") {
//     const req = await axios
//       .put(url, payload)
//       .then((res) => fun({ res }))
//       .catch((error) => console.log(error));
//     return req;
//   } else if (method === "DELETE") {
//     const req = await axios
//       .post(url, payload)
//       .then((res) => fun({ res }))
//       .catch((error) => console.log(error));
//     return req;
//   } else {
//     console.log("Invalid method");
//   }
// }
// export default Apicall;

// Hml htttp

// function Apicall(method, url, flow) {
//   const req = new XMLHttpRequest();
  
//   if (flow) payload.flow = flow;
//   req.open(method,url);
//   req.onload = function () {
//     if (req.status === 200) {
//       const result = JSON.parse(req.responseText);
//       return result;
//       console.log(result);
//     }
//   };
//   return req.send();
// }
// export default Apicall;
