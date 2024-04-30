<template>
  <div class="relative w-full lg:w-full">
    <div class="group">
      <div
        class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
      >
        <div class="bg-white p-6 dark:bg-default-50">
          <div class="grid gap-6 md:grid-cols-3">
            <div class="md:col-span-2">
              <h5 class="text-2xl font-medium text-default-950">
                {{ plan.title }}
              </h5>
              <p class="mt-2 text-xs uppercase tracking-widest text-default-950">
                {{ plan.planFor }}
              </p>

              <p class="w-3/4 py-5 text-base/7 font-medium text-default-600">
                {{ plan.description }}
              </p>
              <div class="flex items-center">
                <a
                  href="javascript:void(0);"
                  class="group inline-flex items-center text-lg font-semibold text-default-900"
                  >Learn more
                  <MoveRightIcon
                    class="h-4 w-4 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100"
                  ></MoveRightIcon>
                </a>
              </div>
            </div>

            <div>
              <div class="flex items-center gap-4 bg-default-100 p-5 text-default-950">
                <h2 class="text-5xl font-semibold"><sup class="text-xl">$</sup>{{ plan.price }}</h2>
                <div>
                  <p class="text-lg">{{ plan.condition.title }}</p>
                  <p class="text-xs">{{ plan.condition.description }}</p>
                </div>
              </div>

              <div class="relative z-20 mx-auto mt-5 w-full lg:w-56">
                <div class="group">
                  <div
                    class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent"
                  >
                    <div class="relative z-10 flex h-4 items-center justify-center bg-primary p-6">
                      <a class="button bg-primary text-white" href="#"> Get Started </a>
                    </div>
                  </div>
                  <div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { PricingType } from '@/types/landing'
import { MoveRightIcon } from 'lucide-vue-next'

defineProps({
  plan: {
    type: Object as PropType<PricingType>,
    required: true
  }
})
</script>
