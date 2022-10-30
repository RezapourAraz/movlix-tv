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
          backgroundColor: "#000a12",
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#212529",
            width: 12,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 0,
            backgroundColor: "#75dab4",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#75dab4",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#75dab4",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#75dab4",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#75dab4",
          },
        },
      },
    },
  },

  palette: {
    common: {
      white: "#F8F9FA",
    },
    primary: {
      main: "#263238",
      light: "#4f5b62",
      dark: "#000a12",
    },
    secondary: {
      main: "#ffd600",
      light: "#ffff52",
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
