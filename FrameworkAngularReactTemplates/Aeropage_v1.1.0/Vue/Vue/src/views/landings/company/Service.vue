<template>
  <section id="services" class="py-10 lg:py-20">
    <div class="container">
      <div class="max-w-xl mx-auto text-center mb-12">
        <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
          >Our Services</span
        >
        <h2 class="md:text-4xl text-3xl font-medium text-default-950 mt-3">Comprehensive Plan</h2>
      </div>

      <div class="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <ServiceCard3 v-for="(service, idx) in serviceData" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceType } from '@/types/landing'
import { CodesandboxIcon, DatabaseIcon, TruckIcon } from 'lucide-vue-next'
import ServiceCard3 from '@/components/widgets/ServiceCard3.vue'

const serviceData: ServiceType[] = [
  {
    icon: TruckIcon,
    title: 'Fuel Delivery',
    description: 'Efficiently delivers diverse fuels (gasoline, diesel, propane, etc.) promptly to residential, commercial, or industrial sites.',
  },
  {
    icon: DatabaseIcon,
    title: 'Fuel Storage Solutions',
    description: 'Supplying secure fuel storage solutions with tanks or containers, ensuring adherence to safety standards and regulations.',
  },
  {
    icon: CodesandboxIcon,
    title: 'Equipment Maintenances',
    description: 'Providing maintenance for fuel-related equipment like pumps, tanks, and generators to ensure safety compliance and functionality.',
  },
]
</script>
