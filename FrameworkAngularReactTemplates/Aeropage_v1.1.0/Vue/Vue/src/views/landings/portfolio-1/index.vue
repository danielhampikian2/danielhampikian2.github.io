<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <Portfolio1Hero />

  <Brands />

  <Feature />

  <About />

  <Service />

  <Testimonial />

  <Blog />

  <Faq />

  <Cta />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import Portfolio1Hero from '@/components/heros/Portfolio1Hero.vue'
import Brands from '@/views/landings/portfolio-1/Brands.vue'
import Feature from '@/views/landings/portfolio-1/Feature.vue'
import About from '@/views/landings/portfolio-1/About.vue'
import Service from '@/views/landings/portfolio-1/Service.vue'
import Testimonial from '@/views/landings/portfolio-1/Testimonial.vue'
import Blog from '@/views/landings/portfolio-1/Blog.vue'
import Faq from '@/views/landings/portfolio-1/Faq.vue'
import Cta from '@/views/landings/portfolio-1/Cta.vue'
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
    id: 'testimonial',
    name: 'Testimonial',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
]
</script>
