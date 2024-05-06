<template>
  <section id="service" class="lg:py-20 py-10">
    <div class="container">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
        <div>
          <div class="flex items-end justify-between mb-10">
            <div class="max-w-lg lg:text-start mx-auto xl:ms-0 text-center">
              <span
                class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
                >Services</span
              >
              <p class="text-lg text-default-950 mt-5">
                We help you to go online and increase your conversion rate Better design for your
                digital products.
              </p>
            </div>
          </div>

          <div>
            <div class="max-w-md mx-auto xl:ms-0 border border-default-200 rounded-md">
              <div class="divide-y divide-default-200">
                <div
                  v-for="(service, idx) in serviceData"
                  :key="service.title"
                  class="p-6 flex items-center justify-between"
                >
                  <h3 class="text-2xl font-medium text-default-950">{{ service.title }}</h3>
                  <div
                    class="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 border border-default-200 text-default-950 hover:text-white bg-white/5 hover:bg-primary"
                  >
                    <ChevronRightIcon class="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex flex-col gap-y-6">
          <img :src="agency2_4" class="rounded-xl h-full w-full" alt="" />
          <div class="md:absolute top-auto xl:-start-28 md:start-10 md:bottom-10">
            <div class="max-w-sm p-6 bg-default-100 dark:bg-default-50 rounded-lg group">
              <h3 class="text-2xl font-medium text-default-950 mb-3">Development</h3>
              <p class="text-base mb-5">
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum,
                egestas nec, vestibulum et, malesuada adipiscing, dui.
              </p>
              <a href="javascript:void(0);" class="text-lg font-medium text-default-950"
                >Read More
                <MoveRightIcon
                  class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRightIcon, MoveRightIcon } from 'lucide-vue-next'
import agency2_4 from 'assets/images/landing/agency-2/img-4.jpg'
import type { ServiceType } from '~/types/landing'

const serviceData: ServiceType[] = [
  {
    title: 'Graphic Design'
  },
  {
    title: 'Web Design'
  },
  {
    title: 'Digital Marketing'
  },
  {
    title: 'UI/UX Design'
  }
]
</script>
