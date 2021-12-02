import axiosWeatherClient from "../api/weatherClient";
import { WeatherData } from "../types/Weather.types";

const sampleData = {
  rh: 79,
  pod: "n",
  lon: -6.25,
  pres: 1008.3,
  timezone: "Europe/Dublin",
  ob_time: "2021-12-01 17:30",
  country_code: "IE",
  clouds: 55,
  ts: 1638379800,
  solar_rad: 0,
  state_code: "L",
  city_name: "Dublin",
  wind_spd: 2.68,
  wind_cdir_full: "west-northwest",
  wind_cdir: "WNW",
  slp: 1010.1,
  vis: 5,
  h_angle: -90,
  sunset: "16:10",
  dni: 0,
  dewpt: 3.3,
  snow: 0,
  uv: 0,
  precip: 0,
  wind_dir: 297,
  sunrise: "08:18",
  ghi: 0,
  dhi: 0,
  aqi: 25,
  lat: 53.33,
  weather: {
    icon: "c02n",
    code: 802,
    description: "Scattered clouds",
  },
  datetime: "2021-12-01:17",
  temp: 6.7,
  station: "F4173",
  elev_angle: -7.11,
  app_temp: 4.8,
};
export const getCurrentWeather = async (
  latitude: number = -6.24889,
  longitude: number = 53.33306
): Promise<WeatherData[]> => {
  // return [sampleData];
  return (
    axiosWeatherClient
      // .get("/current", { params: { lon: 53.33306, lat: -6.24889 } })
      .get("/current", { params: { lon: longitude, lat: latitude } })
      .then((response) => {
        console.log("WEATHER", response.data.data);
        return response.data.data;
      })
  );
};
