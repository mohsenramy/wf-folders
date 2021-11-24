import { Box, Container, Divider, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#9DADBA",
        // borderTopWidth: "1px",
        padding: "0.625rem",
      }}>
      <Divider variant='fullWidth' />
      <Box
        component='div'
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "normal",
          // alignContent: "baseline",
        }}>
        <Link
          href='https://github.com/mohsenramy/wf-folders' //https://git.io/J1AcH
          underline='hover'
          variant='caption'
          color='inherit'
          target='_blank'
          rel='noopener'
          sx={{
            fontSize: "0.8rem",
            fontWeight: "600",
          }}>
          <GitHubIcon fontSize='inherit' /> GitHub Repo
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
