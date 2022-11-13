import { Box, Typography } from "@mui/material";
import React from "react";

const MovieImageCard = () => {
  return (
    <Box width={160} height={260}>
      <Box height={230} borderRadius={3} overflow="hidden">
        <img
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          src="http://flixtv.volkovdesign.com/main/img/card/12.png"
          alt=""
        />
      </Box>
      <Box my={1} textAlign="center">
        <Typography
          variant="h6"
          noWrap
          color="common.white"
          fontSize={18}
          mx={1.5}
        >
          hello hwelllllllllllllliiiiiiiiiiiiii
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieImageCard;
