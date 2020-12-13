import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/project/file",
  headers: {
    "Content-type": "application/json"
  }
});
