<template>
  <div class="bg-default-100 dark:bg-default-50">
    <div class="sm:p-10 p-8">
      <div v-if="testimonial.author" class="flex items-center gap-5 mb-6">
        <img :src="testimonial.author.image" class="h-14 rounded-full" alt="" />
        <div>
          <a href="#">
            <h4 class="text-xl font-medium text-default-950">{{ testimonial.author.name }}</h4>
          </a>
          <p class="text-base">{{ testimonial.author.expertise }}</p>
        </div>
      </div>
      <p class="text-base text-default-900">"{{ testimonial.comment }}"</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { TestimonialType } from '@/types/landing'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
