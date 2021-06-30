import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8087/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;