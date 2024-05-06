<template>
  <div class="border border-default-200 rounded-lg overflow-hidden group">
    <div class="relative group overflow-hidden">
      <div class="overflow-hidden">
        <img
          :src="blog.image"
          class="h-full w-full scale-[1.2] group-hover:scale-[1.05] transition-all duration-700"
          alt=""
        />
      </div>

      <div class="p-6">
        <h2 class="text-xl font-medium text-default-950 transition-all duration-700">
          {{ blog.title }}
        </h2>
        <p class="text-base my-4">{{ blog.description }}</p>
        <a
          href="javascript:void(0);"
          class="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
          >Read More
          <MoveRightIcon class="w-6 h-6 inline-block" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'

import type { PropType } from 'vue'

import type { BlogType } from '@/types/landing'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
