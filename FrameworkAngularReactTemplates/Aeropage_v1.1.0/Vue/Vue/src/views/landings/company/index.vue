<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <CompanyHero />

  <Contact />

  <Service />

  <Stat />

  <Faq />

  <Testimonial />

  <Blog />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import CompanyHero from '@/components/heros/CompanyHero.vue'
import Contact from '@/views/landings/company/Contact.vue'
import Service from '@/views/landings/company/Service.vue'
import Stat from '@/views/landings/company/Stat.vue'
import Faq from '@/views/landings/company/Faq.vue'
import Testimonial from '@/views/landings/company/Testimonial.vue'
import Blog from '@/views/landings/company/Blog.vue'
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
    id: 'services',
    name: 'Services',
  },
  {
    id: 'faq',
    name: 'Faq',
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
