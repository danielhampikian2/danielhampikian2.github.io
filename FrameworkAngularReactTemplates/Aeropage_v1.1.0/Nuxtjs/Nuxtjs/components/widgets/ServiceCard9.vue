<template>
  <div>
    <div
      class="flex flex-wrap gap-5 rounded-lg border border-default-200 bg-white p-6 shadow dark:bg-default-50 md:flex-nowrap"
    >
      <div>
        <div
          class="flex h-10 w-10 items-center justify-center rounded-md bg-default-900 text-xl text-default-50"
        >
          {{ cardNumber }}
        </div>
      </div>
      <div>
        <h3 class="mb-4 text-xl font-medium text-default-950 md:text-2xl">
          {{ service.title }}
        </h3>
        <p class="mb-4 font-medium md:text-base">
          {{ service.description }}
        </p>
        <a href="javascript:void(0);" class="group text-lg font-medium text-default-950"
          >Read More
          <MoveRightIcon
            class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MoveRightIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { ServiceType } from '@/types/landing.js'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  },
  cardNumber: {
    type: Number,
    required: true
  }
})
</script>
