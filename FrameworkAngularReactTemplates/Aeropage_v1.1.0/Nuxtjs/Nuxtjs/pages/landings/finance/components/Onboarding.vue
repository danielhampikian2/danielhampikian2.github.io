<template>
  <section id="onboarding" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <div class="max-w-2xl">
            <span
              class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
              >Smooth Onboarding</span
            >
            <h2 class="text-4xl font-medium text-default-950 mt-4">
              Effortless Integrations for a Quick Start
            </h2>
            <p class="text-base mt-5">
              Link Vault with your current financial technology stack to simplify data comprehension
              and decision-making.
            </p>
          </div>

          <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
            <div
              v-for="(brand, idx) in brandData"
              :key="idx"
              class="p-10 rounded-xl border border-default-200"
            >
              <img :src="brand.image" alt="" />
            </div>
          </div>
        </div>

        <div class="relative lg:mb-0">
          <div class="relative h-full">
            <img :src="financeImg6" class="mx-auto rounded-xl h-full" alt="" />
          </div>
          <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
            <img :src="financeImg7" class="h-full rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import financeImg6 from '@/assets/images/landing/finance/img-6.jpg'
import financeImg7 from '@/assets/images/landing/finance/img-7.png'

import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'
import brand6 from '@/assets/images/brand/6.png'

import type { BrandType } from '@/types/landing'

const brandData: BrandType[] = [
  {
    image: brand1
  },
  {
    image: brand2
  },
  {
    image: brand3
  },
  {
    image: brand4
  },
  {
    image: brand5
  },
  {
    image: brand6
  }
]
</script>
