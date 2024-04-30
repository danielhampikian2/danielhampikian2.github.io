<template>
  <section id="about" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-14 max-w-xl text-center">
        <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Our About</span
        >
        <h2 class="mt-4 text-4xl/tight font-medium text-default-950">Top-Tier Online Marketing Firm Located in New York</h2>
        <p class="mt-5 text-base">
          Marketing encompasses the activities, institutions, and procedures aimed at generating, conveying, delivering, and exchanging valuable
          offerings for customers, partners, and society as a whole.
        </p>
      </div>

      <div class="rounded-xl border border-default-200">
        <div class="grid grid-cols-1 items-center divide-y divide-default-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <TestimonialCard7 v-for="(testimonial, idx) in testimonialData" :key="idx" :testimonial="testimonial" />
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <a
          href="#"
          class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
          >Read More
          <ArrowRightIcon class="h-6 w-6" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'
import type { AuthorType, TestimonialType } from '@/types/landing'
import TestimonialCard7 from '@/components/widgets/TestimonialCard7.vue'

const authorData: AuthorType[] = [
  {
    name: 'Trustpilot',
  },
]
const testimonialData: TestimonialType[] = [
  {
    comment: 'Extremely impressed with the service and the outcomes!',
    rating: 5,
    author: authorData[0],
  },
  {
    comment: 'Outstanding service for precision-targeted lead generation.',
    rating: 4,
    author: authorData[0],
  },
  {
    comment: `I've thoroughly enjoyed my collaboration with Resonance.`,
    rating: 5,
    author: authorData[0],
  },
]
</script>
