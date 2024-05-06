import creative6 from "@/assets/images/landing/creative/img-6.png"
import { LuStar } from "react-icons/lu"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs } from "swiper/modules"

import { testimonialSlides } from "../data"

import "swiper/css"

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Testimonials</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">What People Says?</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div className="mx-auto">
            <div className="relative z-10">
              <div className="absolute inset-y-0 -start-20 h-full w-full border-2 border-default-200 rounded-full -z-10 hidden sm:block" />
              <img src={creative6} className="rounded-full" />
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Thumbs, FreeMode]}
              loop
              className="testimonials rounded-md relative"
            >
              {testimonialSlides.map((slide, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="p-6 rounded-md bg-default-50">
                      <div className="flex items-center gap-5">
                        <img src={slide.image} className="h-14 w-14 rounded-full border-4 border-white/20" />
                        <h3 className="text-lg font-medium text-default-950">{slide.name}</h3>
                      </div>
                      <p className="text-base text-default-700 mt-4">{slide.description}</p>
                      <div className="flex items-center gap-2 mt-4">
                        {Array.from(new Array(5)).map((_val, idx) => {
                          return (
                            <LuStar key={idx}  className="h-5 w-5 text-yellow-300 fill-current" />
                          )
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider