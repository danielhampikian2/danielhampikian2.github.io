<template>
  <section class="relative h-full py-16 lg:py-32">
    <div class="container">
      <div
        class="absolute inset-0 bg-[url(../images/landing/marketing-2/img-8.jpg)] bg-cover bg-center bg-repeat"
      >
        <div class="absolute inset-0 h-full w-full bg-black/50"></div>
      </div>

      <div class="relative">
        <div class="grid items-center gap-6 sm:grid-cols-3">
          <div class="sm:col-span-2">
            <div class="rounded-md p-6">
              <h2 class="text-center text-4xl font-medium text-white">
                Achieving Success in Three Simple Investment Steps
              </h2>

              <div class="mt-10 grid grid-cols-1 gap-6">
                <div
                  v-for="(step, idx) in stepData"
                  :key="idx"
                  class="rounded-md bg-white/60 p-6 backdrop-blur-xl dark:bg-black/60"
                >
                  <div class="flex flex-wrap items-center gap-6 md:flex-nowrap">
                    <div>
                      <component :is="step.icon" class="h-12 w-12 stroke-primary" />
                    </div>
                    <div>
                      <h2 class="text-2xl font-medium text-default-950">
                        {{ step.title }}
                      </h2>
                      <p class="mt-3 text-base text-default-950">
                        {{ step.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-full">
            <div class="flex h-full items-center justify-center">
              <button
                class="relative flex h-20 w-20 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-white ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                data-hs-overlay="#watchvideomodal"
              >
                <PlayIcon class="h-7 w-7 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Watch Video Modal Start -->
  <div
    id="watchvideomodal"
    class="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden h-full w-full overflow-y-auto overflow-x-hidden"
  >
    <div
      class="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl"
    >
      <div class="pointer-events-auto flex w-full flex-col overflow-x-hidden rounded-xl">
        <iframe
          class="w-full"
          height="400"
          src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon, NetworkIcon, PlayIcon, SendIcon } from 'lucide-vue-next'
import type { StepType } from '@/types/landing'

const stepData: StepType[] = [
  {
    icon: MapPinIcon,
    title: 'Crafting Your Path Forward',
    description:
      'Businesses purchase products in substantial quantities for distribution to consumers.'
  },
  {
    icon: SendIcon,
    title: 'Executing Your Strategy',
    description: 'Consumers acquire products in smaller volumes suited for personal use.'
  },
  {
    icon: NetworkIcon,
    title: 'Enhancing Through Empowerment',
    description:
      'The market for businesses to target is relatively smaller compared to direct consumers.'
  }
]
</script>
