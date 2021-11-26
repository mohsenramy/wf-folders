import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DynamicData from "./components/DynamicData";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import theme from "./styles/theme";

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
                <DynamicData />
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
