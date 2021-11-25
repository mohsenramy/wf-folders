import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    // text: {
    //   primary: "#899198",
    //   secondary: "#00000",
    // },
  },
  typography: {
    allVariants: {
      color: "#899198",
      // fontSize: 12,
    },
  },
  // components: {
  //   MuiContainer: {
  //     variants: [{
  //       props: { variant: 'myContainer' },
  //       style: {

  //       }
  //     }]
  //   }
  // }
});
theme = responsiveFontSizes(theme);

export default theme;
