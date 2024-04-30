<template>
  <section class="py-20 bg-black bg-bottom bg-[url('../images/landing/charity/bg-2.png')]">
    <div class="container">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        <div v-for="(item, idx) in statData" :key="item.title" class="text-center">
          <h2 class="text-4xl font-medium text-white">{{ item.title }}</h2>
          <p class="text-base text-white/80 mt-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { StatType } from '~/types/landing'

const statData: StatType[] = [
  {
    title: '20 Billion',
    description: 'Raised to Date'
  },
  {
    title: '123',
    description: 'Countries Impacting'
  },
  {
    title: '30K+',
    description: 'Volunteers'
  },
  {
    title: '218',
    description: 'Successful Projects'
  }
]
</script>
