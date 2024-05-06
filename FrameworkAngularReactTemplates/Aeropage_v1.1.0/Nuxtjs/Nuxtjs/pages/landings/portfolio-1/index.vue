<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

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

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import Navbar1 from '@/layouts/partials/Navbar1.vue'
import Portfolio1Hero from '@/components/heros/Portfolio1Hero.vue'
import Brands from '@/pages/landings/portfolio-1/components/Brands.vue'
import Feature from '@/pages/landings/portfolio-1/components/Feature.vue'
import About from '@/pages/landings/portfolio-1/components/About.vue'
import Service from '@/pages/landings/portfolio-1/components/Service.vue'
import Testimonial from '@/pages/landings/portfolio-1/components/Testimonial.vue'
import Blog from '@/pages/landings/portfolio-1/components/Blog.vue'
import Faq from '@/pages/landings/portfolio-1/components/Faq.vue'
import Cta from '@/pages/landings/portfolio-1/components/Cta.vue'
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
    id: 'testimonial',
    name: 'Testimonial'
  },
  {
    id: 'blog',
    name: 'Blog'
  },
  {
    id: 'faq',
    name: 'Faq'
  }
]
</script>
