<template>
  <div class="p-6 border border-default-200 rounded-md">
    <div class="grid sm:grid-cols-5 gap-6">
      <div class="sm:col-span-3 group">
        <h3 class="font-medium text-default-950 mb-4 mt-3" :class="titleClass">{{ blog.title }}</h3>
        <p class="text-base font-medium text-default-800 mb-5 mt-3">{{ blog.description }}</p>
        <a href="javascript:void(0);" class="text-default-950 text-lg font-medium"
          >Read More
          <MoveRightIcon
            class="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
          ></MoveRightIcon>
        </a>
      </div>

      <div class="col-span-2">
        <img :src="blog.image" class="rounded-md my-auto h-full w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { BlogType } from '@/types/landing'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  },
  titleClass: {
    type: String,
    default: 'text-3xl'
  }
})
</script>
