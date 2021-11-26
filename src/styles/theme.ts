import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    allVariants: {
      color: "#899198",
      // fontSize: 12,
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
