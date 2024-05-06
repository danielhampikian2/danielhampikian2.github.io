<template>
  <div class="p-8 text-center">
    <h5 class="text-xl font-medium text-default-950">"{{ testimonial.comment }}"</h5>
    <p v-if="testimonial.author" class="mt-4 text-lg text-default-950">
      Rated {{ testimonial.rating }} on {{ testimonial.author.name }}
    </p>

    <div class="mt-5 flex items-center justify-center gap-1">
      <StarIcon
        v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-6 w-6 stroke-yellow-300 fill-yellow-300"
      ></StarIcon>

      <StarIcon
        v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-6 w-6 stroke-yellow-300"
      ></StarIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { TestimonialType } from '@/types/landing'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
