<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <WebDesignerHero />

  <About />

  <Service />

  <Work />

  <Faq />

  <Story />

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

import Navbar1 from '@/layouts/partials/Navbar1.vue'
import WebDesignerHero from '@/components/heros/WebDesignerHero.vue'
import About from '@/pages/landings/web-designer/components/About.vue'
import Service from '@/pages/landings/web-designer/components/Service.vue'
import Work from '@/pages/landings/web-designer/components/Work.vue'
import Faq from '@/pages/landings/web-designer/components/Faq.vue'
import Story from '@/pages/landings/web-designer/components/Story.vue'
import Contact from '@/pages/landings/web-designer/components/Contact.vue'
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
    id: 'faq',
    name: 'Faq'
  },
  {
    id: 'stories',
    name: 'Stories'
  },
  {
    id: 'contact',
    name: 'Contact'
  }
]
</script>
