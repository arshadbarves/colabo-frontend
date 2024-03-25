import axios from "axios";
import cookie from "cookie";
import { deleteToken } from "../services/api/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Adjust baseURL as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to set the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Define your getToken function here
const getToken = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.token;
};

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized");
//       window.location.href = "/auth/signin";
//       deleteToken();
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
