<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Accolades</span
          >
          <h2 class="mt-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
            Accolades & Acknowledgments
          </h2>
          <p class="mt-4 text-base">
            Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis
            quis, molestie non, velit.
          </p>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <a v-for="(item, idx) in accoladeData.slice(0, 3)" :key="idx" href="#" class="group">
              <div class="flex items-center justify-between p-5">
                <div>
                  <h2 class="text-2xl font-medium text-default-950">
                    {{ item.title }}
                  </h2>
                  <p class="mt-1 text-base">{{ item.description }}</p>
                </div>
                <div>
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full border border-default-200 text-default-950 transition-all duration-500 group-hover:border-transparent group-hover:bg-black group-hover:text-white"
                  >
                    <ArrowUpRightIcon class="h-6 w-6" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a
              v-for="(item, idx) in accoladeData.slice(3, accoladeData.length)"
              :key="idx"
              href="#"
              class="group"
            >
              <div class="flex items-center justify-between p-5">
                <div>
                  <h2 class="text-2xl font-medium text-default-950">
                    {{ item.title }}
                  </h2>
                  <p class="mt-1 text-base">{{ item.description }}</p>
                </div>
                <div>
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full border border-default-200 text-default-950 transition-all duration-500 group-hover:border-transparent group-hover:bg-black group-hover:text-white"
                  >
                    <ArrowUpRightIcon class="h-6 w-6" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'

const accoladeData = [
  {
    title: 'Awwwards Site of the Day',
    description: 'For Exhibition in 2023'
  },
  {
    title: 'coderthemes.com',
    description: 'Interview 2023'
  },
  {
    title: 'CSS Awardssa',
    description: 'Featured in 2023'
  },
  {
    title: 'Muzli',
    description: 'Featured in 2023'
  },
  {
    title: 'Awwwards',
    description: 'Awarded to Muteza in 2023'
  },
  {
    title: 'Chapters Studio',
    description: 'On Display in 2023'
  }
]
</script>
