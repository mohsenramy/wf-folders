import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

type LoadingProps = {
  loadingMessage: string;
};

const Loading = ({ loadingMessage = "loading ..." }: LoadingProps) => {
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
      <CircularProgress sx={{ color: "text.primary" }} />
      <Typography sx={{ margin: "1rem" }}>{loadingMessage}</Typography>
    </Box>
  );
};

export default Loading;
