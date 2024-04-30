<template>
  <section id="about" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >About</span
          >
          <h2 class="text-4xl font-medium capitalize text-default-950 my-4">About Us</h2>
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10">
        <div class="grid sm:grid-cols-2 gap-6 items-center">
          <div class="space-y-6">
            <div>
              <img :src="agencyImg3" alt="" class="max-w-full h-full rounded-lg" />
            </div>
            <div>
              <img :src="agencyImg4" alt="" class="max-w-full h-full rounded-lg" />
            </div>
          </div>
          <div>
            <img :src="agencyImg5" alt="" class="max-w-full h-full rounded-lg" />
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-medium text-default-950">The Best of Product Your Business</h2>
          <div class="flex justify-center gap-6 mt-10">
            <div>
              <ComponentIcon class="h-10 w-10 text-default-950" />
            </div>
            <div>
              <h2 class="text-xl font-medium text-default-950">High Standard</h2>
              <p class="text-base mt-4">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div class="flex justify-center gap-6 my-10">
            <div>
              <LayersIcon class="h-10 w-10 text-default-950" />
            </div>
            <div>
              <h2 class="text-xl font-medium text-default-950">Ease of Communication</h2>
              <p class="text-base mt-4">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all"
            >View All Our News
            <ArrowUpRightIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import agencyImg3 from '@/assets/images/landing/agency/img-3.jpg'
import agencyImg4 from '@/assets/images/landing/agency/img-4.jpg'
import agencyImg5 from '@/assets/images/landing/agency/img-5.jpg'

import { ComponentIcon, LayersIcon, ArrowUpRightIcon } from 'lucide-vue-next'
</script>
