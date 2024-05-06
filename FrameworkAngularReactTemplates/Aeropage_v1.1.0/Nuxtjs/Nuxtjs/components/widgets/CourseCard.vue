<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden dark:bg-default-50">
    <div class="grid sm:grid-cols-5">
      <div v-if="course.author">
        <img :src="course.image" class="h-full w-full" alt="" />
      </div>

      <div class="sm:col-span-4 group p-6">
        <h3
          class="text-2xl font-medium text-default-950 hover:text-primary transition-all cursor-pointer"
        >
          {{ course.title }}
        </h3>
        <p v-if="course.author" class="text-base text-default-950 mt-3">{{ course.author.name }}</p>
        <div class="flex items-center justify-between mt-5">
          <p v-if="course.publish" class="text-base text-default-9500">
            {{ course.publish.month }} {{ course.publish.date }},{{ course.publish.year }}
          </p>
          <div class="flex items-center gap-4">
            <a href="#">
              <Clock10Icon class="h-5 w-5 hover:text-primary transition-all"></Clock10Icon>
            </a>
            <a href="#">
              <StarIcon class="h-5 w-5 hover:text-primary transition-all"></StarIcon>
            </a>
            <a href="#">
              <AirplayIcon class="h-5 w-5 hover:text-primary transition-all"></AirplayIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock10Icon, StarIcon, AirplayIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'
import type { CourseType } from '@/types/landing'

defineProps({
  course: {
    type: Object as PropType<CourseType>,
    required: true
  }
})
</script>
