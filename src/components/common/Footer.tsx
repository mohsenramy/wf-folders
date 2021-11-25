import { Box, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#9DADBA",
        // borderTopWidth: "1px",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0.5rem",
        // width: "100%",
      }}>
      <Divider variant='fullWidth' />
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        padding={".5rem 0.5rem 0 0"}>
        {/* <Box>THE BOX </Box> */}
        {/* <Box
          sx={
            {
              // flexDirection: "row",
              // justifyContent: "flex-end",
              // alignItems: "normal",
              // alignContent: "end",
            }
          }> */}

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
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;
