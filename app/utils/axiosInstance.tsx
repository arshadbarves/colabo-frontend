import axios from "axios";
import cookie from "cookie";

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

export default axiosInstance;
