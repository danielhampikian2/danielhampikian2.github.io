<template>
  <section id="testimonials" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Testimonials</span
          >
          <h2 class="text-4xl font-medium text-default-950 my-4">
            Genuine Success Stories from Delighted Customers
          </h2>
          <p class="text-base font-medium">
            Uncover a realm of opportunities within our extensive ebook collection.
          </p>
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-5 grid-cols-1 gap-6">
          <div class="col-span-2">
            <div class="w-full h-full">
              <img :src="ebookImg18" class="rounded-xl max-w-full h-full" alt="" />
            </div>
          </div>

          <div class="col-span-3 relative">
            <Swiper
              class="rounded-md relative"
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
                <TestimonialCard4 :testimonial="testimonial" />
              </SwiperSlide>
            </Swiper>

            <div class="hidden lg:block">
              <div class="absolute bottom-0 start-0 z-10">
                <div class="flex items-center justify-end gap-5 relative pe-10">
                  <div class="testimonials-button-prev">
                    <div
                      class="h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center"
                    >
                      <ChevronLeftIcon class="h-6 w-6 stroke-default-950" />
                    </div>
                  </div>
                  <div class="testimonials-button-next">
                    <div
                      class="h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center"
                    >
                      <ChevronRightIcon class="h-6 w-6 stroke-default-950" />
                    </div>
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
import ebookImg18 from '@/assets/images/landing/ebook/img-18.png'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { testimonialData } from '@/utilities/common'
import TestimonialCard4 from '@/components/widgets/TestimonialCard4.vue'
</script>
