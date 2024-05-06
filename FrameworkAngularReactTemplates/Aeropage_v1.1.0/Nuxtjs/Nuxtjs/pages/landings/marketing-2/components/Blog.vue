<template>
  <section id="blog" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Our Bolg</span
        >
        <h2 class="mt-4 text-4xl/tight font-medium text-default-950">Explore Our Blog</h2>
        <p class="mt-5 text-lg">
          Discover top-notch marketing resources and stay updated with the latest news about our
          company.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <BlogCard8 v-for="(blog, idx) in blogData" :key="idx" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import marketing2Img5 from '@/assets/images/landing/marketing-2/img-5.jpg'
import marketing2Img11 from '@/assets/images/landing/marketing-2/img-11.jpg'
import marketing2Img12 from '@/assets/images/landing/marketing-2/img-12.jpg'
import type { BlogType } from '@/types/landing'
import BlogCard8 from '@/components/widgets/BlogCard8.vue'

const categories: string[] = ['Articles', 'Tutorials']

const blogData: BlogType[] = [
  {
    image: marketing2Img11,
    title: 'Steps in Content Marketing to Accelerate Business Growth',
    description:
      'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
    category: categories[0],
    publish: {
      date: 13,
      month: 'February',
      year: 2022
    }
  },
  {
    image: marketing2Img12,
    title: 'Effective Content Marketing Strategies for Business Expansion',
    description:
      'The micro-environment, where a firm has more control, usually encompasses employees, suppliers, and the media.',
    category: categories[1],
    publish: {
      date: 11,
      month: 'February',
      year: 2023
    }
  },
  {
    image: marketing2Img5,
    title: 'Mastering Content Propelling Business Towards Success',
    description:
      'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
    category: categories[0],
    publish: {
      date: 28,
      month: 'February',
      year: 2022
    }
  }
]
</script>
