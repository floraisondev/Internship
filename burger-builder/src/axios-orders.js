import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-47a3d.firebaseio.com/",
});

export default instance;
