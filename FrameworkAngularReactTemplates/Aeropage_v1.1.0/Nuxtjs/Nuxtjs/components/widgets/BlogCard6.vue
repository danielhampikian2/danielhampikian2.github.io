<template>
  <div class="overflow-hidden rounded-md border border-default-200">
    <div class="group">
      <img :src="blog.image" alt="" />

      <div class="p-6">
        <h2 class="mb-5 text-lg font-medium text-default-950">
          {{ blog.title }}
        </h2>
        <a href="javascript:void(0);" class="text-lg font-medium text-default-900"
          >Read More
          <MoveRightIcon
            class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
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
