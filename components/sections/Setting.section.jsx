import React from "react";
// Mui
import { Box, Button, Grid, Typography } from "@mui/material";

const SettingSection = () => {
  return (
    <Grid
      container
      sx={{ p: 3, bgcolor: "primary.light", justifyContent: "space-between" }}
    >
      <Grid container item md={5.8} sx={{ bgcolor: "primary.main", p: 3 }}>
        <Box width="100%">
          <Typography variant="subtitle1" color="common.white">
            Profile details
          </Typography>
        </Box>
        <Grid item md={5.5} sx={{ m: 1 }}>
          input
        </Grid>
        <Grid item md={5.5} sx={{ m: 1 }}>
          input
        </Grid>

        <Grid item md={5.5}>
          <Button
            variant="contained"
            sx={{
              color: "common.white",
              bgcolor: "secondary.main",
              transition: "all .3s linear",
              "&:hover": {
                bgcolor: "common.white",
                color: "primary.main",
              },
            }}
          >
            save
          </Button>
        </Grid>
      </Grid>
      <Grid container item md={5.8} sx={{ bgcolor: "primary.main", p: 3 }}>
        <Box width="100%">
          <Typography variant="subtitle1" color="common.white">
            Change password
          </Typography>
        </Box>

        <Grid item md={5.5} sx={{ m: 1 }}>
          input
        </Grid>
        <Grid item md={5.5} sx={{ m: 1 }}>
          input
        </Grid>

        <Grid item md={5.5}>
          <Button
            variant="contained"
            sx={{
              color: "common.white",
              bgcolor: "secondary.main",
              transition: "all .3s linear",
              "&:hover": {
                bgcolor: "common.white",
                color: "primary.main",
              },
            }}
          >
            change
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SettingSection;
