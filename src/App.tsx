import "./App.css";
import { Box, Container, Divider, Grid, Link } from "@mui/material";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import DynamicData from "./components/DynamicData";
let theme = createTheme({
  palette: {
    text: {
      primary: "#899198",
      secondary: "#00000",
    },
  },
  typography: {
    allVariants: {
      color: "#899198",
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* <Box sx={{ flexGrow: 1, alignContent: "center" }}> */}

        <Box
          component={Grid}
          container
          justifyContent='center'
          alignItems='center'
          spacing={0}
          boxShadow={3}
          style={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <Box
              style={{
                borderRadius: "5px 5px 0px 0px",
                backgroundColor: "#9DADBA",
                padding: "0px 5px 0px 10px ",
              }}>
              <MoreHorizSharpIcon
                style={{ color: "#8E9EAD" }}
                fontSize='large'
              />
            </Box>
          </Grid>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={10}>
              {/* <FolderTree /> */}
              <DynamicData />
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='flex-start'>
            <Divider />
            <Grid
              item
              sx={{
                // backgroundColor: "#9DADBA",
                borderTopWidth: "1px",
                padding: "10px",
              }}>
              <Link
                href='https://github.com/mohsenramy/wf-folders'
                underline='hover'
                variant='caption'
                color='inherit'
                target='_blank'
                rel='noopener'>
                {/* <Typography> */}
                {/* <strong>GitHub: </strong> */}
                https://git.io/J1AcH
                {/* </Typography> */}
              </Link>
            </Grid>
          </Grid>
        </Box>

        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={4} sm={8}>
              <FolderTree name='trees' />
            </Grid>
            <Grid item xs>
              <div>second column</div>
            </Grid>
          </Grid> */}
        {/* </Box> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
