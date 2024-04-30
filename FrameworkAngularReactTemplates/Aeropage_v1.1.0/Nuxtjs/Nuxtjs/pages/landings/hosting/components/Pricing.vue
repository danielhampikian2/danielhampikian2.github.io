<template>
  <section id="pricing" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-12 max-w-xl text-center">
        <h2 class="text-3xl font-medium text-default-950 md:text-4xl">Our Pricing</h2>
      </div>

      <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-10">
        <PricingCard1 v-for="(plan, idx) in pricingData.slice(0, 3)" :key="idx" :plan="plan" />

        <div class="lg:col-span-3">
          <PricingCard2 :plan="pricingData[3]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DotIcon, MoveRightIcon } from 'lucide-vue-next'
import type { PricingType } from '@/types/landing'
import PricingCard1 from '@/components/widgets/PricingCard1.vue'
import PricingCard2 from '@/components/widgets/PricingCard2.vue'

const pricingData: PricingType[] = [
  {
    title: 'Shared',
    planFor: 'For individuals and teams',
    price: 8,
    condition: {
      title: 'Per editor,monthly',
      description: 'With Unlimited email'
    },
    services: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 10 users monthly'
    ]
  },
  {
    title: 'Wordpress',
    planFor: 'For individuals and teams',
    price: 12,
    condition: {
      title: 'For team,monthly',
      description: 'team With 8 users'
    },
    services: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 30 users monthly'
    ]
  },
  {
    title: 'VPS',
    planFor: 'For individuals and teams',
    price: 37,
    condition: {
      title: 'All users, monthly',
      description: 'for Unlimited users'
    },
    services: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 80 users monthly'
    ]
  },

  {
    title: 'Dedicated',
    planFor: 'For Businesses and large organisations',
    description:
      'For advanced security and more flexible controls,the Enterprise plan helps you extend your design processes enterprise-wide.',
    price: 79,
    condition: {
      title: 'All users, monthly',
      description: 'for Unlimited users'
    }
  }
]
</script>
