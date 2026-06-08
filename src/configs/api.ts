import axios from "axios";
import { BaseApiUrl } from "./baseUrl";

const api = axios.create({
  baseURL: BaseApiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
