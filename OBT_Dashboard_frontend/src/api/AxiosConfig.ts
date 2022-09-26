import axios from "axios";

const baseUrl:any = "http://localhost:8000" // process.env.BACKEND_API_BASE_URL; // string...
console.log("base url : " + baseUrl);

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error);
  }
);

export default axiosInstance;