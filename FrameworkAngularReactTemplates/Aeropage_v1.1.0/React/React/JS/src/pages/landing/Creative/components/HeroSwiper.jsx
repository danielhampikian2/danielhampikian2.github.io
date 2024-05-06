import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Controller,
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper/modules";

import { heroSwiperSlides } from "../data";

import creative1 from "@/assets/images/landing/creative/img-1.jpg";
import creative2 from "@/assets/images/landing/creative/img-2.jpg";
import creative3 from "@/assets/images/landing/creative/img-3.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const thumbImages = [creative2, creative3, creative1];
const HeroSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      id="home"
      className="bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
    >
      <div className="grid xl:grid-cols-5 grid-cols-1 gap-6 items-end">
        <div className="xl:col-span-3">
          <Swiper
            onSwiper={setThumbsSwiper}
            speed={1000}
            watchSlidesProgress={true}
            loop={false}
            effect="fade"
            modules={[Thumbs, EffectFade]}
            className="mySwiper swiper-hero"
          >
            {thumbImages.map((image, idx) => {
              return (
                <SwiperSlide key={idx} className="relative">
                  <img src={image} className="h-full w-full" />
                  <div className="absolute inset-0 bg-black/40" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="relative xl:col-span-2 p-6 xl:p-0">
          <Swiper
            speed={1000}
            spaceBetween={10}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            watchSlidesProgress
            modules={[Thumbs, Controller, Autoplay, Navigation]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop
            navigation={{
              nextEl: ".cre-button-next",
              prevEl: ".cre-button-prev",
            }}
            className="mySwiper2 swiper-hero relative me-10"
          >
            {heroSwiperSlides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="flex-col flex items-start justify-end xl:h-full pb-28">
                    <h2 className="text-4xl font-semibold text-default-950 mt-6 max-w-2xl">
                      {slide.title}
                    </h2>
                    <p className="w-3/4 text-base  font-medium mt-5">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute inset-x-0 bottom-8 z-10">
            <div className="flex items-center justify-end gap-5 relative pe-10">
              <div className="cre-button-prev">
                <div className="h-14 w-14 rounded-full border border-default-200 bg-default-50 hover:bg-primary text-default-900 hover:text-white flex items-center justify-center">
                  <LuArrowLeft className="h-7 w-7" />
                </div>
              </div>
              <div className="cre-button-next">
                <div className="h-14 w-14 rounded-full border border-default-200 bg-default-50 hover:bg-primary text-default-900 hover:text-white flex items-center justify-center">
                  <LuArrowRight className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSwiper;
