import axios from "axios";
import LocalStorageService from "./localstorage";
const axiosRequest = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosRequest.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosRequest.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default axiosRequest;
