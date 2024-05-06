<template>
  <div class="pt-3" :class="customClass">
    <div v-if="testimonial.author" class="flex items-center gap-6">
      <div>
        <img :src="testimonial.author.image" class="h-14 rounded-full" alt="" />
      </div>
      <div>
        <h3 class="text-2xl font-medium text-default-950">{{ testimonial.author.name }}</h3>
        <p class="text-base mt-2">{{ testimonial.author.expertise }}</p>
      </div>
    </div>
    <p class="text-base mt-5">"{{ testimonial.comment }}"</p>
    <div class="flex items-center gap-2 mt-5">
      <StarIcon
        v-for="(star, idx) in Array.from(new Array(Math.floor(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-5 w-5 stroke-yellow-400 fill-yellow-400"
      ></StarIcon>

      <StarIcon
        v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0)))"
        :key="idx"
        class="h-5 w-5 stroke-yellow-400"
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
  },
  customClass: {
    type: String
  }
})
</script>
