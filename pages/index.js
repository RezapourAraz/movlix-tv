import React, { useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";

// Next
import { useRouter } from "next/router";
// Mui
import { Box, Typography } from "@mui/material";
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

export default function Home(props) {
  // Hooks
  const [user, setUser] = useState(null);
  const cookieUser = getCookie("user");
  // Data Props
  const { banner, movies, subscription, originals } = props;
  // Hooks
  const router = useRouter();

  useEffect(() => {
    if (hasCookie("user")) {
      setUser(JSON.parse(cookieUser));
    } else {
      router.push("/signin");
    }
  }, []);

  return (
    <Layout>
      <TopSwiper>
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Box borderRadius={2} overflow="hidden" position="relative">
              <img
                loading="lazy"
                width="100%"
                height="100%"
                src={item.banner}
                alt={item.title}
              />
              <Box position="absolute" bottom={20} left={20}>
                <Typography
                  variant="subtitle1"
                  fontSize={26}
                  color="common.white"
                >
                  {item.title}
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
