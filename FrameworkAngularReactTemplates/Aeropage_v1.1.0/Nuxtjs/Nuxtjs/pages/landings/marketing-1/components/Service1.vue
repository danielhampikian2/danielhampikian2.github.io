<template>
  <section id="features" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Services</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
            We want to bring business & the digital world together.
          </h2>
        </div>
      </div>

      <div class="grid items-center gap-6 lg:grid-cols-2">
        <div>
          <div
            class="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200"
          >
            <ServiceCard5
              v-for="(service, idx) in serviceData"
              :key="idx"
              :service="service"
              :class="{ 'border-y': idx % 2 != 0 }"
            />
          </div>
        </div>

        <div>
          <img :src="marketingImg4" class="mx-auto" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import marketingImg4 from '@/assets/images/landing/marketing/img-4.jpg'

import ServiceCard5 from '@/components/widgets/ServiceCard5.vue'

import type { ServiceType } from '@/types/landing'
import { BoxesIcon, LayersIcon, MonitorIcon } from 'lucide-vue-next'

const serviceData: ServiceType[] = [
  {
    icon: LayersIcon,
    title: 'Product Design',
    description: 'Lorem ipsum dummy text are used in this design'
  },
  {
    icon: MonitorIcon,
    title: 'Marketing Strategy',
    description: 'Nullam dictum felis eu pede mollis pretium.'
  },
  {
    icon: BoxesIcon,
    title: 'E-Commerce',
    description: 'Maecenas malesuada. Praesent congue erat at massa.'
  }
]
</script>
