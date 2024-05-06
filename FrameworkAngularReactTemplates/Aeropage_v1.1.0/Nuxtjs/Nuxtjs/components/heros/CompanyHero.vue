<template>
  <section id="home" class="relative overflow-hidden lg:py-40 py-24 bg-primary/5">
    <div class="container">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 items-center mb-10">
        <div class="max-w-xl">
          <div class="inline-block pe-5 rounded-full border border-primary/20">
            <div class="flex items-center gap-2">
              <div class="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                <BellIcon class="h-4 w-4 text-default-950" />
              </div>
              <span class="md:text-sm text-xs font-medium text-default-950">Startup Business</span>
            </div>
          </div>
          <h1 class="md:text-4xl/tight text-4xl font-medium text-default-950 max-w-lg my-4">
            Empowering startups to fuel their business growth
          </h1>
          <p class="md:text-lg">
            Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet, velit <br />
            nibh arcu eu. Id sem varius malesuada tincidunt sodales.
          </p>

          <div class="inline-block">
            <a
              href="#"
              class="flex items-center justify-center gap-2 py-2 px-6 mt-6 rounded-md text-base font-medium text-white bg-primary transition-all duration-300 hover:bg-primary-700"
              >Get started now</a
            >
          </div>
        </div>

        <div class="">
          <img :src="companyHeroImg" alt="" />
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <StatCard1
          v-for="(stat, idx) in statData"
          :key="stat.title"
          :stat="stat"
          background-color="primary/5"
          border-color="primary/20"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import companyHeroImg from '@/assets/images/landing/company/hero-img.png'
import StatCard1 from '@/components/widgets/StatCard1.vue'
import type { StatType } from '@/types/landing'
import { AppWindow, BellIcon, HeadphonesIcon, SettingsIcon } from 'lucide-vue-next'

const statData: StatType[] = [
  {
    icon: SettingsIcon,
    title: 'Immediate Deployment',
    description: 'Et vero eos et accusamus et iusto odio dignissimos'
  },
  {
    icon: AppWindow,
    title: 'DOS Protection',
    description: 'But I need to clarify how this erroneous concept is'
  },
  {
    icon: HeadphonesIcon,
    title: 'Premium Support',
    description: 'we disapprove of those who uphold righteous indignation.'
  }
]
</script>
