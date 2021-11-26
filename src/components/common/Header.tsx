import { Box, useTheme } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Header = () => {
  const theme = useTheme();

  return (
    <Box
      data-testid='Header'
      sx={{
        borderRadius: "0.3125rem 0.3125rem 0 0",
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.grey[700],
        padding: "0.25rem 0 0 0.5rem ",
      }}>
      <FiberManualRecordIcon fontSize='small' />
      <FiberManualRecordIcon fontSize='small' />
      <FiberManualRecordIcon fontSize='small' />
    </Box>
  );
};

export default Header;
