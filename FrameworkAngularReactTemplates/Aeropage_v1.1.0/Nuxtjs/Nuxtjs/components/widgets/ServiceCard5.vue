<template>
  <div class="group">
    <div class="flex flex-wrap items-center gap-6 p-6">
      <div>
        <component :is="service.icon" class="h-14 w-14 text-default-950"></component>
      </div>
      <div>
        <h2 class="mb-4 text-2xl font-medium text-default-950">
          {{ service.title }}
        </h2>
        <p class="mb-6 text-base">
          {{ service.description }}
        </p>
        <a href="javascript:void(0);" class="text-lg text-default-950"
          >Read More
          <MoveRightIcon
            class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
          ></MoveRightIcon>
        </a>
      </div>
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
  }
})
</script>
