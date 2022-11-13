// * Components
import Layout from "../components/layout/Layout";
import TopSwiper from "../components/swipers/Top.swipers";
import { SwiperSlide } from "swiper/react";
import FilterAppBars from "../components/appbars/Filter.appbars";
import MainSection from "../components/sections/Main.sections";
import SubscriptionSection from "../components/sections/Subscriptions.sections";
import MainFooter from "../components/footer/MainFooter";

const swiper = [
  "https://tvseriesfinale.com/wp-content/uploads/2022/08/houseofthedragon02-590x259.jpg",
];

export default function Home() {
  return (
    <Layout>
      <TopSwiper>
        {swiper.map((item) => (
          <SwiperSlide>
            <img width="100%" height="450px" src={item} alt="" />
          </SwiperSlide>
        ))}
      </TopSwiper>
      <FilterAppBars />
      <MainSection />
      <SubscriptionSection />
      <MainFooter />
    </Layout>
  );
}
