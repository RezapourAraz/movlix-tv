// * Mui
import { Box, Container } from "@mui/material";
import TopHeaderAppBar from "../appbars/TopHeader.appbars";
import MainFooter from "../footer/MainFooter";

const Layout = ({ children, user }) => {
  return (
    <Box>
      <TopHeaderAppBar user={user} />
      {children}
      <MainFooter />
    </Box>
  );
};
export default Layout;
