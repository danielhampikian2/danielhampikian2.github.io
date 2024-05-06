<template>
  <section id="faq" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950"
            >Our FAQ</span
          >
          <h2 class="my-4 text-3xl font-medium capitalize text-default-950">Have Questions?</h2>
          <p class="text-base">
            Discover solutions to frequently asked questions about booking pet portrait sessions,
            event photography, wildlife destinations, and the use of commercial images.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-3xl">
        <div class="hs-accordion-group space-y-4">
          <div
            v-for="(faq, idx) in faqData"
            :key="faq.question"
            class="hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
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
              <PlusIcon
                class="h-6 w-6 transition-all duration-300 hs-accordion-active:-rotate-45"
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
import { PlusIcon } from 'lucide-vue-next'
</script>
