<template>
  <section id="testimonial" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Testimonials</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">What People Says?</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div class="relative">
          <Swiper
            class="relative rounded-md"
            :modules="[Thumbs, FreeMode, Navigation]"
            :loop="true"
            :navigation="{
              nextEl: '.testimonials-button-next',
              prevEl: '.testimonials-button-prev',
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination',
            }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
              <TestimonialCard1 :testimonial="testimonial" />
            </SwiperSlide>
          </Swiper>

          <div class="z-10 hidden pt-6 md:block">
            <div class="relative flex items-center justify-end gap-5 pe-10">
              <div class="testimonials-button-prev">
                <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
                  <ArrowLeftIcon class="h-7 w-7" />
                </div>
              </div>
              <div class="testimonials-button-next">
                <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
                  <ArrowRightIcon class="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="me-0 lg:mx-auto">
          <div class="relative z-10">
            <div class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block"></div>
            <img :src="marketingImg11" class="mx-auto rounded-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import marketingImg11 from '@/assets/images/landing/marketing/img-11.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-vue-next'
import { testimonialData } from '@/utilities/common'
import TestimonialCard1 from '@/components/widgets/TestimonialCard1.vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
</script>
