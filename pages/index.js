// * Components
import Layout from "../components/layout/Layout";
import TopSwiper from "../components/swipers/Top.swipers";
import { SwiperSlide } from "swiper/react";
import FilterAppBars from "../components/appbars/Filter.appbars";
import MainSection from "../components/sections/Main.sections";
import SubscriptionSection from "../components/sections/Subscriptions.sections";
import { Box } from "@mui/material";

const swiper = [
  "http://flixtv.volkovdesign.com/main/img/home/1.jpg",
  "http://flixtv.volkovdesign.com/main/img/home/2.jpg",
  "http://flixtv.volkovdesign.com/main/img/home/3.jpg",
  "http://flixtv.volkovdesign.com/main/img/home/4.jpg",
  "http://flixtv.volkovdesign.com/main/img/home/5.jpg",
  "http://flixtv.volkovdesign.com/main/img/home/6.jpg",
];

export default function Home() {
  return (
    <Layout>
      <TopSwiper>
        {swiper.map((item) => (
          <SwiperSlide>
            <Box borderRadius={2} overflow="hidden">
              <img
                loading="lazy"
                width="100%"
                height="100%"
                src={item}
                alt=""
              />
            </Box>
          </SwiperSlide>
        ))}
      </TopSwiper>
      <FilterAppBars />
      <MainSection />
      <SubscriptionSection />
    </Layout>
  );
}
