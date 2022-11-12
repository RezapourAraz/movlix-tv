import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/material";

const TopSwiper = ({ children }) => {
  return (
    <Box
      height="65vh"
      width="100%"
      bgcolor="primary.light"
      overflow="hidden"
      borderRadius={4}
      my={2}
    >
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default TopSwiper;
