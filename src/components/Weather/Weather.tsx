import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TreeNodeType } from "../../types/Tree.types";
import { WeatherData } from "../../types/Weather.types";
import { DataPresenter } from "../DataFetcher";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

type WeatherProps = DataPresenter<WeatherData>;

const Weather = ({ serverData }: WeatherProps) => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     // width: "100%",
    //     background: "yellow",
    //   }}>
    <>
      {/* THis is the Weather ${JSON.stringify(serverData, null, 2)} */}
      {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
      {serverData && serverData?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            borderTopStyle: "dotted",
            borderTopWidth: "0.05rem",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: "0rem 0.5rem 0 0.25rem",
            }}>
            <img
              src='https://www.weatherbit.io/static/img/icons/t01d.png'
              width='50px'
              height='50px'
              alt='Weather icon'
            />
            {/* </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "baseline",
              p: "0rem 0.5rem 0 0.25rem",
            }}> */}
            <Typography noWrap fontSize={"small"} sx={{ textAlign: "left" }}>
              {serverData[0]?.weather.description}
            </Typography>
            <Typography noWrap fontSize={"small"} sx={{ textAlign: "left" }}>
              {serverData[0]?.city_name}, {serverData[0]?.country_code}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              // flex: 3,
              // flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "0rem 0.5rem 0 0.5rem",
                // borderRightWidth: "0.1REM",
                // borderRightColor: "#000000",
                // borderRightStyle: "dotted",
                height: "80%",
              }}>
              <Typography fontSize={"2.5rem"}>{serverData[0]?.temp}°C</Typography>
              <Typography fontSize={"0.75rem"}>Feels Like~ {serverData[0]?.app_temp}°C</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "0rem 0.5rem 0 0.5rem",
                // borderRightWidth: "0.1REM",
                // borderRightColor: "#000000",
                // borderRightStyle: "dotted",
                height: "80%",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "0rem 0.5rem 0 0.25rem",
                }}>
                <WbSunnyIcon fontSize='large' style={{ fill: "#F9D71C" }} />
                <AirIcon fontSize='large' style={{ fill: "#CABEC0" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "0rem 0.5rem 0 0.25rem",
                }}>
                <Typography noWrap fontSize={"small"}>
                  Sunrise: {serverData[0]?.sunrise}
                </Typography>
                <Typography noWrap fontSize={"small"}>
                  Sunset: {serverData[0]?.sunset}
                </Typography>
                <Typography noWrap fontSize={"small"}>
                  {serverData[0]?.wind_cdir_full}
                </Typography>
                <Typography noWrap fontSize={"small"}>
                  {serverData[0]?.wind_spd}Km/h
                </Typography>
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "0rem 0.5rem 0 0.5rem",

                height: "80%",
              }}>
              <AirIcon />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "0rem 0.5rem 0 0.25rem",
                }}>
                <Typography> {serverData[0]?.wind_cdir_full}</Typography>
                <Typography>{serverData[0]?.wind_spd}Km/h</Typography>
              </Box>
            </Box> */}
          </Box>
        </Box>
      ) : (
        "NOData"
      )}
    </>
    // {/* </Box> */ }
  );
};

export default Weather;
