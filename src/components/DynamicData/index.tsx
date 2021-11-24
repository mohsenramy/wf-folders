import { Alert, AlertTitle, Box, Button, CircularProgress, Typography } from "@mui/material";

import { useFoldersStructure } from "../../hooks/useFoldersStructure";
import FolderTree from "../FoldersTree";
// import { useTheme} from '@mui/styles'

function DynamicData() {
  // const theme = useTheme();

  const { isLoading, isError, error, data } = useFoldersStructure();
  // first argument is a string to cache and track the query result

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "1.875rem",
          // height: "80vh",
        }}>
        <CircularProgress color='info' />
        <Typography sx={{ margin: "1rem" }}>Fetching Data ...</Typography>
      </Box>
    );
  }
  if (isError) {
    // error instanceof Error) {

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1.875rem",
          alignItems: "center",
          // height: "80vh",
        }}>
        <Alert
          severity='error'
          action={
            <Button
              color='inherit'
              // size='small'
              sx={{
                margin: "1.3rem",
              }}
              onClick={() => window.location.reload()}>
              Retry
            </Button>
          }>
          <AlertTitle>Server Error</AlertTitle>
          {error instanceof Error ? error.message : "Unable to fetch folders data"}
        </Alert>
      </Box>
    );
  }

  return (
    <FolderTree foldersStructureData={data} />
    // <div className='container'>
    //   <h1>Posts</h1>
    //   {data?.map((post, index) => {
    //     return <li key={index}>{post.title}</li>;
    //   })}
    // </div>
  );
}

export default DynamicData;
