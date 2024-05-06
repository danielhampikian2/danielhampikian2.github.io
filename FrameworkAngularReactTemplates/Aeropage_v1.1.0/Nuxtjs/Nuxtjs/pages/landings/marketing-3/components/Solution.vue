<template>
  <section id="solutions" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-14 max-w-xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Business Solutions</span
        >
        <h2 class="mt-4 text-4xl/tight font-medium text-default-950">Our Offered Services</h2>
        <p class="mt-5 text-base">
          Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a
          personalized layout that precisely aligns with your requirements.
        </p>
      </div>

      <!-- Start marq -->
      <div class="relative m-auto flex gap-8 overflow-hidden">
        <div class="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8">
          <div v-for="(service, idx) in serviceData" :key="idx" class="w-60 h-full py-5">
            <div class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50 h-full">
              <div class="flex justify-center">
                <component :is="service.icon" class="h-10 w-10 text-primary" />
              </div>
              <h4 class="mt-5 text-lg font-medium text-default-950">
                {{ service.title }}
              </h4>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
        >
          <div v-for="(service, idx) in serviceData" :key="idx" class="w-60 py-5 h-full">
            <div class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50 h-full">
              <div class="flex justify-center">
                <component :is="service.icon" class="h-10 w-10 text-primary" />
              </div>
              <h4 class="mt-5 text-lg font-medium text-default-950">
                {{ service.title }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceType } from '@/types/landing'
import {
  ClipboardCheckIcon,
  ClipboardSignatureIcon,
  Contact2Icon,
  FolderKanbanIcon,
  ImageIcon,
  NewspaperIcon,
  StoreIcon
} from 'lucide-vue-next'

const serviceData: ServiceType[] = [
  {
    icon: FolderKanbanIcon,
    title: 'Social Media Marketing'
  },
  {
    icon: ClipboardSignatureIcon,
    title: 'E-commerce Solutions'
  },
  {
    icon: StoreIcon,
    title: 'Pay-Per-Click Advertising'
  },
  {
    icon: Contact2Icon,
    title: 'Branding Strategy'
  },
  {
    icon: ImageIcon,
    title: 'Marketing Copy writing'
  },
  {
    icon: NewspaperIcon,
    title: 'Search Engine Optimization'
  }
]
</script>
