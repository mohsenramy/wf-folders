import axios from "axios";

const axiosWeatherClient = axios.create();

axiosWeatherClient.defaults.baseURL = "https://weatherbit-v1-mashape.p.rapidapi.com/";

axiosWeatherClient.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
  "x-rapidapi-key": String(process.env.REACT_APP_WEATHER_API_KEY),
};
console.log(process.env.REACT_APP_WEATHER_API_KEY);
// All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;

axiosWeatherClient.interceptors.request.use(
  async (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.error("axiosClient.interceptors.request", error);
    return Promise.reject(error);
  }
);

axiosWeatherClient.interceptors.response.use(
  (response) => {
    console.info(response);
    return response;
  },
  (error) => {
    console.error("axiosClient.interceptors.response", error);
    return Promise.reject(error);
  }
);

export default axiosWeatherClient;
