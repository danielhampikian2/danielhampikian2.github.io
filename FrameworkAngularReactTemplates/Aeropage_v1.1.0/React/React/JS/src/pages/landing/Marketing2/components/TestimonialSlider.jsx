import { LuMoveLeft, LuMoveRight, LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import marketing9 from "@/assets/images/landing/marketing-2/img-9.png";

import { testimonialSlides } from "../data";

import "swiper/css";

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Testimonials
            </span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">
              Client Success Stories
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:mx-auto me-0">
            <div className="relative z-10">
              <div className="absolute lg:block hidden inset-y-0 -start-20 h-full w-full border-2 border-primary/10 rounded-full -z-10  bg-primary/5" />
              <img src={marketing9} className="rounded-full mx-auto" />
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[FreeMode, Navigation]}
              loop
              navigation={{
                prevEl: ".testimonials-button-prev",
                nextEl: ".testimonials-button-next",
              }}
              className="testimonials rounded-md relative"
            >
              {testimonialSlides.map((slide, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="sm:p-10 pb-10">
                      <div className="flex items-center gap-6 mt-5">
                        <div>
                          <img
                            src={slide.image}
                            className="h-14 rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-default-950">
                            {slide.name}
                          </h3>
                          <p className="text-base mt-2">{slide.position}</p>
                        </div>
                      </div>
                      <p className="text-lg mt-5">"{slide.description}"</p>
                      <div className="flex items-center gap-2 mt-5">
                        {Array.from(new Array(5)).map((_val, idx) => {
                          return (
                            <LuStar
                              key={idx}
                              className="h-5 w-5 stroke-yellow-400 fill-yellow-400"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute -bottom-8 sm:start-10 z-10">
              <div className="flex items-center justify-end gap-5 relative pe-10">
                <div className="testimonials-button-prev cursor-pointer">
                  <div className="h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center">
                    <LuMoveLeft className="h-6 w-6 stroke-default-950" />
                  </div>
                </div>
                <div className="testimonials-button-next cursor-pointer">
                  <div className="h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center">
                    <LuMoveRight className="h-6 w-6 stroke-default-950" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
