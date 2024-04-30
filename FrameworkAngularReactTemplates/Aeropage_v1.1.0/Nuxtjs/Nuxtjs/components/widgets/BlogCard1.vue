<template>
  <div class="rounded-lg border border-default-200 overflow-hidden">
    <div class="p-6 group">
      <div class="relative rounded-md overflow-hidden">
        <img :src="blog.image" class="rounded-md" alt="" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="flex gap-5 mt-6">
        <div v-if="blog.publish">
          <h2 class="text-3xl font-medium text-default-950">0{{ blog.publish.date }}</h2>
          <p class="text-lg uppercase text-default-800">{{ blog.publish.month }}</p>
        </div>
        <div>
          <h2 class="text-2xl font-medium text-default-950">{{ blog.title }}</h2>
          <p class="text-base mt-3 mb-5">{{ blog.description }}</p>
          <a href="javascript:void(0);" class="text-default-950 text-lg"
            >Read More
            <MoveRightIcon
              class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
            />
          </a>
        </div>
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
