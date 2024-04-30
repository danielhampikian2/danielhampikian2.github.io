<template>
  <section id="faq" class="bg-white py-10 dark:bg-default-50 lg:py-20">
    <div class="container">
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
                <ChevronUpIcon
                  class="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"
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

        <div>
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our FAQ</span
          >
          <h2 class="mt-5 text-4xl/tight font-medium text-default-950">
            Frequently Asked Questions ?
          </h2>
          <p class="mb-10 mt-5 text-base">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
            adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
            >Read More
            <MoveRightIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronUpIcon, HelpCircleIcon, MoveRightIcon } from 'lucide-vue-next'
import { faqData } from '@/utilities/common'
</script>
