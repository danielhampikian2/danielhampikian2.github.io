<template>
  <div class="overflow-hidden rounded-lg border border-default-200 p-6">
    <div class="group relative overflow-hidden">
      <div class="overflow-hidden rounded-md">
        <img
          :src="blog.image"
          class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
          alt=""
        />
      </div>
      <div class="mt-6 flex items-center gap-5">
        <div v-if="blog.publish" class="group flex items-center gap-3">
          <CalendarDaysIcon
            class="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary"
          />
          <p class="text-base text-default-950">
            {{ blog.publish.month }} {{ blog.publish.date }}, {{ blog.publish.year }}
          </p>
        </div>
        <div class="group flex items-center gap-3">
          <MessageSquareIcon
            class="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary"
          />
          <p class="text-base text-default-950">{{ blog.category }}</p>
        </div>
      </div>

      <h2
        class="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline"
      >
        {{ blog.title }}
      </h2>
      <p class="mt-4 text-base">
        {{ blog.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDaysIcon, MessageSquareIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'

import type { BlogType } from '@/types/landing'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
