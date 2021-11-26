import { Alert, Button, AlertTitle } from "@mui/material";

export type ErrorMessageWithReloadProps = {
  message?: string;
};

const ErrorMessageWithReload = ({
  message = "Something went wrong, please try again",
}: ErrorMessageWithReloadProps) => {
  return (
    <Alert
      severity='error'
      variant='standard'
      sx={{
        alignSelf: "center",
        margin: "0rem 0rem 3rem 0rem",
        columns: 1,
      }}
      action={
        <Button color='inherit' size='small' onClick={() => window.location.reload()}>
          Retry
        </Button>
      }>
      <AlertTitle>Server Error</AlertTitle>
      {/* {error instanceof Error ? error.message : "Unable to fetch folders data"} */}
      {message}
    </Alert>
  );
};

export default ErrorMessageWithReload;
