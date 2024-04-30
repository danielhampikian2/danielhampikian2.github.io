<template>
  <div class="border border-default-200 rounded-lg overflow-hidden">
    <div class="flex flex-col">
      <div class="">
        <img :src="blog.image" class="max-w-full h-full" alt="" />
      </div>

      <div class="group p-6">
        <h3 class="text-xl font-medium text-default-950 mb-4">{{ blog.title }}</h3>
        <p class="text-base mb-5 mt-3">{{ blog.description }}</p>
        <a href="javascript:void(0);" class="text-default-950 text-lg font-medium"
          >Read More
          <MoveRightIcon
            class="group-hover:opacity-100 opacity-0 text-primary w-5 h-5 inline-block transition-all duration-400 group-hover:translate-x-2 will-change-transform"
          />
        </a>
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
  }
})
</script>
