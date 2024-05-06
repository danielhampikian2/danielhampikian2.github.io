<template>
  <div class="rounded-md border border-default-200 bg-white dark:bg-default-50">
    <div class="p-5">
      <div class="">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-default-600">{{ stat.title }}</span>
          <span :class="stat.growth > 0 ? 'text-teal-500' : 'text-red-500'">
            <TrendingUpIcon v-if="stat.growth > 0" class="me-1 inline h-4 w-4" />
            <TrendingDownIcon v-else class="me-1 inline h-4 w-4" />
            {{ stat.growth }}%
          </span>
        </div>
        <div class="flex items-end justify-between gap-4">
          <h3 class="text-3xl font-medium text-default-800 flex">
            <span class="inline-block">{{ stat.prefix }}</span> {{ stat.numeric }}
            <span class="inline-block">{{ stat.postfix }}</span>
          </h3>
          <template v-if="stat.chart">
            <apexchart
              :type="stat.chart?.type!"
              :height="stat.chart?.height"
              :width="stat.chart?.width"
              :series="stat.chart?.series!"
              :options="stat.chart?.options"
              class="apex-charts"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StatType } from '@/types/admin'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import Apexchart from 'vue3-apexcharts'

defineProps({
  stat: {
    type: Object as PropType<StatType>,
    required: true
  }
})
</script>
