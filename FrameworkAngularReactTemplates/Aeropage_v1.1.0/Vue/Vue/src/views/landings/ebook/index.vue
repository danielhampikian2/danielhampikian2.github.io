<template>
  <Navbar2 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <EbookHero />

  <About />

  <Benefits />

  <Course />

  <Testimonial />

  <Contact />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar2 from '@/layout/partials/Navbar2.vue'
import EbookHero from '@/components/heros/EbookHero.vue'
import About from '@/views/landings/ebook/About.vue'
import Benefits from '@/views/landings/ebook/Benefits.vue'
import Course from '@/views/landings/ebook/Course.vue'
import Testimonial from '@/views/landings/ebook/Testimonial.vue'
import Contact from '@/views/landings/ebook/Contact.vue'
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
    id: 'benefits',
    name: 'Benefits',
  },
  {
    id: 'courses',
    name: 'Courses',
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
  },
]
</script>
