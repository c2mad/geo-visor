import axios from "axios";

//const baseURL = "http://192.168.10.4:8085";
const baseURL = "https://13b0-190-15-134-178.ngrok-free.app";

const geoApi = axios.create({ baseURL });

geoApi.interceptors.request.use(async (config) => {
  return config;
});

export default geoApi;
