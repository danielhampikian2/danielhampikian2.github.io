<template>
  <section id="faq" class="py-20">
    <div class="container">
      <div class="mx-auto mb-12 max-w-xl text-center">
        <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
          Frequently Asked Questions ?
        </h2>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="hs-accordion-group space-y-4">
          <div v-for="(faq, idx) in faqData" class="relative z-20 w-full lg:w-full">
            <div
              class="hs-accordion overflow-hidden border border-default-200 bg-white transition-all duration-500 hs-accordion-active:-translate-y-2 hs-accordion-active:translate-x-2 dark:bg-default-50"
              :class="{ active: idx == 0 }"
              :id="`faq-${idx}`"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                :aria-controls="`faq-accordion-${idx}`"
              >
                <h5 class="text-xl font-medium">
                  {{ faq.question }}
                </h5>
                <ChevronUpIcon
                  class="h-6 w-6 stroke-default-950 transition-all duration-500 hs-accordion-active:-rotate-180"
                />
              </button>
              <div
                :id="`faq-accordion-${idx}`"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                :class="{ hidden: idx != 0 }"
                :aria-labelledby="`faq-${idx}`"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-base">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>

            <div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqData } from '@/utilities/common'
import { ChevronUpIcon, HelpCircleIcon } from 'lucide-vue-next'
</script>
