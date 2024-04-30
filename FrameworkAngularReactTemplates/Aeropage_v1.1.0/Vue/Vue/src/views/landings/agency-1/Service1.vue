<template>
  <section id="services" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Services</span
          >
          <h2 class="text-4xl font-medium capitalize text-default-950 my-4">Our Services</h2>
          <p class="text-base">Lorem ipsum dummy text are usually use print and website industry.</p>
        </div>
      </div>

      <div
        class="grid lg:grid-cols-3 grid-cols-1 items-center rounded-md overflow-hidden bg-default-100 dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200"
      >
        <ServiceCard1 v-for="(service, idx) in serviceData1" :service="service" :key="service.title" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard1 from '@/components/widgets/ServiceCard1.vue'
import { serviceData1 } from '@/utilities/common'
</script>
