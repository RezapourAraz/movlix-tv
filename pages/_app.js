//  theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
//  Styles
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapperStore } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const { store} = wrapperStore.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
