<template>
  <div>
    <div class="relative mx-auto w-full lg:w-full">
      <div class="group">
        <div
          class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
        >
          <div class="bg-white p-6 dark:bg-default-50">
            <h5 class="text-center text-2xl font-medium text-default-950">
              {{ plan.title }}
            </h5>
            <p class="mt-1 text-center text-xs uppercase tracking-widest text-default-950">
              {{ plan.planFor }}
            </p>
            <div class="mt-6 flex items-center gap-4 bg-default-100 p-5 text-default-950">
              <h2 class="text-5xl font-semibold"><sup class="text-xl">$</sup>{{ plan.price }}</h2>
              <div>
                <p class="text-lg">{{ plan.condition.title }}</p>
                <p class="text-xs">{{ plan.condition.description }}</p>
              </div>
            </div>

            <ul role="list" class="mt-3 text-sm text-default-700">
              <li v-for="(service, idx) in plan.services" class="flex items-center gap-2">
                <DotIcon class="inline-block h-9 w-9 text-primary" />
                <span class="text-base text-default-950">{{ service }}</span>
              </li>
            </ul>

            <div class="relative z-20 mx-auto mt-5 w-full lg:w-56">
              <div class="group">
                <div
                  class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent"
                >
                  <div class="relative z-10 flex h-4 items-center justify-center bg-primary p-6">
                    <a class="button bg-primary text-white" href="#">Get Started</a>
                  </div>
                </div>
                <div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DotIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'
import type { PricingType } from '@/types/landing'

defineProps({
  plan: {
    type: Object as PropType<PricingType>,
    required: true
  }
})
</script>
