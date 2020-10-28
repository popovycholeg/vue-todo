import axios from "axios";
export const BASE_URL = "http://localhost:1337";

const instanceAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

instanceAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const { headers } = config;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instanceAxios;
