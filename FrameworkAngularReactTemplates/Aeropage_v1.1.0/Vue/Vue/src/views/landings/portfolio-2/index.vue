<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <Portfolio2Hero />

  <section>
    <MarqueeGroup custom-class="bg-black" text-class="text-white" />
  </section>

  <About />

  <Project />

  <Advantage />

  <Accolades />

  <Testimonial />

  <Blog />

  <Cta />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import Portfolio2Hero from '@/components/heros/Portfolio2Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/views/landings/portfolio-2/About.vue'
import Project from '@/views/landings/portfolio-2/Project.vue'
import Advantage from '@/views/landings/portfolio-2/Advantage.vue'
import Accolades from '@/views/landings/portfolio-2/Accolades.vue'
import Testimonial from '@/views/landings/portfolio-2/Testimonial.vue'
import Blog from '@/views/landings/portfolio-2/Blog.vue'
import Cta from '@/views/landings/portfolio-2/Cta.vue'
import Footer from '@/layout/partials/Footer.vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'about',
    name: 'About',
  },
  {
    id: 'project',
    name: 'Project',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 'advantage',
    name: 'Advantage',
  },
  {
    id: 'testimonial',
    name: 'Testimonial',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
]
</script>
