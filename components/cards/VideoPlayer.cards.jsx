import React from "react";
// Mui
import { Box, Grid, Typography } from "@mui/material";
// Icons
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";

const VideoPlayerCard = () => {
  return (
    <Box width={{ xs: "100%", md: 700 }} height={410} my={3} mr={2}>
      <Box
        width="100%"
        height="85%"
        borderRadius={2}
        overflow="hidden"
        sx={{
          background:
            "url(https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg) center center",
        }}
      />
      <Grid container alignItems="center" justifyContent="space-between" my={3}>
        <Grid item md={8} xs={12} display="flex" alignItems="center">
          <FileDownloadOutlinedIcon sx={{ color: "secondary.main" }} />
          <Typography variant="subtitle2" color="common.white">
            Download:
          </Typography>
          <Typography variant="subtitle2" mx={1} color="common.white">
            480p
          </Typography>
          <Typography variant="subtitle2" color="common.white">
            |
          </Typography>

          <Typography variant="subtitle2" mx={1} color="common.white">
            720p
          </Typography>
          <Typography variant="subtitle2" color="common.white">
            |
          </Typography>
          <Typography variant="subtitle2" mx={1} color="common.white">
            1080p
          </Typography>
          <Typography variant="subtitle2" color="common.white">
            |
          </Typography>
          <Typography variant="subtitle2" mx={1} color="common.white">
            4k
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          my={{ xs: 2, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "start", md: "end" }}
        >
          <TurnedInNotOutlinedIcon sx={{ color: "secondary.main" }} />
          <Typography variant="subtitle2" ml={0.5} color="common.white">
            Add to favorites
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoPlayerCard;
