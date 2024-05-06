<template>
  <section id="home" class="bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-1.svg')]">
    <div class="grid xl:grid-cols-5 grid-cols-1 items-center relative">
      <div class="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
        <div class="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
          <div class="p-6">
            <Swiper
              class="relative"
              :modules="[Navigation, Thumbs, FreeMode, Autoplay]"
              :thumbs="{ swiper: thumbsSwiper }"
              :loop="true"
              :autoplay="{ delay: 3000 }"
              :slides-Per-View="1"
            >
              <SwiperSlide v-for="(feature, idx) in featureData" :key="`agency-feature-${idx + 1}`">
                <div class="flex-col flex items-start justify-end xl:h-full">
                  <span class="text-base font-medium uppercase tracking-wider text-default-800">{{ feature.tag }}</span>
                  <h2 class="md:text-4xl/snug text-3xl font-semibold text-default-950 mt-6">{{ feature.title }}</h2>
                  <p class="md:w-3/4 text-base mt-5 mb-7">{{ feature.description }}</p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
                    >Get Solution
                    <ArrowUpRightIcon class="h-6 w-6" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="xl:col-span-3 order-1 xl:order-none">
        <Swiper
          class="mySwiper"
          :modules="[Navigation, Thumbs, FreeMode, EffectFade]"
          :loop="false"
          :slides-Per-View="1"
          @swiper="setThumbsSwiper"
          :watch-slides-progress="true"
          effect="fade"
          :speed="1000"
        >
          <SwiperSlide class="relative" v-for="(feature, idx) in featureData" :key="`agency-featureImg-${idx + 1}`">
            <img :src="feature.image" alt="" class="h-full w-full" />
            <div class="absolute inset-0 bg-black/25"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import agencyImg1 from '@/assets/images/landing/agency/img-1.jpg'
import agencyImg2 from '@/assets/images/landing/agency/img-2.jpg'
import agencyImg3 from '@/assets/images/landing/agency/img-3.jpg'

import { ArrowUpRightIcon } from 'lucide-vue-next'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Thumbs, Navigation, Autoplay, EffectFade } from 'swiper/modules'

import type { Swiper as SwiperType } from 'swiper/types'
import { ref } from 'vue'
import type { FeatureType } from '@/types/landing'

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}

const featureData: FeatureType[] = [
  {
    image: agencyImg1,
    title: 'Beyond a Design Agency',
    description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
    tag: 'Digital agency',
  },
  {
    image: agencyImg2,
    title: 'Beyond a Design Agency',
    description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
    tag: 'Digital agency',
  },
  {
    image: agencyImg3,
    title: 'Beyond a Design Agency',
    description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
    tag: 'Digital agency',
  },
]
</script>
