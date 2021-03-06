import axios from "axios";
import config from "../config/index";

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
