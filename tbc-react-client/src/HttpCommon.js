import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/file",
  headers: {
    "Content-type": "application/json"
  }
});
