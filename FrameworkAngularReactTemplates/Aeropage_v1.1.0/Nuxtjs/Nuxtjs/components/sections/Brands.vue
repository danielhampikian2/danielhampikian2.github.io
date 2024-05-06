<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <p v-if="title" class="text-base font-medium text-center text-default-950 mb-10">
        {{ title }}
      </p>
      <Swiper
        :modules="[Thumbs, FreeMode, Autoplay]"
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false
        }"
        :breakpoints="{
          400: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }"
      >
        <SwiperSlide v-for="(brand, idx) in brandData" :key="idx">
          <img :src="brand.image" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import type { BrandType } from '@/types/landing'
import type { PropType } from 'vue'

defineProps({
  title: {
    type: String
  },
  brandData: {
    type: Array as PropType<BrandType[]>,
    required: true
  }
})
</script>
