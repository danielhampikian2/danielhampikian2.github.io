<template>
  <div class="mx-auto max-w-4xl text-center">
    <div v-if="testimonial.author" class="p-6">
      <img :src="testimonial.author.image" class="mx-auto h-14 w-14 rounded-full" alt="" />
      <h3 class="mt-5 text-xl font-medium text-default-950">
        {{ testimonial.author.name }}
      </h3>
      <p class="text-base">{{ testimonial.author.address }}</p>

      <p class="mt-4 md:text-2xl">"{{ testimonial.comment }}"</p>
      <div class="mt-4 flex items-center justify-center gap-2">
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
