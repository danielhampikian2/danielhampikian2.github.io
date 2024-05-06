<template>
  <Navbar2 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <StartupHero />

  <About />

  <Service />

  <Portfolio />

  <Testimonial />

  <Blog />

  <Cta />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar2 from '@/layout/partials/Navbar2.vue'
import StartupHero from '@/components/heros/StartupHero.vue'
import About from '@/views/landings/startup/About.vue'
import Service from '@/views/landings/startup/Service.vue'
import Portfolio from '@/views/landings/startup/Portfolio.vue'
import Testimonial from '@/views/landings/startup/Testimonial.vue'
import Blog from '@/views/landings/startup/Blog.vue'
import Cta from '@/views/landings/startup/Cta.vue'
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
    id: 'services',
    name: 'Services',
  },
  {
    id: 'work',
    name: 'Work',
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
]
</script>
