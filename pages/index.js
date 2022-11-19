import React, { useEffect } from "react";
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

const useUser = () => ({ user: true, loading: false });

export default function Home(props) {
  // Data Props
  const { banner, movies, subscription, originals } = props;
  // Hooks
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user || loading) router.push("/signin");
  }, [user, loading]);

  if (user)
    return (
      <Layout>
        <TopSwiper>
          {banner.map((item) => (
            <SwiperSlide>
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

export async function getStaticProps(context) {
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
