<template>
  <section class="hidden md:block">
    <div class="container">
      <div class="my-6 rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="flex items-center justify-between p-6">
          <h4 class="text-lg font-medium text-default-900">{{ title }}</h4>
          <div class="flex items-center justify-end gap-3">
            <div class="flex items-center gap-2">
              <a
                href="#"
                class="text-base font-medium text-default-900 transition-all duration-200 hover:text-primary"
                >{{ subtitle }}</a
              >
            </div>

            <div class="flex items-center gap-2">
              <ChevronRightIcon class="h-5 w-5 text-default-900 rtl:rotate-180" />
              <a href="#" class="text-base font-medium text-default-900">{{ title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>
