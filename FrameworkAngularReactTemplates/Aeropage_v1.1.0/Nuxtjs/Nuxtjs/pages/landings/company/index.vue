<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <CompanyHero />

  <Contact />

  <Service />

  <Stat />

  <Faq />

  <Testimonial />

  <Blog />

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
import CompanyHero from '@/components/heros/CompanyHero.vue'
import Contact from '@/pages/landings/company/components/Contact.vue'
import Service from '@/pages/landings/company/components/Service.vue'
import Stat from '@/pages/landings/company/components/Stat.vue'
import Faq from '@/pages/landings/company/components/Faq.vue'
import Testimonial from '@/pages/landings/company/components/Testimonial.vue'
import Blog from '@/pages/landings/company/components/Blog.vue'
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
    id: 'services',
    name: 'Services'
  },
  {
    id: 'faq',
    name: 'Faq'
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
