<template>
  <section id="benefits" class="py-10 lg:py-20">
    <div class="container">
      <div class="max-w-2xl mx-auto text-center">
        <span
          class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
          >Benefits</span
        >
        <h2 class="md:text-4xl/tight text-4xl font-medium text-default-950 my-5">
          Discover your next Benefits.
        </h2>
        <p class="text-base font-medium mb-10">
          Plus, enjoy the convenience of offline access to our ebooks, allowing you to read at your
          convenience, anytime, and anywhere.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
        <div class="space-y-6">
          <BenefitCard
            v-for="(benefit, idx) in benefitData.slice(0, 2)"
            :key="benefit.title"
            :benefit="benefit"
          />
        </div>

        <div class="drop-shadow-md bg-white rounded-xl">
          <img :src="ebookImg1" class="h-full w-full rounded-xl" alt="" />
        </div>

        <div class="space-y-6">
          <BenefitCard
            v-for="(benefit, idx) in benefitData.slice(2, benefitData.length)"
            :key="benefit.title"
            :benefit="benefit"
          />
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <a
          href="#"
          class="inline-flex items-center justify-center gap-2 text-base py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-500"
          >Read More
          <MoveRightIcon class="h-6 w-6"></MoveRightIcon>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ebookImg1 from '@/assets/images/landing/ebook/img-1.jpg'
import type { FeatureType } from '@/types/landing'
import {
  ClapperboardIcon,
  LayersIcon,
  ShieldIcon,
  UserCheck2Icon,
  MoveRightIcon
} from 'lucide-vue-next'
import BenefitCard from '@/components/widgets/BenefitCard.vue'

const benefitData: FeatureType[] = [
  {
    icon: ClapperboardIcon,
    title: 'Cost-Effective Option',
    description:
      'Ebooks typically come at a lower price point compared to printed books, making them accessible to a broader audience of readers.'
  },
  {
    icon: ShieldIcon,
    title: 'Eco-Conscious Choice',
    description:
      'Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and sustainable option compared to print books.'
  },
  {
    icon: LayersIcon,
    title: 'Enhanced Visibility',
    description:
      'Ebooks can be effortlessly searched and shared across the internet, readers and enabling readers to discover new books more readily.'
  },
  {
    icon: UserCheck2Icon,
    title: 'Enhanced Convenience',
    description:
      'Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overall reading experience.'
  }
]
</script>
