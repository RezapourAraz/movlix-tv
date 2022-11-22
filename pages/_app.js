//  theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
//  Styles
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapperStore, store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapperStore.withRedux(MyApp);
