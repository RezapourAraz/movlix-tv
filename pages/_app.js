//  theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
//  Styles
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapperStore } from "../redux/store";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const { store } = wrapperStore.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextNProgress color="#2f80ed" />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
