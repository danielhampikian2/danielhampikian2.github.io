<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between gap-5">
        <div>
          <div class="mx-auto max-w-2xl">
            <h2 class="mb-4 text-4xl font-medium text-default-950">Our Latest Updates</h2>
            <p class="text-base">
              Stay informed about the most recent developments in the realm of animal photography.
            </p>
          </div>
        </div>
        <div>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 border border-default-200 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
            >View All</a
          >
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <BlogCard9 v-for="(blog, idx) in blogData" :key="idx" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import photography2 from '@/assets/images/landing/photography/img-2.jpg'
import photography12 from '@/assets/images/landing/photography/img-12.jpg'
import photography10 from '@/assets/images/landing/photography/img-10.jpg'

import BlogCard9 from '@/components/widgets/BlogCard9.vue'
import type { BlogType } from '@/types/landing'

const categories: string[] = ['Strategies', 'Video']

const blogData: BlogType[] = [
  {
    image: photography2,
    category: categories[0],
    title: 'Insights and strategies for breathtaking shots',
    description:
      'Unlock the true potential wildlife photography with our expert insights and techniques.'
  },
  {
    image: photography12,
    category: categories[1],
    title: 'Wildlife preservation photography',
    description:
      'Observe the profound influence of wildlife photography as a potent instrument for preservation.'
  },
  {
    image: photography10,
    category: categories[0],
    title: 'Heartwarming Pet Portraits',
    description:
      'Commend the affection and connection between pets and their human counterparts through heart-touching pet portrayals.'
  }
]
</script>
