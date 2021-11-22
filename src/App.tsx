import "./App.css";
import { Box, Grid, Paper } from "@mui/material";
import FolderTree from "./components/FolderTree";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Container maxWidth='lg'> */}
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper variant='outlined' style={{ height: 75 }} />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FolderTree />
            </Grid>
            <Grid item xs={4}>
              <Paper variant='outlined' style={{ height: 75 }} />
            </Grid>
          </Grid>
          <Grid item xs>
            <Paper variant='outlined' style={{ height: 75 }} />
          </Grid>
        </Grid>

        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={4} sm={8}>
              <FolderTree name='trees' />
            </Grid>
            <Grid item xs>
              <div>second column</div>
            </Grid>
          </Grid> */}
      </Box>
      {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;
