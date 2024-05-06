<template>
  <section id="faq" class="bg-white py-10 dark:bg-default-50 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our FAQ</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
            Frequently Asked Questions ?
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div class="relative mb-20 lg:mb-0">
          <div class="relative">
            <img :src="marketingImg9" class="mx-auto" alt="" />
          </div>
          <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
            <img :src="marketingImg10" class="h-full" alt="" />
          </div>
        </div>

        <div class="lg:pb-20">
          <div class="hs-accordion-group space-y-4">
            <div
              v-for="(faq, idx) in faqData"
              :key="faq.question"
              class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
              :class="{ active: idx == 0 }"
              :id="`faq-${idx}`"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                :aria-controls="`faq-accordion-${idx}`"
              >
                <h5 class="flex text-base font-medium">
                  {{ faq.question }}
                </h5>
                <ChevronUpIcon
                  class="h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180"
                />
              </button>
              <div
                :id="`faq-accordion-${idx}`"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                :class="{ hidden: idx != 0 }"
                :aria-labelledby="`faq-${idx}`"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import marketingImg9 from '@/assets/images/landing/marketing/img-9.jpg'
import marketingImg10 from '@/assets/images/landing/marketing/img-10.jpg'

import { faqData } from '@/utilities/common'
import { ChevronUpIcon } from 'lucide-vue-next'
</script>
