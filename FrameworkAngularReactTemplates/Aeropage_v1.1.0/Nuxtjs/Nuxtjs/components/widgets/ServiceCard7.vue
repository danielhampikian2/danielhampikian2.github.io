<template>
  <div
    class="rounded-xl border border-default-200 p-6 text-center transition-all duration-500"
    :class="`hover:border-${variant}/20 hover:bg-${variant}/5`"
  >
    <div
      class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border"
      :class="`border-${variant}/40 bg-${variant}/20 text-${variant}`"
    >
      <component :is="service.icon" class="mx-auto h-10 w-10"></component>
    </div>

    <h2 class="mt-4 text-3xl font-medium text-default-950">
      {{ service.title }}
    </h2>
    <p class="mt-3 text-base">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { ServiceType } from '@/types/landing'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  },
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>
