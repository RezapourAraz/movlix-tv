// * theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
// * Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
