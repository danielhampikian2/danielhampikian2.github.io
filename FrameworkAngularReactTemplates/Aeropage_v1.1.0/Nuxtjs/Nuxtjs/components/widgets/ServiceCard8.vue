<template>
  <div :class="customClass">
    <div class="group relative cursor-pointer rounded-xl border border-default-200 p-6">
      <component :is="service.icon" class="h-10 w-10 text-default-950" />
      <h2 class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary">
        {{ service.title }}
      </h2>
      <p class="mt-3 text-base">
        {{ service.description }}
      </p>
      <div class="mt-5">
        <a
          href="javascript:void(0);"
          class="text-lg font-medium text-default-900 after:absolute after:inset-0"
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

import type { ServiceType } from '@/types/landing'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  },
  customClass: String
})
</script>
