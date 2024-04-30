import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { portfolioSlides } from "../data";

import "swiper/css";

const PortfolioSwiper = () => {
  return (
    <section id="portfolio" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Our Portfolio
          </span>
          <h2 className="text-4xl/tight font-medium text-default-950 mt-4">
            Case Studies
          </h2>
          <p className="text-lg mt-5">
            We assist brands and enterprises in distinguishing themselves in the
            evolving digital terrain.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[FreeMode]}
            loop
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonials_swiper relative"
          >
            {portfolioSlides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden">
                    <div className="relative group overflow-hidden">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={slide.image}
                          className="h-full w-full scale-[1.2] group-hover:scale-[1] transition-all duration-700"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <h3 className="text-xl font-medium text-default-950 group-hover:text-primary transition-all duration-700">
                          {slide.title}
                        </h3>
                        <p className="text-base text-default-900 mt-4">
                          {slide.subTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to=""
            className="inline-flex items-center justify-center gap-2 border border-default-200 hover:border-primary backdrop-blur-3xl text-default-950 py-2 px-8 rounded-md hover:bg-primary hover:text-white transition-all duration-700"
          >
            Read All Case Studies
            <LuArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiper;
