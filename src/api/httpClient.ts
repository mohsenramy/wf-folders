import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://dev21.becollective.com/api/v2/coding-challenges/dirs";

axiosClient.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;

// axiosClient.interceptors.request.use(
//   async (config) => {
//     const accessToken = await AsyncStorage.getItem("accessToken");
//     if (config.headers) {
//       config.headers.common = accessToken ? `Bearer ${accessToken}` : "";
//       // console.log(`HTTP://ACESS_TOKEN ${accessToken ? 'ADDED' : 'REMOVED'}`);
//     }
//     // console.log(JSON.stringify(config, null, 4));
//     return config;
//   },
//   (error) => {
//     console.error("axiosClient.interceptors.request", error);
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     // console.log(response);
//     // Edit response config
//     return response;
//   },
//   (error) => {
//     console.error("axiosClient.interceptors.response", error);
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
