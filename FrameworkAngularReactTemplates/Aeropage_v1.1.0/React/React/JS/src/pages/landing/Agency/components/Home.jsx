import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Thumbs, Controller, Autoplay, EffectFade } from "swiper/modules";

import { homeSwiperSlides } from "../data";

import bgLineImg from "@/assets/images/other/bg-lines-1.svg";

import agency1 from "@/assets/images/landing/agency/img-1.jpg";
import agency2 from "@/assets/images/landing/agency/img-2.jpg";
import agency3 from "@/assets/images/landing/agency/img-3.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

const swiperImages = [agency1, agency2, agency3];
const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section
      id="home"
      className={"bg-cover bg-no-repeat"}
      style={{ backgroundImage: `url(${bgLineImg})` }}
    >
      <div className="grid xl:grid-cols-5 grid-cols-1 items-center relative">
        <div className="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
          <div className="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
            <div className="p-6">
              <Swiper
                speed={1000}
                spaceBetween={10}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                watchSlidesProgress
                modules={[Thumbs, Controller, Autoplay]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                loop
                className="mySwiper2 relative"
              >
                {homeSwiperSlides.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="flex-col flex items-start justify-end xl:h-full">
                        <span className="text-base font-medium uppercase tracking-wider text-default-800">
                          {item.title}
                        </span>
                        <h2 className="md:text-4xl/snug text-3xl font-semibold text-default-950 mt-6">
                          {item.name}
                        </h2>
                        <p className="md:w-3/4 text-base  mt-5 mb-7">
                          {item.description}
                        </p>
                        <Link
                          to=""
                          className="inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Get Solution
                          <LuArrowUpRight className="h-6 w-6" />
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 order-1 xl:order-none">
          <Swiper
            onSwiper={setThumbsSwiper}
            speed={1000}
            watchSlidesProgress={true}
            loop={false}
            effect="fade"
            modules={[Thumbs, EffectFade]}
            className="mySwiper"
          >
            {swiperImages.map((image, idx) => {
              return (
                <SwiperSlide key={idx} className="relative">
                  <img src={image} className="h-full w-full" />
                  <div className="absolute inset-0 bg-black/25" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;
