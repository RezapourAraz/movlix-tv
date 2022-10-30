// * Mui
import { Box, Container } from "@mui/material";
import TopHeaderAppBar from "../appbars/TopHeader.appbars";

const Layout = ({ children }) => {
  return (
    <Box>
      <TopHeaderAppBar />
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
export default Layout;
