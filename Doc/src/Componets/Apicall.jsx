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
      const call = await fetch(url, payload)
        .then((res) => res.json())
        .then((res) => console.log(data));
      return await call;
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
  return [data];
}
export default Apicall;
