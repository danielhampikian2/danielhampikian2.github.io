<template>
  <div
    class="p-6 rounded-xl sm:text-start text-center border"
    :class="`border-${borderColor} bg-${backgroundColor}`"
  >
    <div
      class="flex sm:justify-start justify-center flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-0"
    >
      <div class="sm:pe-5">
        <component
          :is="stat.icon"
          class="h-10 w-10 text-default-950 mx-auto"
          :class="`text-${textColor}`"
        />
      </div>

      <div class="sm:ps-5 sm:border-s" :class="`border-${borderColor}`">
        <h2 class="text-xl font-medium" :class="`text-${textColor}`">{{ stat.title }}</h2>
        <p class="text-base mt-3">{{ stat.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StatType } from '@/types/landing'
import type { PropType } from 'vue'

defineProps({
  stat: {
    type: Object as PropType<StatType>,
    required: true
  },
  textColor: {
    type: String,
    default: 'default-950'
  },
  backgroundColor: {
    type: String,
    default: 'white'
  },
  borderColor: {
    type: String,
    default: 'white'
  }
})
</script>
