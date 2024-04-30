<template>
  <div
    class="border-e border-y border-s-4 border-default-200 relative z-10 h-full rounded-xl bg-white p-6 dark:bg-default-50"
  >
    <div v-if="testimonial.author" class="flex items-center gap-3">
      <div class="rounded-full border p-1">
        <img :src="testimonial.author.image" class="h-12 w-12 rounded-full" alt="" />
      </div>
      <div>
        <h3 class="text-xl font-medium text-default-950">
          {{ testimonial.author.name }}
        </h3>
        <p class="mt-1 text-sm">{{ testimonial.author.expertise }}</p>
      </div>
    </div>

    <p class="mt-4 max-w-xs text-base">
      {{ testimonial.comment }}
    </p>

    <div class="mt-3 flex items-center gap-1">
      <StarIcon
        v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-5 w-5 stroke-yellow-300 fill-yellow-300"
      ></StarIcon>

      <StarIcon
        v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-5 w-5 stroke-yellow-300"
      ></StarIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { TestimonialType } from '@/types/landing'
import { StarIcon } from 'lucide-vue-next'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
