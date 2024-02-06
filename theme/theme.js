import { createTheme } from "@mui/material";

export const theme = createTheme({
  direction: "ltr",
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#131720",
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#212529",
            width: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 2,
            backgroundColor: "#2f80ed",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#2f80ed",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#2f80ed",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#2f80ed",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2f80ed",
          },
        },
      },
    },
  },

  palette: {
    common: {
      white: "#e0e0e0",
    },
    primary: {
      main: "#131720",
      light: "#151f30",
      dark: "#000a12",
    },
    secondary: {
      main: "#2f80ed",
      light: "#2f80ed",
      dark: "#c7a500",
    },
    success: {
      main: "#75dab4",
    },
    error: {
      main: "#DD5353",
    },
    Info: {
      main: "#B2C8DF",
    },
  },
});
