import React from "react";
// Mui
import { Box, Grid, IconButton, Typography } from "@mui/material";
// Icons
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const ProfileSection = () => {
  return (
    <Grid container my={3}>
      <Grid item container xs={12} gap={2} justifyContent="space-between">
        {[1, 2, 3, 4].map((item) => (
          <Grid
            key={item}
            item
            md={2.8}
            bgcolor="primary.light"
            p={3}
            borderRadius={3}
          >
            Profile Cards
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} gap={2} my={3}>
        <Grid item md={5.9} bgcolor="primary.light" borderRadius={3}>
          <Box
            borderBottom="1px solid"
            borderColor="primary.main"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <LocalMoviesOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography mx={1} variant="h6" color="common.white">
                Movies for you
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <CachedOutlinedIcon sx={{ color: "secondary.main" }} />
              </IconButton>
            </Box>
          </Box>
          <Box p={3}>Lists</Box>
        </Grid>
        <Grid item md={5.9} bgcolor="primary.light" borderRadius={3}>
          <Box
            borderBottom="1px solid"
            borderColor="primary.main"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <StarBorderPurple500OutlinedIcon
                sx={{ color: "secondary.main" }}
              />
              <Typography mx={1} variant="h6" color="common.white">
                Latest reviews
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <CachedOutlinedIcon sx={{ color: "secondary.main" }} />
              </IconButton>
            </Box>
          </Box>
          <Box p={3}>Lists</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;
