<template>
  <section id="work" class="overflow-hidden pb-10 pt-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-3xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Showcase of Work</span
          >
          <h2 class="my-4 text-4xl/tight font-medium text-default-950">Explore Work</h2>
          <p class="text-base">
            A static website preserves a distinct file for every page of the site. Whenever a user
            requests a specific page, the same content is delivered.
          </p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <ProjectCard2 :project="projectData[0]" />

        <div class="md:col-span-2">
          <ProjectCard2 :project="projectData[1]" />
        </div>

        <ProjectCard2
          v-for="(project, idx) in projectData.slice(2, projectData.length)"
          :key="idx"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import startupImg1 from '@/assets/images/landing/startup/img-1.jpg'
import startupImg2 from '@/assets/images/landing/startup/img-2.jpg'
import startupImg5 from '@/assets/images/landing/startup/img-5.jpg'
import startupImg6 from '@/assets/images/landing/startup/img-6.jpg'
import startupImg7 from '@/assets/images/landing/startup/img-7.jpg'

import ProjectCard2 from '@/components/widgets/ProjectCard2.vue'
import type { ProjectType } from '@/types/landing'

const categories = ['External Page', 'Lightbox']

const projectData: ProjectType[] = [
  {
    image: startupImg5,
    name: 'Medium Scene',
    category: categories[1]
  },
  {
    image: startupImg6,
    name: 'Visual Stranger',
    category: categories[0]
  },
  {
    image: startupImg2,
    name: 'Amplitude',
    category: categories[0]
  },
  {
    image: startupImg1,
    name: 'Rise of Design',
    category: categories[0]
  },
  {
    image: startupImg7,
    name: 'Design System',
    category: categories[1]
  }
]
</script>
