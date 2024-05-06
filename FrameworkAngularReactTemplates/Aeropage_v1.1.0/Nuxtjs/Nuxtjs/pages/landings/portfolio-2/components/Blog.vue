<template>
  <section id="blog" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Blog</span
          >
          <h2 class="mt-4 text-4xl font-medium capitalize text-default-950">
            Tools for Advancement
          </h2>
          <p class="mt-4 text-base">
            Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan
            nisi mauris ac eros.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <BlogCard10 v-for="(blog, idx) in blogData" :key="idx" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portfolio2Img5 from '@/assets/images/landing/portfolio-2/img-5.jpg'
import portfolio2Img6 from '@/assets/images/landing/portfolio-2/img-6.jpg'
import portfolio2Img7 from '@/assets/images/landing/portfolio-2/img-7.jpg'
import BlogCard10 from '@/components/widgets/BlogCard10.vue'
import type { BlogType } from '@/types/landing'

const categories: string[] = ['Branding']

const blogData: BlogType[] = [
  {
    image: portfolio2Img7,
    publish: {
      date: 10,
      month: 'October',
      year: 2023
    },
    category: categories[0],
    title: 'Six Hands-On Exercises for Mastering UI/UX Design.'
  },
  {
    image: portfolio2Img5,
    publish: {
      date: 16,
      month: 'June',
      year: 2023
    },
    category: categories[0],
    title: 'Designing a Photoshop Environment'
  },
  {
    image: portfolio2Img6,
    publish: {
      date: 25,
      month: 'May',
      year: 2023
    },
    category: categories[0],
    title: 'The Essentials of Conversion-Oriented Design'
  }
]
</script>
