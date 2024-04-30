<template>
  <section
    class="bg-default-10 relative border-b border-default-100 bg-[url(../images/other/bg-lines-2.png)] py-6 dark:bg-default-50 dark:bg-[url(../images/other/bg-lines-2-dark.png)] sm:py-10 md:py-32"
    id="home"
  >
    <div class="px-6 sm:px-10 md:px-20">
      <div class="grid items-center gap-x-6 gap-y-10">
        <div class="mb-10 mt-12 flex flex-col items-center justify-center">
          <div class="text-center">
            <div class="flex items-center justify-center gap-4 mb-4">
              <span class="h-10">
                <img :src="logo" alt="images" class="max-w-full h-full" />
              </span>
              <span
                class="inline-block rounded-md bg-primary/10 px-4 text-base/loose font-semibold text-primary"
                >v1.0.0</span
              >
            </div>
            <h1 class="mb-6 text-3xl font-semibold capitalize text-default-950 sm:text-5xl/tight">
              <span class="text-primary">AeroPage</span> - One Page Template
            </h1>
            <p class="mx-auto max-w-3xl text-base text-default-700">
              The Make your website or web application perfect starting point for your next project
              and the ultimate resource for learning how experts build real websites with Tailwind
              CSS.
            </p>
          </div>

          <div class="my-16 text-center">
            <p class="text-default-900 text-xl font-medium">Technology stack</p>
            <div class="inline-flex flex-wrap items-center justify-center gap-3 mt-4">
              <div
                v-for="(tool, idx) in developmentTools"
                :key="tool.name"
                class="hs-tooltip inline-block [--trigger:hover] [--placement:top]"
              >
                <div
                  class="hs-tooltip-toggle w-14 h-14 flex justify-center items-center rounded-lg bg-default-100"
                >
                  <img :src="tool.image" alt="" class="w-8 h-8" />
                </div>
                <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative px-3 py-1 rounded bg-default-950 text-default-200 font-semibold z-50 hidden"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  {{ tool.name }}
                  <div
                    class="bg-default-950 w-2.5 h-2.5 rotate-45 absolute -bottom-1 start-1/2 -translate-x-1/2 -z-10 rounded-[1px]"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              class="inline-flex items-center justify-center px-6 py-2 font-semibold backdrop-blur-2xl bg-primary text-white rounded-lg transition-all duration-500 hover:bg-primary-600"
            >
              Landing Demos
              <EyeIcon class="h-5 w-5 ms-3" />
            </a>
            <a
              href="#admin_demo"
              class="inline-flex items-center justify-center px-6 py-2 font-semibold backdrop-blur-2xl bg-primary/20 text-primary rounded-lg transition-all duration-500 hover:bg-primary hover:text-white"
            >
              Admin Demos
              <AirplayIcon class="h-5 w-5 ms-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo-sm.png'
import { developmentTools } from '@/utilities/landing'
import { EyeIcon, AirplayIcon } from 'lucide-vue-next'
</script>
