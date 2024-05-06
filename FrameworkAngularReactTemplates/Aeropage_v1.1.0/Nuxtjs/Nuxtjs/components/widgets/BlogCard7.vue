<template>
  <div class="overflow-hidden">
    <div class="group relative overflow-hidden">
      <div class="overflow-hidden rounded-xl">
        <img
          :src="blog.image"
          class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
          alt=""
        />
      </div>
      <div class="mt-6 text-center">
        <h3
          class="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary"
        >
          {{ blog.title }}
        </h3>
        <p class="mt-4 text-base text-default-900">
          {{ blog.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { BlogType } from '@/types/landing'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
