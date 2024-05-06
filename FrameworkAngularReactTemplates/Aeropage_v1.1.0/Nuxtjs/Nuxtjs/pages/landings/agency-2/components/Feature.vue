<template>
  <section id="features" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Features Services</span
          >
          <h2 class="text-4xl font-medium capitalize text-default-950 my-4">Features</h2>
        </div>
      </div>

      <div
        class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-default-200"
      >
        <ServiceCard1
          v-for="(service, idx) in serviceData1"
          :service="service"
          :key="service.title"
          :custom-class="idx == 0 ? 'border-default-200' : 'border-default-200 md:border-s'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard1 from '~/components/widgets/ServiceCard1.vue'
import { serviceData1 } from '~/utilities/common'
</script>
