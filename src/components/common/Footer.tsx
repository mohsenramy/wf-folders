import { Box, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <Box
      sx={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0.5rem",
      }}>
      <Divider variant='fullWidth' />
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        padding={".5rem 0.5rem 0 0"}>
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
