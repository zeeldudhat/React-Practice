import React from "react";
import axios from "axios";
// async function DefaultApiCalls(method, url, data) {
//   try {
//     const payload = {
//       method,
//       url,
//       headers:{ 'Content-Type': 'application/json' },
//     };
//     if (data) payload.data = data;

//     const req = await axios(payload);
//     console.log(req);
//     return req.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
// export default DefaultApiCalls;

const callApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPost = () => {
  return callApi.get("/posts");
};
export const updatePost = (id, data) => {
  return callApi.put(`/posts/${id}`, data);
};
export const patchPost = (id, data) => {
  return callApi.patch(`/posts/${id}`, data);
};
export const deletePost = (data) => {
  return callApi.delete(`/posts/${data}`);
};
   