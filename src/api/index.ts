import axios from "axios";

const baseURL = "http://localhost:3000/api/";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
