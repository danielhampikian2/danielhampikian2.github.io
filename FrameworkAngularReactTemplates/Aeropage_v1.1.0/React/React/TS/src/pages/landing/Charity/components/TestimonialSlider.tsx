import { Swiper, SwiperSlide } from "swiper/react"
import { testimonialSlides } from "../data"
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="relative">
        <Swiper
          modules={[Thumbs, FreeMode, Navigation,Pagination]}
          loop
          pagination={{ clickable: true, el: ".swiper-pagination", }}
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
          {testimonialSlides.map((slide, idx) => {
            const Icon = slide.icon
            return (
              <SwiperSlide key={idx}>
                <div className="max-w-4xl mx-auto text-center">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-black/60" />
                    <img src={slide.image} className="rounded-xl" />
                    <div className="absolute inset-0 rounded-md bg-white/20 m-6">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-default-950">
                          <div className="flex justify-center">
                            <Icon className="h-12 w-12 text-white" />
                          </div>
                          <h2 className="text-3xl text-white font-medium mt-5">{slide.title}</h2>
                          <p className="w-3/4 mx-auto text-base text-white/90 font-medium mt-4">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <div className="swiper-pagination !static mt-6" />
        </Swiper>
      </div>
    </section >
  )
}

export default TestimonialSlider