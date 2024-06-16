import axios from "axios";

function gender() {
  let data = "";
  axios.get("/main-api/search-gender").then((res) => {
    console.log("res.data: " + res.data);
    data = res.data;
  });
  return <div>{data[1].gender}</div>;
}

export default gender;
