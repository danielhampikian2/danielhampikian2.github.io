<template>
  <section id="testimonials" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Testimonials</span
          >
          <h2 class="my-4 text-3xl font-medium text-default-950 md:text-4xl">
            Client Testimonials
          </h2>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div>
        <div class="relative m-auto flex gap-8 overflow-hidden">
          <div class="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8">
            <TestimonialCard8
              v-for="(testimonial, idx) in testimonialData"
              :key="idx"
              :testimonial="testimonial"
            />
          </div>

          <div
            aria-hidden="true"
            class="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8"
          >
            <TestimonialCard8
              v-for="(testimonial, idx) in testimonialData"
              :key="idx"
              :testimonial="testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard8 from '@/components/widgets/TestimonialCard8.vue'
import { testimonialData } from '@/utilities/common'
</script>
