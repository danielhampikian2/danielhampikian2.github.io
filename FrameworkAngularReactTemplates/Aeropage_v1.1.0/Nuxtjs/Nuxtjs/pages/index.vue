<template>
  <LandingNavbar />

  <LandingHero />

  <section v-for="(item, idx) in demoPages" :id="item.id" :key="item.id" class="py-20">
    <div class="mx-20">
      <div class="mx-auto text-center mb-14">
        <span
          class="inline-flex text-base border-x-2 border-x-primary-600 text-primary-700 font-semibold px-2 rounded-lg bg-primary/20 mb-2"
          >{{ item.tag }}</span
        >
        <h2 class="text-3xl font-semibold text-default-950 mb-2.5">{{ item.title }}</h2>
        <p v-if="item.description" class="text-base text-default-900">
          {{ item.description }}
        </p>
      </div>

      <template v-if="item.pages">
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-content-center">
          <nuxt-link v-for="(page, idx) in item.pages" :to="page.path" :key="idx">
            <div
              class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
            >
              <div class="p-4">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    v-if="page.image.light"
                    alt="demo-img"
                    class="dark:hidden w-full rounded-lg border border-default-100"
                    :src="page.image.light"
                  />
                  <img
                    alt="demo-img"
                    class="hidden dark:block w-full rounded-lg border border-default-100"
                    :src="page.image.dark"
                  />
                  <div
                    class="absolute inset-0 flex items-center justify-center h-full w-full bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100 cursor-pointer"
                  >
                    <div
                      class="py-1.5 ps-5 pe-2 inline-flex items-center justify-center font-semibold align-middle duration-500 text-base text-center bg-primary hover:bg-primary-600 text-white rounded-lg"
                    >
                      Live Preview
                      <span
                        class="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white border border-white text-primary ms-3"
                      >
                        <ExternalLinkIcon class="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
                <h5 class="mt-4 text-center text-lg font-medium capitalize text-default-900">
                  {{ page.title }}
                </h5>
              </div>
            </div>
          </nuxt-link>
        </div>
      </template>

      <template v-if="item.features">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div
            v-for="(feature, idx) in item.features"
            :key="feature.title"
            class="bg-white dark:bg-default-50 rounded-xl border border-default-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex flex-col justify-center items-center text-center gap-4">
                <div class="shrink">
                  <div
                    class="inline-flex items-center justify-center h-12 w-12 bg-primary-500/20 text-primary-600 rounded-md"
                  >
                    <img v-if="feature.image" :src="feature.image" alt="" class="h-6 w-6" />
                    <component v-if="feature.icon" :is="feature.icon" />
                  </div>
                </div>
                <div class="grow">
                  <h4 class="text-lg font-semibold text-default-950 mb-2">{{ feature.title }}</h4>
                  <p class="text-sm font-medium text-default-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-base text-center mt-6 font-medium text-primary-900">
          Empower Your Journey with Our Engaging Landing Demo.🔥
        </p>
      </template>
    </div>
  </section>

  <LandingFooter />

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import LandingNavbar from '@/layouts/partials/LandingNavbar.vue'
import LandingFooter from '@/layouts/partials/LandingFooter.vue'
import LandingHero from '@/components/heros/LandingHero.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { ExternalLinkIcon } from 'lucide-vue-next'
import { demoPages } from '@/utilities/landing'
</script>
