import React from "react";
// Mui
import { Box, Typography } from "@mui/material";

const MovieCards = () => {
  return (
    <Box
      bgcolor="primary.light"
      display="flex"
      borderRadius={2}
      overflow="hidden"
      height={230}
      width={350}
    >
      <Box width={160}>
        <Box height="-webkit-fill-available">
          <img
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
            src="http://flixtv.volkovdesign.com/main/img/card/1.png"
            alt=""
          />
        </Box>
      </Box>
      <Box
        p={3}
        width={190}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h5"
            color="common.white"
            sx={{
              transition: "0.5s linear",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            Title
          </Typography>
        </Box>
        <Box my={1} display="flex" justifyContent="space-between">
          <Typography variant="subTitle2" color="grey">
            Title
          </Typography>
          <Typography variant="subTitle2" color="grey">
            Title
          </Typography>
          <Typography variant="subTitle2" color="grey">
            Title
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="subTitle2" color="grey">
            Director:
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="subTitle2" color="grey">
            Title
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCards;
