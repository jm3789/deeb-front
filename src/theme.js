import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#A1888B",
    },
    secondary: {
      main: "#78E7D3",
      contrastText: "#A1888B",
    },
    accent: {
      main: "#5CBFAA",
      contrastText: "white",
    },
    text: {
      // main: "#424242",
      main: "#5CBFAA",
    },
  },
  typography: {
    allVariants: {
      color: "#A1888B",
    },
  },
});
