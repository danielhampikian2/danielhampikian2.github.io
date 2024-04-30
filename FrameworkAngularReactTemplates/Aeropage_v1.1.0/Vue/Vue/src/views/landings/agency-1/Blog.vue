<template>
  <section id="blog" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our Blog</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">Latest from our blog</h2>
          <p class="text-base font-medium text-default-800">
            In this guide, we're going to share the essential SEO ranking factors you need to dominate search. By the end of this post, you'll have a
            well-optimized site
          </p>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <BlogCard1 v-for="(blog, idx) in blogData" :key="blog.title" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard1 from '@/components/widgets/BlogCard1.vue'

import type { BlogType } from '@/types/landing'

import agencyImg13 from '@/assets/images/landing/agency/img-13.jpg'
import agencyImg14 from '@/assets/images/landing/agency/img-14.jpg'
import agencyImg15 from '@/assets/images/landing/agency/img-15.jpg'

const blogData: BlogType[] = [
  {
    image: agencyImg13,
    publish: {
      date: 6,
      month: 'Sep',
    },
    title: 'Brilliant minds.',
    description: 'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
  },
  {
    image: agencyImg14,
    publish: {
      date: 5,
      month: 'Sep',
    },
    title: 'Digital Marketing.',
    description: 'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
  },
  {
    image: agencyImg15,
    publish: {
      date: 4,
      month: 'Sep',
    },
    title: 'Good thinking.',
    description: 'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
  },
]
</script>
