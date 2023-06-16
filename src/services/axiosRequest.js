import axios from "axios";
import LocalStorageService from "./localstorage";
const axiosRequest = axios.create({
  baseURL: "https://elshaf3y.pythonanywhere.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosRequest.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getService().getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const contentType = error.response.headers["content-type"];
      if (contentType && !contentType.includes("application/json")) {
        // Handle non-JSON response here (e.g., display an error message)
        console.error("Non-JSON response received:", error.response.data);
        throw new Error("Non-JSON response received");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosRequest;
