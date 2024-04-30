import { LuMoveLeft, LuMoveRight, LuQuote } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialSlides } from "../data";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="bg-default-100 rounded-lg dark:bg-default-50">
          <div className="md:p-20 p-10 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
                Our Testimonials
              </span>
              <h2 className="md:text-4xl text-3xl font-medium text-default-950 mt-3">
                Explore the feedback from our clients.
              </h2>
            </div>
            <div className="relative">
              <Swiper
                modules={[Thumbs, FreeMode, Navigation]}
                loop
                navigation={{
                  nextEl: ".testimonials-button-next",
                  prevEl: ".testimonials-button-prev",
                }}
                className="testimonials relative"
              >
                {testimonialSlides.map((slide, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="max-w-4xl mx-auto text-center">
                        <div className="p-6">
                          <LuQuote className="h-9 w-9 text-default-400 mx-auto" />
                          <p className="md:text-xl  mt-4 mb-6">
                            "{slide.description}"
                          </p>
                          <img
                            src={slide.image}
                            className="h-14 w-14 rounded-full mx-auto"
                          />
                          <h3 className="text-xl font-medium text-default-950 mt-5">
                            {slide.name}
                          </h3>
                          <p className="text-base">{slide.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-1/2 z-10">
                <div className="testimonials-button-prev">
                  <div className="relative">
                    <span className="absolute -start-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary" />
                    <LuMoveLeft className="h-10 w-10 text-default-950" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 end-0 -translate-y-1/2 translate-x-1/2 z-10">
                <div className="testimonials-button-next">
                  <div className="relative">
                    <span className="absolute -end-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary" />
                    <LuMoveRight className="h-10 w-10 text-default-950" />
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
