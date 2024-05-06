<template>
  <div class="p-6 rounded-md bg-default-50">
    <div v-if="testimonial.author" class="flex items-center gap-5">
      <img
        :src="testimonial.author.image"
        class="h-14 w-14 rounded-full border-4 border-white/20"
        alt=""
      />
      <h3 class="text-lg font-medium text-default-950">{{ testimonial.author.name }}</h3>
    </div>
    <p class="text-base text-default-700 mt-4">{{ testimonial.comment }}</p>
    <div class="flex items-center gap-2 mt-4">
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
