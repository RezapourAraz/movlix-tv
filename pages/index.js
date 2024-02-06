import React, { useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
// Next
import { useRouter } from "next/router";
// Mui
import { Box, IconButton, Typography } from "@mui/material";
// Swiper
import { SwiperSlide } from "swiper/react";
// Components
import Layout from "../components/layout/Layout";
import TopSwiper from "../components/swipers/Top.swipers";
import FilterAppBars from "../components/appbars/Filter.appbars";
import MainSection from "../components/sections/Main.sections";
import SubscriptionSection from "../components/sections/Subscriptions.sections";
import TvOriginalsSection from "../components/sections/TvOriginals.section";
// get file path
import fs from "fs/promises";
import path from "path";
// Icons
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Home(props) {
  // Hooks
  const [user, setUser] = useState({});
  const cookieUser = getCookie("user");
  // Data Props
  const { banner, movies, subscription, originals } = props;
  // Hooks
  const router = useRouter();

  // useEffect(() => {
  //   if (hasCookie("user")) {
  //     setUser(JSON.parse(cookieUser));
  //   } else {
  //     router.push("/signin");
  //   }
  // }, []);

  return (
    <Layout>
      <TopSwiper>
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              borderRadius={2}
              overflow="hidden"
              position="relative"
              sx={{
                zIndex: 1000,
                "&:hover .bookmark": {
                  opacity: 1,
                },
                "&:hover .rating": {
                  opacity: 1,
                },
                "&:hover .title-color": {
                  color: "secondary.main",
                },
                "&:hover .bg-image": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                loading="lazy"
                width="100%"
                height="100%"
                src={item.banner}
                alt={item.title}
                style={{ transition: "all 0.5s ease-out" }}
                className="bg-image"
              />
              <Box position="absolute" bottom={20} left={20}>
                <Typography
                  variant="subtitle1"
                  fontSize={26}
                  color="common.white"
                  className="title-color"
                  sx={{ transition: "all 0.5s ease-out" }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                position="absolute"
                top={20}
                left={20}
                sx={{
                  display: "flex",
                  bgcolor: "primary.light",
                  p: 0.3,
                  borderRadius: 2,
                  alignItems: "center",
                  opacity: 0,
                  transition: "all 0.5s ease-in-out ",
                }}
                className="bookmark"
              >
                <BookmarkBorderIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: 24,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out ",
                    "&:hover": {
                      color: "#ffc312",
                    },
                  }}
                />
              </Box>
              <Box
                position="absolute"
                sx={{
                  display: "flex",
                  bgcolor: "primary.light",
                  p: 0.3,
                  borderRadius: 2,
                  alignItems: "center",
                  opacity: 0,
                  transition: "all 0.5s ease-out",
                }}
                top={20}
                right={20}
                className="rating"
              >
                <StarBorderIcon
                  sx={{ color: "secondary.main", fontSize: 24 }}
                />
                <Typography variant="body2" color="common.white" mx={0.5}>
                  {item.rating}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </TopSwiper>
      <FilterAppBars />
      <MainSection movies={movies} />
      <SubscriptionSection subscription={subscription} />
      <TvOriginalsSection originals={originals} />
    </Layout>
  );
}

export async function getStaticProps({ req, res }) {
  // import dummy data
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data)
    return {
      notFound: true,
    };

  return {
    props: {
      banner: data.banner,
      movies: data.movies,
      subscription: data.subscription,
      originals: data.originals,
    },
  };
}
