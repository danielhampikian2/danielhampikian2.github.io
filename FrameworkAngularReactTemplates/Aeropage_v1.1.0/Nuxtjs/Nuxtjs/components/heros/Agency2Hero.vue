<template>
  <section
    id="home"
    class="py-40 bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
  >
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <div class="max-w-lg text-center lg:text-start">
            <h2 class="lg:text-6xl/tight sm:text-5xl text-4xl font-medium text-default-950">
              Better design for your digital products.
            </h2>
            <p class="text-base my-6">
              We are a creative studio specializing in UI/UX design, <br />
              development and strategy.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 border border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-300"
              >Get Solution
              <ArrowUpRightIcon class="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <img :src="agency2Hero" class="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import agency2Hero from '@/assets/images/landing/agency-2/hero.png'
import { ArrowUpRightIcon } from 'lucide-vue-next'
</script>
