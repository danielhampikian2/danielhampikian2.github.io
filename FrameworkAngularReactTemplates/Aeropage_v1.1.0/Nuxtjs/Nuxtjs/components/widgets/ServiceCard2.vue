<template>
  <div class="p-8">
    <component :is="service.icon" class="h-12 w-12 text-default-950" />
    <h2 class="text-xl font-medium text-default-950 mt-5">{{ service.title }}</h2>
    <p class="text-base mt-4">{{ service.description }}</p>
    <div class="group mt-5">
      <a href="javascript:void(0);" class="text-default-900 text-lg font-medium"
        >Read More
        <MoveRightIcon
          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
        ></MoveRightIcon>
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
  }
})
</script>
