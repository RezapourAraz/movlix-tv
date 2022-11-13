// * Mui
import { Box, Container } from "@mui/material";
import TopHeaderAppBar from "../appbars/TopHeader.appbars";
import MainFooter from "../footer/MainFooter";

const Layout = ({ children }) => {
  return (
    <Box>
      <TopHeaderAppBar />
      {children}
      <MainFooter />
    </Box>
  );
};
export default Layout;
