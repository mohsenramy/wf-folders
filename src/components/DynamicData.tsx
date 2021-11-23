import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "react-query";
import { getFoldersStructureData } from "../services/folders";
import FolderTree from "./FolderTree";

function DynamicData() {
  const { data, error, isLoading } = useQuery(
    "FolderStructure",
    getFoldersStructureData,
    { retry: false }
  );
  // first argument is a string to cache and track the query result
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          alignContent: "center",
        }}>
        <CircularProgress color='inherit' />
      </Box>
    );
  }
  if (error instanceof Error) {
    return (
      <Alert
        severity='error'
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          alignContent: "center",
        }}
        action={
          <Button
            color='inherit'
            size='small'
            onClick={() => window.location.reload()}>
            Retry
          </Button>
        }>
        <AlertTitle>Error</AlertTitle>
        Error fetching folders data
      </Alert>
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
