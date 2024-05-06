<template>
  <section id="faq" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our FAQ</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">Commonly Asked Questions</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 items-center">
        <div>
          <div class="hs-accordion-group space-y-4">
            <div
              v-for="(faq, idx) in faqData"
              :key="faq.question"
              class="hs-accordion border border-default-200 rounded-lg overflow-hidden bg-white dark:bg-default-50"
              :class="{ active: idx == 0 }"
              :id="`faq-${idx}`"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all"
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
                  <p class="text-sm text-default-600">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative mb-20 lg:mb-0">
          <div class="relative">
            <img :src="companyImg4" class="mx-auto rounded-lg" alt="" />
          </div>
          <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
            <img :src="companyImg3" class="h-full rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import companyImg3 from '@/assets/images/landing/company/img-3.jpg'
import companyImg4 from '@/assets/images/landing/company/img-4.jpg'
import { ChevronUpIcon } from 'lucide-vue-next'
import { faqData } from '@/utilities/common'
</script>
