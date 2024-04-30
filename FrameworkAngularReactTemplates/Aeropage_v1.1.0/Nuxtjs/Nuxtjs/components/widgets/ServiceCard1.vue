<template>
  <div class="group" :class="customClass">
    <div class="sm:p-10 p-8">
      <span>
        <component :is="service?.icon" class="h-14 w-14 text-default-950" />
      </span>
      <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">{{ service.title }}</h2>
      <p class="text-base mb-6">{{ service.description }}</p>
      <a href="javascript:void(0);" class="text-default-950 text-lg"
        >Read More
        <MoveRightIcon
          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'

import type { PropType } from 'vue'
import type { ServiceType } from '@/types/landing'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  },
  customClass: String
})
</script>
