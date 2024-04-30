<template>
  <section id="testimonial" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Testimonials</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
            Client Success Stories
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center lg:grid-cols-2">
        <div class="me-0 lg:mx-auto">
          <div class="relative z-10">
            <div
              class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block"
            ></div>
            <img :src="marketing2Img9" class="mx-auto rounded-full" alt="" />
          </div>
        </div>

        <div class="relative">
          <Swiper
            class="relative rounded-md"
            :modules="[Thumbs, FreeMode, Navigation]"
            :loop="true"
            :navigation="{
              nextEl: '.testimonials-button-next',
              prevEl: '.testimonials-button-prev'
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination'
            }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonialData" :key="idx">
              <div class="pb-10 sm:p-10">
                <TestimonialCard4 :testimonial="testimonial" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="absolute -bottom-8 z-10 sm:start-10">
            <div class="relative flex items-center justify-end gap-5 pe-10">
              <div class="testimonials-button-prev">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
                >
                  <MoveLeftIcon class="h-6 w-6 stroke-default-950" />
                </div>
              </div>
              <div class="testimonials-button-next">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
                >
                  <MoveRightIcon class="h-6 w-6 stroke-default-950" />
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
import marketing2Img9 from '@/assets/images/landing/marketing-2/img-9.png'
import { MoveRightIcon, MoveLeftIcon } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { testimonialData } from '@/utilities/common'
import TestimonialCard4 from '@/components/widgets/TestimonialCard4.vue'
</script>
