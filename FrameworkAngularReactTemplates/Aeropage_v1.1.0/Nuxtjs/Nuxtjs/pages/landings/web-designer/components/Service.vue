<template>
  <section id="services" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-12 max-w-xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Our Services</span
        >
        <h2 class="mt-3 text-3xl font-medium text-default-950 md:text-4xl">In-Depth Strategy</h2>
        <p class="mt-5 text-base">
          Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a
          purus blandit viverra.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        <ServiceCard9
          v-for="(service, idx) in serviceData"
          :key="idx"
          :card-number="idx + 1"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceType } from '@/types/landing'
import ServiceCard9 from '@/components/widgets/ServiceCard9.vue'

const serviceData: ServiceType[] = [
  {
    title: 'Business Consultancy',
    description:
      'Massa est senectus sapien ultrices volutpat. Fermentum, posuere risus proin integer. Adipiscing elit.'
  },
  {
    title: 'Web Design',
    description:
      'Suspendisse consectetur elit, purus quis id sem quam quisque. Eget tortor tortor leo faucibus.'
  },
  {
    title: 'Production',
    description:
      'Tempor dolor eros luctus at sagittis ut egestas tristique. Non massa ut accumsan, ornare.'
  }
]
</script>
