import { Box, Typography } from "@mui/material";
import React from "react";

const MovieImageCard = ({ sub }) => {
  return (
    <Box width={160} height={260}>
      <Box height={230} borderRadius={3} overflow="hidden">
        <img
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          src={sub.image}
          alt={sub.title}
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
          {sub.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieImageCard;
