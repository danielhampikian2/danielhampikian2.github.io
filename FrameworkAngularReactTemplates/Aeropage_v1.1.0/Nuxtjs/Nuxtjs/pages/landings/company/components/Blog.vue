<template>
  <section id="blog" class="py-10 lg:py-20">
    <div class="container">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <span
          class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
          >Our Blog</span
        >
        <h2 class="md:text-4xl text-3xl font-medium text-default-950 mt-3">News and Knowledge</h2>
        <p class="text-base mt-5">
          Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis.
          Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.
        </p>
      </div>

      <div class="relative">
        <Swiper
          class="relative"
          :modules="[Thumbs, FreeMode, Navigation]"
          :loop="true"
          :navigation="{
            nextEl: '.button-next',
            prevEl: '.button-prev'
          }"
          :pagination="{
            clickable: !0,
            el: '.swiper-pagination'
          }"
          :breakpoints="{
            440: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }"
        >
          <SwiperSlide v-for="(blog, idx) in blogData" :key="blog.title">
            <div class="max-w-4xl mx-auto text-center">
              <div class="mb-5">
                <img :src="blog.image" class="rounded-lg" alt="" />
              </div>
              <a href="#" class="text-xl font-medium text-default-950">{{ blog.title }}</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import companyImg5 from '@/assets/images/landing/company/img-5.jpg'
import companyImg6 from '@/assets/images/landing/company/img-6.jpg'
import companyImg7 from '@/assets/images/landing/company/img-7.jpg'
import companyImg8 from '@/assets/images/landing/company/img-8.jpg'
import companyImg9 from '@/assets/images/landing/company/img-9.jpg'
import companyImg10 from '@/assets/images/landing/company/img-10.jpg'
import type { BlogType } from '@/types/landing'

const blogData: BlogType[] = [
  {
    image: companyImg5,
    title: '10 Easy Habits to Enhance Your Daily Progress by 1%'
  },
  {
    image: companyImg6,
    title: '5 Mind-Blowing Applications of ArtificialIntelligence'
  },
  {
    image: companyImg7,
    title: 'This Highly Anticipated Technology CouldFinally Transform the World'
  },
  {
    image: companyImg8,
    title: 'Design Thinking: Crafting a Design System for an Established Product'
  },
  {
    image: companyImg9,
    title: 'If You Possess Self-Discipline, BeginCultivating These 4 Habits Now'
  },
  {
    image: companyImg10,
    title: 'This Highly Anticipated Technology CouldFinally Transform the World'
  }
]
</script>
