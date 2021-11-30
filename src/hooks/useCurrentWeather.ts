import { useQuery } from "react-query";
import { getCurrentWeather } from "../services/weatherData";

export const useCurrentWeather = () =>
  // latitude: number, longitude: number
  {
    // return useQuery("WeatherCurrent", () => getCurrentWeather(latitude, longitude), {
    return useQuery(["WeatherCurrent"], getCurrentWeather, {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    });
  };
