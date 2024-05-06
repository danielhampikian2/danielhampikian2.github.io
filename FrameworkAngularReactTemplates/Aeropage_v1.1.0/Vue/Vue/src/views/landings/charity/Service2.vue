<template>
  <section class="pb-10 lg:pb-20">
    <div class="relative">
      <Swiper
        class="relative"
        :modules="[Thumbs, FreeMode, Navigation, Pagination]"
        :loop="true"
        :navigation="{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
        }"
        :breakpoints="{
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
        }"
      >
        <SwiperSlide v-for="(service, idx) in serviceData" :key="idx">
          <div class="max-w-4xl mx-auto text-center">
            <div class="relative group">
              <div class="absolute inset-0 rounded-xl bg-black/60"></div>
              <img :src="service.image" class="rounded-xl" alt="" />

              <div class="absolute inset-0 rounded-md bg-white/20 m-6">
                <div class="flex items-center justify-center h-full">
                  <div class="text-default-950">
                    <div class="flex justify-center">
                      <BadgeDollarSignIcon class="h-12 w-12 text-white"></BadgeDollarSignIcon>
                    </div>
                    <h2 class="text-3xl text-white font-medium mt-5">{{ service.title }}</h2>
                    <p class="w-3/4 mx-auto text-base text-white/90 font-medium mt-4">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div class="swiper-pagination !static mt-6"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BadgeDollarSignIcon } from 'lucide-vue-next'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'

import type { ServiceType } from '@/types/landing'

import charity6 from '@/assets/images/landing/charity/img-6.jpg'
import charity9 from '@/assets/images/landing/charity/img-9.jpg'
import charity10 from '@/assets/images/landing/charity/img-10.jpg'
import charity11 from '@/assets/images/landing/charity/img-11.jpg'

const serviceData: ServiceType[] = [
  {
    image: charity6,
    title: 'Make a Contribution',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity9,
    title: 'Become a Volunteer',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity10,
    title: 'Fundraising',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity11,
    title: 'Make a Contribution',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity6,
    title: 'Make a Contribution',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity9,
    title: 'Become a Volunteer',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
  {
    image: charity10,
    title: 'Fundraising',
    description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
  },
]
</script>
