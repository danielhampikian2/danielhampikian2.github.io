
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonialSlides } from "../data"
import { LuArrowLeft, LuArrowRight, LuStar } from "react-icons/lu"

import marketing11 from '@/assets/images/landing/marketing/img-11.png'

import "swiper/css"
import "swiper/css/navigation"

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
          <div className="relative">
            <Swiper
              modules={[Thumbs, FreeMode,Navigation]}
              loop
              navigation={{
                prevEl: ".testimonials-button-prev",
                nextEl: ".testimonials-button-next"
              }}
              className="testimonials rounded-md relative"
            >
              {testimonialSlides.map((slide, idx) => {
                return (
                  <SwiperSlide key={idx} >
                    <div className="p-6 rounded-md bg-default-100 dark:bg-default-50">
                      <div className="flex items-center gap-5">
                        <img src={slide.image} className="h-14 w-14 rounded-full border-4 border-white/20" />
                        <h3 className="text-lg font-medium text-default-950">{slide.name}</h3>
                      </div>
                      <p className="text-base mt-4">{slide.description}</p>
                      <div className="flex items-center gap-2 mt-4">
                        {Array.from(new Array(5)).map((_val, idx) => {
                          return (
                            <LuStar key={idx} className="h-5 w-5 text-yellow-300" />
                          )
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="pt-6 z-10 hidden md:block">
              <div className="flex items-center justify-end gap-5 relative pe-10">
                <div className="testimonials-button-prev cursor-pointer">
                  <div className="h-14 w-14 rounded-full bg-primary/90 text-white hover:bg-primary flex items-center justify-center">
                    <LuArrowLeft className="h-7 w-7" />
                  </div>
                </div>
                <div className="testimonials-button-next cursor-pointer">
                  <div className="h-14 w-14 rounded-full bg-primary/90 text-white hover:bg-primary flex items-center justify-center">
                    <LuArrowRight className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-auto me-0">
            <div className="relative z-10">
              <div className="absolute inset-y-0 -start-20 h-full w-full border-2 border-primary/10 rounded-full -z-10 hidden lg:block bg-primary/5" />
              <img src={marketing11} className="rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider