import { useEffect, useState } from "react";
import { getPost, deletePost, updatePost, patchPost } from "../services/DefaultApiCalls";
import "./TestApi.css";
function TestApi() {
  const [data, setData] = useState(null);

  async function callApi() {
    //get
    // const res = await getPost();
    // const listOfData = await res.data;
    // if (listOfData) setData(listOfData);
    // delet
    // const res = await deletePost(1);
    // console.log(res);
    // if (res) setData(res.data);
  //   const res=await updatePost(1,{
  //   id: 1,
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // });
   const res=await patchPost(1,{
      title: "Patched Title Only",
  });
  console.log(res);
  
  }

  console.log(getPost());

  return (
    <div>
      <h1>Api call</h1>
      <button onClick={callApi}>Call API</button>
      <div className="grid-container">
        {data &&
          data.map((val, ind) => {
            return (
              <div key={`post${ind}`} className="grid-item">
                <p>Post{val.id}</p>
                <p>{val.title}</p>
                <p>{val.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default TestApi;
