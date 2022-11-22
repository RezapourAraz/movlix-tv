import React from "react";
// Mui
import { Box, Typography, Container, IconButton } from "@mui/material";
// Icons
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TvOriginalsSection = ({ originals }) => {
  return (
    <Container>
      <Box marginY={5}>
        <Typography
          variant="h5"
          marginY={1.5}
          fontSize={30}
          color="secondary.main"
        >
          MovlixTV
          <Typography
            component="span"
            variant="h5"
            fontSize={30}
            color="common.white"
          >
            {" "}
            Originals
          </Typography>
        </Typography>
        <Typography
          component="span"
          variant="h5"
          fontSize={18}
          color="common.white"
        >
          {" "}
          Celebrity interviews, trending entertainment stories, and expert
          analysis.
        </Typography>
      </Box>

      <Box p={1}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {originals.map((original) => (
            <SwiperSlide key={original.id}>
              <Box width={350} height={340}>
                <Box
                  width="100%"
                  height={240}
                  borderRadius={2}
                  overflow="hidden"
                  position="relative"
                >
                  <img height="100%" width="100%" src={original.image} alt="" />
                  <Box
                    position="absolute"
                    bottom={20}
                    left={20}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton>
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ color: "common.white", fontSize: 32 }}
                      />
                    </IconButton>

                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="common.white"
                      fontSize={18}
                    >
                      {original.length}
                    </Typography>
                  </Box>
                </Box>
                <Box p={1}>
                  <Typography
                    variant="h5"
                    textAlign="start"
                    fontSize={18}
                    color="common.white"
                  >
                    {original.title}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default TvOriginalsSection;
