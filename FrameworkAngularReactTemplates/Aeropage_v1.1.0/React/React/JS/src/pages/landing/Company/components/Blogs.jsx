import { Swiper, SwiperSlide } from "swiper/react";
import { blogSlides } from "../data";
import { Link } from "react-router-dom";
import { FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Our Blog
          </span>
          <h2 className="md:text-4xl text-3xl font-medium text-default-950 mt-3">
            News and Knowledge
          </h2>
          <p className="text-base  mt-5">
            Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices
            urna arcu quis. Tristique potenti vitae in adipiscing. Eu augue cras
            quis nec proin pharetra netus massa.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Thumbs, FreeMode]}
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
            {blogSlides.map((blog, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-5">
                      <img src={blog.image} className="rounded-lg" />
                    </div>
                    <Link
                      to=""
                      className="text-xl font-medium text-default-950"
                    >
                      {blog.description}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
