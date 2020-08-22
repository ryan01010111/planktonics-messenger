import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#9adcfb",
      main: "#81d4fa",
      dark: "#5a94af",
      contrastText: "#000",
    },
    secondary: {
      light: "#87f3be",
      main: "#69f0ae",
      dark: "#49a879",
      contrastText: "#000",
    },
    background: {
      default: "#444",
    },
  },
});

export default theme;
