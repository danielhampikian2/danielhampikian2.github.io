<template>
  <div class="overflow-hidden rounded-xl border border-default-200">
    <img :src="blog.image" alt="" />
    <div class="p-4">
      <div class="flex items-center gap-6">
        <div v-if="blog.publish" class="flex items-center gap-2">
          <CalendarDaysIcon class="h-5 w-5 text-default-950" />
          <p class="text-base text-default-950">
            {{ blog.publish.month }} {{ blog.publish.date }}, {{ blog.publish.year }}
          </p>
        </div>
        <p class="text-base text-default-950">{{ blog.category }}</p>
      </div>
      <a href="#">
        <h2 class="mt-3 text-2xl font-medium text-default-950">
          {{ blog.title }}
        </h2>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDaysIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { BlogType } from '@/types/landing'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
