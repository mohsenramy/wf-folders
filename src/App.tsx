import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DynamicData from "./components/DynamicData";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import theme from "./styles/theme";
import FoldersTree from "./components/FoldersStructure/FoldersTree";
import { TreeNodeType } from "./types/Tree.types";

const emptyTree = [
  {
    type: "folder",
    name: "Parent",
    children: [
      {
        type: "file",
        name: "test_file.gif",
        size: 1363029,
      },
      {
        type: "file",
        name: "test_file_2.mpg4",
        size: 4723421,
      },
      {
        type: "folder",
        name: "Child",
        children: [],
      },
    ],
  },
] as TreeNodeType[];
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
                xs={12}
                md={10}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <DynamicData />
                <FoldersTree foldersStructureData={emptyTree} />
              </Grid>
            </Grid>
            <Grid container xs={12} direction='row' justifyContent='flex-end' alignItems='center'>
              <Footer />
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
