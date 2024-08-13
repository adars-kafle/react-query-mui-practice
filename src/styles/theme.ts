import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5", // Indigo Blue
    },
    secondary: {
      main: "#FF4081", // Pink
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F5F5F5", // Light Gray Background
      paper: "#FFFFFF", // White Paper Background
    },
    text: {
      primary: "#212121", // Dark gray for primary text
      secondary: "#757575", // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
