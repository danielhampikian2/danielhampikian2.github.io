<template>
  <section class="relative -mt-40 md:-mt-32 py-10">
    <div class="container">
      <div class="max-w-6xl mx-auto rounded-xl shadow bg-gradient-to-t from-default-50 via-default-100 to-default-200">
        <div class="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-default-300">
          <ServiceCard2 v-for="(service, idx) in serviceData" :key="service.title" :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard2 from '@/components/widgets/ServiceCard2.vue'
import { BookCopyIcon, CookingPotIcon, GlassWaterIcon } from 'lucide-vue-next'
import type { ServiceType } from '@/types/landing'

const serviceData: ServiceType[] = [
  {
    icon: CookingPotIcon,
    title: 'Nutritious Meals',
    description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
  },
  {
    icon: GlassWaterIcon,
    title: 'Pure Drinking Water',
    description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
  },
  {
    icon: BookCopyIcon,
    title: 'Quality Education',
    description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
  },
]
</script>
