<template>
  <section id="service" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Services</span
          >
          <p class="text-lg text-default-800 font-medium mt-5">
            We help you to go online and increase your conversion rate Better design for your digital products.
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div class="relative overflow-hidden -z-10">
          <img :src="agencyImg10" class="rounded-md h-full w-full" alt="" />
          <div class="absolute inset-0 rounded-md bg-black/40"></div>
        </div>

        <div class="lg:-ms-20">
          <div class="divide-y divide-default-200 bg-default-50 rounded-md shadow">
            <div v-for="(service, idx) in serviceData" :key="service.title" class="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
              <div>
                <div class="h-12 w-12 rounded-md flex items-center justify-center text-xl border border-default-200 text-default-950 bg-white/5">
                  <span v-if="idx < 10">0</span>{{ idx + 1 }}
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-medium text-default-950">{{ service.title }}</h3>
                <p class="text-base mt-3">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import agencyImg10 from '@/assets/images/landing/agency/img-10.jpg'
import type { ServiceType } from '@/types/landing'
const serviceData: ServiceType[] = [
  {
    title: 'Graphic Design',
    description: 'Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio.',
  },
  {
    title: 'Web Design',
    description: 'Suspendisse enim turpis, dictum sed, iaculisa, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra.',
  },
  {
    title: 'Digital Marketing',
    description: 'Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.',
  },
]
</script>
