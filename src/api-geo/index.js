import axios from "axios";
import host_api from "utils/host_api";

//const baseURL = "http://192.168.10.4:8085";
const baseURL = host_api;

const geoApi = axios.create({ baseURL });

geoApi.interceptors.request.use(async (config) => {
  return config;
});

export default geoApi;
