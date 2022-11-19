import React from "react";
// Mui
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieImageCard from "../cards/MovieImage.cards";
import { Swiper, SwiperSlide } from "swiper/react";

const SubscriptionSection = ({ subscription }) => {
  return (
    <Container>
      <Box my={3}>
        <Typography variant="h5" fontSize={30} color="common.white">
          Subscriptions
        </Typography>
      </Box>
      <Grid container mb={2}>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {subscription.map((sub) => (
            <SwiperSlide key={sub.id}>
              <MovieImageCard sub={sub} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Container>
  );
};

export default SubscriptionSection;
