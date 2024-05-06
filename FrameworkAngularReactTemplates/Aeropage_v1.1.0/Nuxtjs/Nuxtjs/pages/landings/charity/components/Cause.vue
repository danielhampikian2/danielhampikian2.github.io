<template>
  <section id="causes" class="py-10 lg:py-20">
    <div class="container">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <span
          class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
          >Highlighted Causes</span
        >
        <h2 class="text-4xl/snug font-medium text-default-950 mt-4">Small Contributions</h2>
        <p class="text-base font-medium mt-5">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          hymenaeos.
        </p>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <CauseCard v-for="(cause, idx) in causeData" :key="cause.title" :cause="cause" />
      </div>

      <div class="p-10 mt-10 lg:mt-20 rounded-xl bg-default-100 dark:bg-default-50">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 class="text-3xl font-medium text-default-950">
              Click the button to view all the causes.
            </h2>
          </div>
          <div>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 text-lg py-2 px-8 rounded-full text-white bg-primary hover:bg-primary-700 transition-all"
              >See all campaigns
              <ArrowUpRightIcon class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import charity3 from 'assets/images/landing/charity/img-3.jpg'
import charity6 from 'assets/images/landing/charity/img-6.jpg'
import charity7 from 'assets/images/landing/charity/img-7.jpg'

import type { BlogType } from '~/types/landing'

import { ArrowUpRightIcon } from 'lucide-vue-next'

import CauseCard from '~/components/widgets/CauseCard.vue'

const causeData: BlogType[] = [
  {
    image: charity6,
    title: 'Providing Education for Everyone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.'
  },
  {
    image: charity3,
    title: 'Feeding African Children',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.'
  },
  {
    image: charity7,
    title: 'Building a Brighter Future',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.'
  }
]
</script>
