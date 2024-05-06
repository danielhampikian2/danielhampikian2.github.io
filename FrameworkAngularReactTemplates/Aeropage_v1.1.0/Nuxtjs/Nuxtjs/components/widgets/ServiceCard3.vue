<template>
  <div
    class="text-center rounded-lg"
    :class="`bg-${backgroundColor} dark:bg-${darkBackgroundColor}`"
  >
    <div class="p-6">
      <div class="flex justify-center">
        <component :is="service.icon" class="h-12 w-12" :class="`text-${textColor}`"></component>
      </div>
      <h3 class="md:text-2xl text-xl font-medium mb-4 mt-6" :class="`text-${textColor}`">
        {{ service.title }}
      </h3>
      <p class="md:text-base mb-4">{{ service.description }}</p>
      <a
        href="javascript:void(0);"
        class="inline-flex items-center gap-2 text-lg font-medium"
        :class="`text-${textColor}`"
        >Read more
        <MoveRightIcon class="h-5 w-5"></MoveRightIcon>
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
  textColor: {
    type: String,
    default: 'default-950'
  },
  backgroundColor: {
    type: String,
    default: 'default-100'
  },
  darkBackgroundColor: {
    type: String,
    default: 'default-50'
  }
})
</script>
