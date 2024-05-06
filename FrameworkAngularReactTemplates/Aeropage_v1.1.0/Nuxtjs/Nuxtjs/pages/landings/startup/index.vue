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

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import Navbar2 from '@/layouts/partials/Navbar2.vue'
import StartupHero from '@/components/heros/StartupHero.vue'
import About from '@/pages/landings/startup/components/About.vue'
import Service from '@/pages/landings/startup/components/Service.vue'
import Portfolio from '@/pages/landings/startup/components/Portfolio.vue'
import Testimonial from '@/pages/landings/startup/components/Testimonial.vue'
import Blog from '@/pages/landings/startup/components/Blog.vue'
import Cta from '@/pages/landings/startup/components/Cta.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'about',
    name: 'About'
  },
  {
    id: 'services',
    name: 'Services'
  },
  {
    id: 'work',
    name: 'Work'
  },
  {
    id: 'testimonials',
    name: 'Testimonials'
  },
  {
    id: 'blog',
    name: 'Blog'
  }
]
</script>
