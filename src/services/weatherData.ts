import axiosWeatherClient from "../api/weatherClient";
import { WeatherData } from "../types/Weather.types";

export const getCurrentWeather = async (): // latitude: number = -6.24889,
// longitude: number = 53.33306
Promise<WeatherData[]> => {
  return axiosWeatherClient
    .get("/current", { params: { lon: 53.33306, lat: -6.24889 } })
    .then((response) => response.data);
};
