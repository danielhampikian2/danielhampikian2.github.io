<template>
  <section id="testimonials">
    <div class="container">
      <div class="bg-default-100 rounded-lg dark:bg-default-50">
        <div
          class="md:p-20 p-10 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
        >
          <div class="max-w-2xl mx-auto text-center mb-12">
            <span
              class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
              >Our Testimonials</span
            >
            <h2 class="md:text-4xl text-3xl font-medium text-default-950 mt-3">
              Explore the feedback from our clients.
            </h2>
          </div>
          <div class="relative">
            <Swiper
              class="relative"
              :modules="[Thumbs, FreeMode, Navigation]"
              :loop="!0"
              :navigation="{
                prevEl: '.testimonials-button-prev',
                nextEl: '.testimonials-button-next'
              }"
              :pagination="{
                clickable: !0,
                el: '.swiper-pagination'
              }"
            >
              <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
                <TestimonialCard2 :testimonial="testimonial" />
              </SwiperSlide>
            </Swiper>

            <div class="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-1/2 z-10">
              <div class="testimonials-button-prev">
                <div class="relative">
                  <span
                    class="absolute -start-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary"
                  ></span>
                  <MoveLeftIcon class="h-10 w-10 text-default-950"></MoveLeftIcon>
                </div>
              </div>
            </div>
            <div class="absolute top-1/2 end-0 -translate-y-1/2 translate-x-1/2 z-10">
              <div class="testimonials-button-next">
                <div class="relative">
                  <span
                    class="absolute -end-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary"
                  ></span>
                  <MoveRightIcon class="h-10 w-10 text-default-950"></MoveRightIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveRightIcon, MoveLeftIcon } from 'lucide-vue-next'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import TestimonialCard2 from '@/components/widgets/TestimonialCard2.vue'
import { testimonialData } from '@/utilities/common'
</script>
