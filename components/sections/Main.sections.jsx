import React from "react";
// Mui
import { Box, Container, Grid, Pagination, Typography } from "@mui/material";

// Components
import MovieCards from "../cards/Movie.cards";

const MainSection = () => {
  return (
    <Container>
      <Grid container gap={0.5} my={1}>
        <Grid item md={3.97} display="flex" justifyContent="center">
          <MovieCards />
        </Grid>
        <Grid item md={3.97} display="flex" justifyContent="center">
          <MovieCards />
        </Grid>
        <Grid item md={3.97} display="flex" justifyContent="center">
          <MovieCards />
        </Grid>
      </Grid>
      {/* Pagination Component */}
      <Box
        bgcolor="primary.light"
        borderRadius={2}
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography
          variant="subTitle1"
          color="common.white"
          fontSize={15}
          fontWeight="bold"
        >
          12 from 144
        </Typography>
        <Pagination
          count={10}
          variant="outlined"
          color="secondary"
          sx={{
            ".MuiPaginationItem-root": {
              backgroundColor: "primary.main",
              color: "common.white",
              fontWeight: "bold",
            },
            ".Mui-selected": {
              color: "primary.main",
              bgcolor: "secondary.main",
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default MainSection;
