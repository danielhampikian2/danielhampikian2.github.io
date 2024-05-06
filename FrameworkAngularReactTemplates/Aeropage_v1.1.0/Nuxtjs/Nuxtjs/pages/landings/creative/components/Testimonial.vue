<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Testimonials</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">What People Says?</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div class="mx-auto">
          <div class="relative z-10">
            <div
              class="absolute inset-y-0 -start-20 h-full w-full border-2 border-default-200 rounded-full -z-10 hidden sm:block"
            ></div>
            <img :src="creativeImg6" class="rounded-full" alt="" />
          </div>
        </div>

        <div class="relative">
          <Swiper
            class="rounded-md relative"
            :modules="[Thumbs, FreeMode, Navigation]"
            :loop="!0"
            :navigation="{
              nextEl: '.testimonials-button-next',
              prevEl: '.testimonials-button-prev'
            }"
            :pagination="{
              clickable: !0,
              el: '.swiper-pagination'
            }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
              <TestimonialCard3 :testimonial="testimonial" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import creativeImg6 from '@/assets/images/landing/creative/img-6.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import TestimonialCard3 from '@/components/widgets/TestimonialCard3.vue'
import { testimonialData } from '@/utilities/common'
</script>
