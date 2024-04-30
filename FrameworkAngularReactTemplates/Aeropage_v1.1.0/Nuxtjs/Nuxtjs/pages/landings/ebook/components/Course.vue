<template>
  <section id="courses" class="py-10 lg:py-20 bg-default-100">
    <div class="container">
      <div class="grid lg:grid-cols-5 lg:gap-12 gap-8 items-center">
        <div class="lg:col-span-2 lg:order-1 order-2">
          <img
            src="@/assets/images/landing/ebook/img-5.jpg"
            class="rounded-xl shadow-md h-full w-full"
            alt=""
          />
        </div>

        <div class="lg:col-span-3 lg:order-2 order-1">
          <h2 class="text-4xl font-medium text-default-950">Our Featured Courses</h2>
          <p class="text-base font-me mt-4">
            Lorem ipsum dolor sit amet, consectetur, adipiscing elit. pellentesque quils arcu nisl.
            pellentesque quis arcu nisl. pellentesque ac tortor et est dignissim vulputate. proin
            quis sagittis est. phasellus dignissim dui et ipsum elementum, et auctor risus posuere.
          </p>

          <div class="mt-6">
            <CourseCard
              v-for="(course, idx) in courseData"
              :key="course.title"
              :course="course"
              class="mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ebookImg2 from '@/assets/images/landing/ebook/img-2.jpg'
import ebookImg3 from '@/assets/images/landing/ebook/img-3.jpg'
import ebookImg4 from '@/assets/images/landing/ebook/img-4.jpg'

import type { AuthorType, CourseType } from '@/types/landing'
import CourseCard from '@/components/widgets/CourseCard.vue'

const authorData: AuthorType[] = [
  {
    name: 'Jane willow'
  },
  {
    name: 'Stiven oswald'
  },
  {
    name: 'Andrew clarkson'
  }
]

const courseData: CourseType[] = [
  {
    image: ebookImg2,
    title: 'Digital Marketing Course',
    author: authorData[0],
    publish: {
      date: 13,
      month: 'June',
      year: 2018
    }
  },
  {
    image: ebookImg3,
    title: 'Graphic Design Course',
    author: authorData[1],
    publish: {
      date: 17,
      month: 'June',
      year: 2018
    }
  },
  {
    image: ebookImg4,
    title: 'Financial Analyst Course',
    author: authorData[2],
    publish: {
      date: 24,
      month: 'June',
      year: 2018
    }
  }
]
</script>
