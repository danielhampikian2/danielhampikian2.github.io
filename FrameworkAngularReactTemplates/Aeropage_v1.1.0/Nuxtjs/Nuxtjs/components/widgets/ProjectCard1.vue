<template>
  <div class="group relative">
    <img :src="project.image" class="h-full w-full rounded-xl" alt="" />

    <div
      class="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100"
    >
      <div class="p-6 text-center">
        <h2 class="text-3xl font-medium text-white">
          {{ project.name }}
        </h2>
        <p class="mt-2 text-base text-white">{{ project.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { ProjectType } from '@/types/landing'

defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true
  }
})
</script>
