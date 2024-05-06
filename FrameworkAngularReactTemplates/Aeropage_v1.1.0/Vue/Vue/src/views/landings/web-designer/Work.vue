<template>
  <section id="work" class="py-20">
    <div class="container">
      <div class="mb-10">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <h2 class="text-4xl font-medium text-default-950">Works</h2>

          <div class="filters-group-wrap text-center">
            <div class="filters-group">
              <div class="filter-options flex list-none flex-wrap justify-center gap-4">
                <router-link to="" :class="selectedCategory === 'all' ? 'active' : ''" @click="filterImages('all')"> All </router-link>
                <router-link to="" :class="selectedCategory === 'web-design' ? 'active' : ''" @click="filterImages('web-design')"
                  >Web Design
                </router-link>
                <router-link to="" :class="selectedCategory === 'graphic-design' ? 'active' : ''" @click="filterImages('graphic-design')"
                  >Graphic Design
                </router-link>
                <router-link to="" :class="selectedCategory === 'illustrator' ? 'active' : ''" @click="filterImages('illustrator')"
                  >Illustrator
                </router-link>
                <router-link to="" :class="selectedCategory === 'photography' ? 'active' : ''" @click="filterImages('photography')"
                  >Photography
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="gallery-wrapper" class="flex items-center flex-wrap">
        <div v-for="(item, idx) in work" :key="idx" class="picture-item w-full p-3 xl:w-1/2">
          <div class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3 w-full">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                :src="item.image"
                alt=""
                loading="lazy"
                :width="640"
                :height="805"
              />
              <div class="absolute inset-0">
                <div class="h-full w-full rounded bg-black/60">
                  <div class="flex h-full items-end p-4">
                    <div class="overflow-hidden">
                      <p class="mb-2 font-medium text-white">{{ item.date }}</p>
                      <h5 class="mb-2 text-3xl font-medium text-white">
                        {{ item.title }}
                      </h5>
                      <p class="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                        {{ item.description }}
                      </p>
                      <a href="javascript:void(0);" class="group text-lg font-medium text-white"
                        >Read More
                        <MoveRightIcon
                          class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                        />
                      </a>
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
import { MoveRightIcon } from 'lucide-vue-next'
import { ref } from 'vue'

import web2 from '@/assets/images/landing/web-designer/img-2.jpg'
import web3 from '@/assets/images/landing/web-designer/img-3.jpg'
import web4 from '@/assets/images/landing/web-designer/img-4.jpg'
import web5 from '@/assets/images/landing/web-designer/img-5.jpg'

import type { WorkType } from '@/types/landing'

const workData: WorkType[] = [
  {
    title: 'Medium Scene',
    date: '27 Aug 2021',
    category: 'web-design',
    description:
      'Explore a medium scene where creativity meets innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
    image: web2,
  },
  {
    title: 'The Emergence of Design',
    date: '27 Aug 2021',
    category: 'graphic-design',
    description: 'Proin elementum ipsum vel mauris pellentesque accumsan. Nulla in erat ligula, vivamus sed egestas elit, sit amet convallis metus.',
    image: web3,
  },
  {
    title: 'Amplitude',
    date: '27 Aug 2021',
    category: 'illustrator',
    description:
      'Aliquam tempus nunc nec rutrum malesuada. Proin pulvinar augue quis pharetra vulputate. Sed lacinia convallis orci vitae condimentum.',
    image: web4,
  },
  {
    title: 'Visual Enigma',
    date: '27 Aug 2021',
    category: 'photography',
    description:
      'Suspendisse scelerisque convallis nibh. Maecenas bibendum porta mattis. Donec quis nibh porta dolor ultrices bibendum vel quis leo.',
    image: web5,
  },
]

let work = ref<WorkType[]>(workData)
let selectedCategory = ref<string>('all')

const filterImages = (category: string) => {
  selectedCategory.value = category
  setTimeout(() => {
    work.value = category === 'all' ? workData : workData.filter((album) => album.category?.includes(category))
  }, 300)
}
</script>
