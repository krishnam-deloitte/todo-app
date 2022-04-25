import axios from "axios";
export default function requestGetTodos() {
  return  axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/krishnamkrish007/demo/user"
  });
}
