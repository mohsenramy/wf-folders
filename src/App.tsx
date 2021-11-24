import "./App.css";
import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DynamicData from "./components/DynamicData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
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
              // height: "50vh",
              // minHeight: "13rem",
            }}>
            <Grid item xs={12} md={10}>
              <DynamicData />
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='flex-end' alignItems='flex-start'>
            <Footer />
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
