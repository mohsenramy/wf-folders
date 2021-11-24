import { Box, useTheme } from "@mui/material";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "0.3125rem 0.3125rem 0 0",
        backgroundColor: theme.palette.grey[500],
        // backgroundColor: "#9DADBA",
        padding: "0 0.3125rem 0 10 ",
      }}>
      <MoreHorizSharpIcon
        style={{ color: theme.palette.grey[700] }}
        fontSize='large'
      />
    </Box>
  );
};

export default Header;
