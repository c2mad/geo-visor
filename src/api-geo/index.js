import axios from "axios";
import host_api from "utils/host_api";
const baseURL = host_api;

const geoApi = axios.create({ baseURL });

geoApi.interceptors.request.use(async (config) => {
  return config;
});

export default geoApi;
