import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DynamicData from "./components/DynamicData";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import theme from "./styles/theme";
import DataFetcher from "./components/DataFetcher";
import { useCurrentWeather } from "./hooks/useCurrentWeather";
import FoldersTree from "./components/FoldersStructure/FoldersTree";
import { TreeNodeType } from "./types/Tree.types";
import Weather from "./components/Weather/Weather";
import { useFoldersStructure } from "./hooks/useFoldersStructure";
import { WeatherData } from "./types/Weather.types";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
          <Box
            component={Grid}
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 3,
              margin: "2rem 0 0 0",
            }}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid
                item
                xs={11}
                md={10}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  overflowX: "auto",
                  margin: "0 .5rem 0 .5rem",
                }}>
                {/* <DynamicData /> */}
                {/* <DataFetcher<TreeNodeType>
                  queryName='FolderStructure'
                  queryFunc={useFoldersStructure}
                  component={Weather}
                /> */}
                <DataFetcher<TreeNodeType>
                  queryName='FolderStructure'
                  queryFunc={useFoldersStructure}
                  component={FoldersTree}
                />
                <DataFetcher<WeatherData>
                  queryName='WeatherCurrent'
                  queryFunc={useCurrentWeather}
                  queryFuncArgs={[53.33306, -6.24889]}
                  component={Weather}
                />
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
              <Footer />
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
