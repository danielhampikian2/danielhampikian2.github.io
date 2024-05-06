<template>
  <section id="testimonial">
    <div class="container">
      <div class="bg-default-100 dark:bg-default-50">
        <div
          class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-20 dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
        >
          <div class="relative">
            <div class="mx-auto mb-12 max-w-2xl text-center">
              <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
                Explore the feedback from our clients.
              </h2>
            </div>
            <Swiper
              class="relative"
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
                <TestimonialCard6 :testimonial="testimonial" />
              </SwiperSlide>
            </Swiper>

            <div class="absolute start-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2">
              <div class="testimonials-button-prev">
                <div class="relative">
                  <span
                    class="absolute -start-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary"
                  ></span>
                  <MoveLeftIcon class="h-10 w-10 text-default-950" />
                </div>
              </div>
            </div>
            <div class="absolute end-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div class="testimonials-button-next">
                <div class="relative">
                  <span
                    class="absolute -end-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary"
                  ></span>
                  <MoveRightIcon class="h-10 w-10 text-default-950" />
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { MoveRightIcon, MoveLeftIcon } from 'lucide-vue-next'
import TestimonialCard6 from '@/components/widgets/TestimonialCard6.vue'
import { testimonialData } from '@/utilities/common'
</script>
