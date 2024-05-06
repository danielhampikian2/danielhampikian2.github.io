<template>
  <section id="testimonials" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div class="me-0 lg:mx-auto">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Testimonials</span
          >
          <h2 class="my-5 text-4xl font-medium capitalize text-default-950">
            We're trusted by leading companies.
          </h2>
          <p class="text-base">
            A static website stores a unique file for every page of a static website. Each time that
            page is requested, the same content is returned.
          </p>
          <div class="mt-10 flex items-center gap-10">
            <div class="text-center">
              <h2 class="text-4xl font-medium text-default-950">5,000+</h2>
              <p class="mt-2 text-base">Customer Reviews</p>
            </div>

            <div class="text-center">
              <h2 class="text-4xl font-medium text-default-950">99.9%</h2>
              <p class="mt-2 text-base">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <div>
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
                <TestimonialCard4
                  :testimonial="testimonial"
                  custom-class="rounded-xl border border-default-200 p-6 pt-6"
                />
              </SwiperSlide>
            </Swiper>

            <div class="absolute -bottom-14 start-0 z-10">
              <div class="relative flex w-full items-center justify-end gap-5">
                <div class="testimonials-button-prev">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-100 text-default-900 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <MoveLeftIcon class="h-6 w-6" />
                  </div>
                </div>
                <div class="testimonials-button-next">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-100 text-default-900 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <MoveRightIcon class="h-6 w-6" />
                  </div>
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
import { MoveLeftIcon, MoveRightIcon } from 'lucide-vue-next'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import TestimonialCard4 from '@/components/widgets/TestimonialCard4.vue'
import { testimonialData } from '@/utilities/common'
</script>
