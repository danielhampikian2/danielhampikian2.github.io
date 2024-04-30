<template>
  <section
    id="home"
    class="bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
  >
    <div class="grid xl:grid-cols-5 grid-cols-1 gap-6 items-end">
      <div class="xl:col-span-3">
        <Swiper
          class="swiper-hero"
          :modules="[Navigation, Thumbs, FreeMode]"
          :loop="false"
          :slides-Per-View="1"
          @swiper="setThumbsSwiper"
          :watch-slides-progress="true"
          effect="fade"
          :speed="1000"
        >
          <SwiperSlide
            class="relative"
            v-for="(feature, idx) in featureData"
            :key="`creative-featureImg-${idx + 1}`"
          >
            <img :src="feature.image" alt="" class="h-full w-full" />
            <div class="absolute inset-0 bg-black/40"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="relative xl:col-span-2 p-6 xl:p-0">
        <Swiper
          class="swiper-hero relative me-10"
          :modules="[Navigation, Thumbs, FreeMode, Autoplay, Navigation]"
          :thumbs="{ swiper: thumbsSwiper }"
          :navigation="{
            prevEl: '.cre-button-prev',
            nextEl: '.cre-button-next'
          }"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :slides-Per-View="1"
          :watch-slides-progress="true"
          effect="fade"
          :speed="1000"
        >
          <SwiperSlide v-for="(feature, idx) in featureData" :key="`creative-feature-${idx + 1}`">
            <div class="flex-col flex items-start justify-end xl:h-full pb-28">
              <h2 class="text-4xl font-semibold text-default-950 mt-6 max-w-2xl">
                {{ feature.title }}
              </h2>
              <p class="w-3/4 text-base font-medium mt-5">{{ feature.description }}</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="absolute inset-x-0 bottom-8 z-10">
          <div class="flex items-center justify-end gap-5 relative pe-10">
            <div class="cre-button-prev">
              <div
                class="h-14 w-14 rounded-full border border-default-300 bg-default-50 hover:bg-primary flex items-center justify-center"
              >
                <ArrowLeftIcon class="h-7 w-7 stroke-default-950"></ArrowLeftIcon>
              </div>
            </div>
            <div class="cre-button-next">
              <div
                class="h-14 w-14 rounded-full border border-default-300 bg-default-50 hover:bg-primary flex items-center justify-center"
              >
                <ArrowRightIcon class="h-7 w-7 stroke-default-950"></ArrowRightIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { type FeatureType } from '@/types/landing'
import type { Swiper as SwiperType } from 'swiper/types'
import { ref } from 'vue'

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next'

import creativeImg1 from '@/assets/images/landing/creative/img-1.jpg'
import creativeImg2 from '@/assets/images/landing/creative/img-2.jpg'
import creativeImg3 from '@/assets/images/landing/creative/img-3.jpg'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}

const featureData: FeatureType[] = [
  {
    image: creativeImg2,
    title: 'Crafting Vision into Reality: Design Agency at Your Service',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
  },
  {
    image: creativeImg3,
    title: 'Innovative Design Solutions: Unleashing Creativity for You',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
  },
  {
    image: creativeImg1,
    title: 'Design Excellence Redefined: Elevate Your Brand with Our Agency',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
  }
]
</script>
