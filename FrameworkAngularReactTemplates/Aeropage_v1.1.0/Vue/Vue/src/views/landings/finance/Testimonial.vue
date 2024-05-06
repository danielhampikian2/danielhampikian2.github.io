<template>
  <section id="experts" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our Experts</span
          >
          <h2 class="text-4xl font-medium text-default-950 mt-4">You're the expert in business; we're the numbers experts.</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-px overflow-hidden rounded-xl">
        <TestimonialCard5 v-for="(testimonial, idx) in testimonialData.slice(0, 2)" :key="idx" :testimonial="testimonial" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard5 from '@/components/widgets/TestimonialCard5.vue'
import { testimonialData } from '@/utilities/common'
</script>
