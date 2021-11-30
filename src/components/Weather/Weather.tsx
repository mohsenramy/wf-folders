import { Box } from "@mui/system";
import { WeatherData } from "../../types/Weather.types";
import { DataPresenter } from "../DataFetcher";

type WeatherProps = DataPresenter<WeatherData>;

const Weather = (props: WeatherProps) => {
  return <Box>THis is the Weather ${JSON.stringify(props)}</Box>;
};

export default Weather;
