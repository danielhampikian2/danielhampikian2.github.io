<template>
  <div class="relative p-10">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div class="lg:col-span-3">
        <div v-if="news.author" class="flex items-center">
          <div class="mr-5">
            <div class="img h-14 w-14 overflow-hidden rounded-full">
              <img :src="news.author.image" class="h-full w-full" alt="" />
            </div>
          </div>
          <div>
            <span class="mb-5 text-sm font-medium">Posted by</span>
            <h6 class="text-xl font-medium text-default-950">
              {{ news.author.name }}
            </h6>
          </div>
        </div>
      </div>

      <div class="lg:col-span-6">
        <h5 class="mb-10 underline">
          <a href="#" class="text-xl font-medium text-default-950">{{ news.title }}</a>
        </h5>
        <div class="flex items-center gap-7">
          <a
            v-for="(tag, idx) in news.tags"
            :key="idx"
            href="#"
            class="text-sm uppercase tracking-widest text-default-950"
            >{{ tag }}</a
          >
        </div>
      </div>

      <div v-if="news.publish" class="flex items-center lg:col-span-3 lg:justify-end">
        <span class="text-base font-medium"
          >{{ news.publish.month }} {{ news.publish.date }}, {{ news.publish.year }}</span
        >
      </div>
    </div>

    <div
      class="background absolute left-0 top-0 h-full w-full bg-cover bg-top text-center opacity-0 hover:bg-bottom hover:opacity-100"
      :style="{
        backgroundImage: `url(${news.image})`,
        transition: 'opacity 0.4s, background-position 10s linear'
      }"
    >
      <div class="flex h-full items-center justify-center">
        <a
          href="#"
          class="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
        >
          Read More
          <MoveRightIcon class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { NewsType } from '@/types/landing'

defineProps({
  news: {
    type: Object as PropType<NewsType>,
    required: true
  }
})
</script>
