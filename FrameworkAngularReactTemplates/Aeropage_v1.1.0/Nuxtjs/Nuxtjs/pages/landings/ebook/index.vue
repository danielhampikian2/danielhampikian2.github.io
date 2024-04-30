<template>
  <Navbar2 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <EbookHero />

  <About />

  <Benefits />

  <Course />

  <Testimonial />

  <Contact />

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
import EbookHero from '@/components/heros/EbookHero.vue'
import About from '@/pages/landings/ebook/components/About.vue'
import Benefits from '@/pages/landings/ebook/components/Benefits.vue'
import Course from '@/pages/landings/ebook/components/Course.vue'
import Testimonial from '@/pages/landings/ebook/components/Testimonial.vue'
import Contact from '@/pages/landings/ebook/components/Contact.vue'
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
    id: 'benefits',
    name: 'Benefits'
  },
  {
    id: 'courses',
    name: 'Courses'
  },
  {
    id: 'testimonials',
    name: 'Testimonials'
  }
]
</script>
