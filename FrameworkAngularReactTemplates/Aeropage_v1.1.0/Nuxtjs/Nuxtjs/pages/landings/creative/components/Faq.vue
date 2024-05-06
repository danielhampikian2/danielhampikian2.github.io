<template>
  <section class="py-10 lg:py-20" id="faq">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our FAQ</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">
            Frequently Asked Questions ?
          </h2>
        </div>
      </div>

      <div class="relative">
        <div class="hidden lg:block">
          <div
            class="before:w-24 before:h-24 before:absolute before:-top-10 before:-start-10 before:bg-[url('../images/other/dot.svg')]"
          ></div>
          <div
            class="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-end-10 after:bg-[url('../images/other/dot.svg')]"
          ></div>
        </div>

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <div class="z-10 relative">
              <img
                src="@/assets/images/landing/creative/img-2.jpg"
                class="lg:h-72 h-full shadow rounded-md"
                alt=""
              />
            </div>
            <div class="-mt-28 xl:block hidden">
              <img
                src="@/assets/images/landing/creative/img-7.jpg"
                class="h-72 shadow rounded-md ms-auto"
                alt=""
              />
            </div>
          </div>

          <div>
            <div class="hs-accordion-group space-y-4">
              <div
                v-for="(faq, idx) in faqData"
                :key="faq.question"
                class="hs-accordion border border-default-200 bg-default-50 backdrop-blur-3xl rounded-lg overflow-hidden"
                :class="{ active: idx == 0 }"
                :id="`faq-${idx}`"
              >
                <button
                  class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all"
                  :aria-controls="`faq-accordion-${idx}`"
                >
                  <h5 class="text-base font-medium flex">
                    <HelpCircleIcon class="h-5 w-5 stroke-default-950 align-middle me-3" />
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HelpCircleIcon, ChevronUpIcon } from 'lucide-vue-next'
import { faqData } from '@/utilities/common'
</script>
