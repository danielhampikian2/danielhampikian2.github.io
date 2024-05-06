<template>
  <section class="relative xl:py-0 lg:py-20 py-10">
    <div class="container">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-12 items-center relative">
        <div class="mx-auto">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Since From</span
          >
          <h1 class="md:text-5xl/tight text-4xl font-medium text-default-950 max-w-lg my-4">Keep pushing forward. We've got your back.</h1>
          <p class="max-w-md md:text-lg">Thing go wrong have questions. We've understand. So we have people</p>

          <div class="flex flex-wrap items-center gap-16 mt-10">
            <div class="flex items-center gap-6">
              <h2 class="text-5xl font-medium text-default-950">10k</h2>
              <p class="text-base">Happy Users <br />Around World</p>
            </div>

            <div class="flex items-center gap-6">
              <h2 class="text-5xl font-medium text-default-950">120k</h2>
              <p class="text-base">Projects <br />Already Done</p>
            </div>
          </div>
        </div>

        <div class="mx-auto h-[600px] overflow-hidden relative">
          <div class="marquee">
            <div class="relative gap-6 m-auto flex flex-col overflow-hidden">
              <div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                <TestimonialCard1 v-for="(testimonial, idx) in testimonialData" :key="idx" class="max-w-xl" :testimonial="testimonial" />
              </div>

              <div aria-hidden="true" class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                <TestimonialCard1 v-for="(testimonial, idx) in testimonialData" :key="idx" class="max-w-xl" :testimonial="testimonial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard1 from '@/components/widgets/TestimonialCard1.vue'
import { testimonialData } from '@/utilities/common'
</script>
