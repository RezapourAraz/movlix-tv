import React from "react";
// Mui
import { Box, Typography } from "@mui/material";

const CategoryCard = ({ category }) => {
  return (
    <Box
      width="100%"
      height="100%"
      borderRadius={2}
      overflow="hidden"
      position="relative"
    >
      <img
        width="100%"
        height="100%"
        src={category.image}
        style={{ objectFit: "cover", borderRAdius: "16px" }}
      />
      <Box position="absolute" bottom={20} left={20}>
        <Typography
          variant="h5"
          fontSize={18}
          fontWeight="bold"
          color="common.white"
        >
          {category.title}
        </Typography>
      </Box>
      <Box position="absolute" bottom={20} right={20}>
        <Typography
          variant="h5"
          fontSize={18}
          px={0.8}
          py={0.3}
          fontWeight="bold"
          color="common.white"
          bgcolor="primary.main"
          borderRadius={2}
        >
          {category.count}
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryCard;
