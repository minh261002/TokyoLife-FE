import axios, { AxiosError } from "axios";
export const baseURL = import.meta.env.VITE_API_URL as string;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
