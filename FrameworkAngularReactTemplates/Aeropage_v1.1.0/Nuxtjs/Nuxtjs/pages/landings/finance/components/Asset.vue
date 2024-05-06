<template>
  <section id="assets" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-center mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our Assets</span
          >
          <h2 class="text-4xl font-medium text-default-950 mt-4">Valuable Assets</h2>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <BlogCard5 v-for="(blog, idx) in blogData" :key="blog.title" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import financeImg3 from '@/assets/images/landing/finance/img-3.jpg'
import financeImg4 from '@/assets/images/landing/finance/img-4.jpg'
import financeImg5 from '@/assets/images/landing/finance/img-5.jpg'
import type { BlogType } from '@/types/landing'
import BlogCard5 from '@/components/widgets/BlogCard5.vue'

const blogData: BlogType[] = [
  {
    image: financeImg3,
    title: '10 Straightforward Techniques to Improve by 1% Daily',
    description:
      'Customers are constantly seeking ways to enhance their lives. Utilize this phrase as a substitute for...'
  },
  {
    image: financeImg4,
    title: 'Explore 5 Astonishing Uses of Artificial Intelligence',
    description:
      'Customers appreciate simplicity and perceive it as excellent customer service. Customers strongly dislike complexity...'
  },
  {
    image: financeImg5,
    title: 'This Long-Awaited Innovation Could Finally Transform the World',
    description:
      'This phrase is a variation of "new and improved," indicating that the product is the most up-to-date and advanced.'
  }
]
</script>
