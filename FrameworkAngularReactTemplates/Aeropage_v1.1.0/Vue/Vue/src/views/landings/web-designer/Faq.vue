<template>
  <section id="faq" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our FAQ</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">Commonly Asked Questions</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div>
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
                <h5 class="text-base font-medium flex">
                  {{ faq.question }}
                </h5>
                <ChevronUpIcon class="h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180" />
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

        <div class="relative">
          <div class="relative">
            <img :src="webDesignerImg7" class="mx-auto rounded-xl" alt="" />
          </div>
          <div class="absolute inset-x-0 hidden lg:-bottom-14 lg:block">
            <img :src="webDesignerImg6" class="h-full rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import webDesignerImg6 from '@/assets/images/landing/web-designer/img-6.jpg'
import webDesignerImg7 from '@/assets/images/landing/web-designer/img-7.jpg'
import { faqData } from '@/utilities/common'
import { ChevronUpIcon } from 'lucide-vue-next'
</script>
