<template>
  <section id="features" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid items-center gap-6 md:grid-cols-2">
        <div>
          <img :src="hostingImg5" alt="" />
        </div>

        <div>
          <span class="text-sm uppercase text-default-950">Trusted security</span>
          <h2 class="my-5 text-3xl font-medium text-default-950 md:text-4xl">
            Reliable security right from the start.
          </h2>
          <p class="mb-5 text-base text-default-950">
            Lorem ipsum originated from the scrambled, Latin text of Cicero's 1st-century BC work,
            De Finibus, and has since become ubiquitous lorem ipsum.
          </p>
          <a href="#" class="group relative inline-flex items-center gap-2 text-xl text-primary">
            <span
              class="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full"
            ></span>
            Discover more by clicking here
            <MoveRightIcon class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="grid items-center gap-6 md:grid-cols-2">
        <div>
          <span class="text-sm uppercase text-default-950">Site transfer</span>
          <h2 class="my-5 text-3xl font-medium text-default-950 md:text-4xl">
            Seamless migration with lightning speed and zero downtime.
          </h2>
          <p class="mb-5 text-base text-default-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" class="group relative inline-flex items-center gap-2 text-xl text-primary">
            <span
              class="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full"
            ></span>
            Discover more by clicking here
            <MoveRightIcon class="h-5 w-5" />
          </a>
        </div>

        <div>
          <img :src="hostingImg3" class="h-96" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import hostingImg3 from '@/assets/images/landing/hosting/3.svg'
import hostingImg5 from '@/assets/images/landing/hosting/5.svg'
import { MoveRightIcon } from 'lucide-vue-next'
</script>
