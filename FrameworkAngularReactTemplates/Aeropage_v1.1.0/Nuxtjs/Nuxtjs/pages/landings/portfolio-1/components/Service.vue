<template>
  <section id="services" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Services</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
            Services
          </h2>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard7
          v-for="(item, idx) in serviceData"
          :key="idx"
          :service="item.service"
          :variant="item.variant"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceType } from '@/types/landing'
import { AirplayIcon, CircleDollarSignIcon, MailIcon } from 'lucide-vue-next'
import ServiceCard7 from '@/components/widgets/ServiceCard7.vue'

interface NewServiceType {
  service: ServiceType
  variant?: string
}

const serviceData: NewServiceType[] = [
  {
    service: {
      icon: AirplayIcon,
      title: 'SEO Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    variant: 'sky-500'
  },
  {
    service: {
      icon: CircleDollarSignIcon,
      title: 'PPC Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    variant: 'pink-500'
  },
  {
    service: {
      icon: MailIcon,
      title: 'Email Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    variant: 'purple-500'
  }
]
</script>
