import axios from "axios";
import Cookies from "js-cookie";
// import { logoutApi } from "../../components/common/logoutApi";

const baseURL = "https://devmi.netscribes.app:8443"; //process.env.BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (Cookies.get("mtoken"))
      config.headers["Authorization"] = `Bearer ${Cookies.get("mtoken")}`;
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    let error = err.response && err.response.data && err.response.data.message;

    try {
      error = JSON.parse(
        String.fromCharCode.apply(null, new Uint8Array(err?.response?.data))
      )?.message;
    } catch {
      //  error;
    }
    if (error === "Unauthenticated.") {
      //TODO we need to add logout function here
      //   logoutApi();
    }
    if (error === "") {
      error = err.message;
    } else {
      //
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
