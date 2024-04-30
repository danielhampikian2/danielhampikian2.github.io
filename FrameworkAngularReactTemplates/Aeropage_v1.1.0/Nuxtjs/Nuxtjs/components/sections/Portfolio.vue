<template>
  <section id="portfolio" class="pt-20 pb-10">
    <div class="flex items-end justify-between mb-10">
      <div class="max-w-2xl mx-auto text-center">
        <span
          class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
          >{{ tag }}</span
        >
        <h2 class="text-4xl font-medium capitalize text-default-950 my-4">{{ title }}</h2>
      </div>
    </div>

    <div>
      <Swiper
        class="rounded-md relative"
        :modules="[Thumbs, FreeMode]"
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
          }
        }"
      >
        <SwiperSlide v-for="(project, idx) in projectList" :key="project.image">
          <div class="relative group rounded-3xl overflow-hidden">
            <img :src="project.image" class="h-full w-full" alt="" />
            <div class="absolute inset-0 bg-black/60"></div>
            <div
              class="absolute inset-x-0 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700"
            >
              <div class="text-center">
                <h5 class="inline-block text-xl font-medium text-white bg-black py-1 px-3 mb-1">
                  {{ project.category }}
                </h5>
                <br />
                <h2 class="inline-block text-2xl font-medium text-white bg-black py-1 px-3">
                  {{ project.name }}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import type { ProjectType } from '@/types/landing'
import type { PropType } from 'vue'

defineProps({
  projectList: {
    type: Array as PropType<ProjectType[]>,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
