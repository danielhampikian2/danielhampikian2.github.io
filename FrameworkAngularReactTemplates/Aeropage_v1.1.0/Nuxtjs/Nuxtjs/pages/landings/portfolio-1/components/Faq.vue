<template>
  <section id="faq" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our FAQ</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
            Find Your Answers Here
          </h2>
          <p class="text-base">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
            adipiscing sem neque sed ipsum.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-3xl">
        <div class="hs-accordion-group space-y-4">
          <div
            v-for="(faq, idx) in faqData"
            :key="faq.question"
            class="hs-accordion overflow-hidden rounded-lg border border-primary/20 hs-accordion-active:bg-primary/10"
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
  </section>
</template>

<script setup lang="ts">
import { faqData } from '@/utilities/common'
import { ChevronUpIcon } from 'lucide-vue-next'
</script>
