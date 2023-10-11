import axios from "axios";
import store from "../redux/store";

const baseUrl = "https://dummyapi.io/data/v1";

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
  headers: {},
});
instance.interceptors.request.use((req) => {
    req.headers["app-id"] = "6525f97f097b5f256893262b";
    if (!req.baseURL) {
        req.url = baseUrl + '/' + req.url;
      }
    return req;
})

export default instance;