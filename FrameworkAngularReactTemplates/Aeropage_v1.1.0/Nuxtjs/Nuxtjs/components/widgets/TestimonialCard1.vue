<template>
  <div class="rounded-md bg-default-100 p-6 dark:bg-default-50">
    <div v-if="testimonial.author" class="flex items-center gap-5">
      <img
        :src="testimonial.author.image"
        class="h-16 w-16 rounded-full border-4 border-default-200"
      />
      <h3 class="text-lg font-medium text-default-950">{{ testimonial.author.name }}</h3>
    </div>
    <p class="text-xl my-5 text-default-600">{{ testimonial.comment }}</p>
    <div class="flex items-center gap-1">
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
