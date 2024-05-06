<template>
  <section id="blog" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Blog</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">
            Read the latest news.
          </h2>
        </div>
      </div>

      <div class="grid xl:grid-cols-2 gap-6">
        <BlogCard3 :blog="blogData[0]" />
        <BlogCard4 :blog="blogData[1]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import creativeImg6 from '@/assets/images/landing/creative/img-6.png'
import creativeImg8 from '@/assets/images/landing/creative/img-8.png'

import type { BlogType } from '@/types/landing'

import BlogCard3 from '@/components/widgets/BlogCard3.vue'
import BlogCard4 from '@/components/widgets/BlogCard4.vue'

const blogData: BlogType[] = [
  {
    image: creativeImg6,
    title: 'Free advertising you online business',
    description: 'Content king that means bringing and strategic approach.'
  },
  {
    image: creativeImg8,
    title: 'Investment monitor top 2023',
    description: 'Content king that means bringing and strategic approach.'
  }
]
</script>
