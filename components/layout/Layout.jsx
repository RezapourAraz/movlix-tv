// * Mui
import { Box, Container } from "@mui/material";
import TopHeaderAppBar from "../appbars/TopHeader.appbars";

const Layout = ({ children }) => {
  return (
    <Box>
      <TopHeaderAppBar />
      {children}
    </Box>
  );
};
export default Layout;
