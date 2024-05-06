<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Features
          </span>
          <h2 class="mt-4 text-3xl font-medium capitalize text-default-950 md:text-4xl/tight">
            Features
          </h2>
          <p class="mt-4 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, idx) in featureData"
            :key="idx"
            class="rounded-lg border border-primary/20 bg-white p-6 text-center dark:bg-default-50"
          >
            <h2 class="text-xl font-medium text-default-950">
              {{ feature.title }}
            </h2>
            <p class="mt-4 text-base">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FeatureType } from '@/types/landing'

const featureData: FeatureType[] = [
  {
    title: 'Drive Sales Growth',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore.'
  },
  {
    title: 'Fuel Expansion',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore.'
  },
  {
    title: 'Focused Audience',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore.'
  }
]
</script>
