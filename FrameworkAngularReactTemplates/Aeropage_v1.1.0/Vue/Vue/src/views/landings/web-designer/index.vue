<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <WebDesignerHero />

  <About />

  <Service />

  <Work />

  <Faq />

  <Story />

  <Contact />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import WebDesignerHero from '@/components/heros/WebDesignerHero.vue'
import About from '@/views/landings/web-designer/About.vue'
import Service from '@/views/landings/web-designer/Service.vue'
import Work from '@/views/landings/web-designer/Work.vue'
import Faq from '@/views/landings/web-designer/Faq.vue'
import Story from '@/views/landings/web-designer/Story.vue'
import Contact from '@/views/landings/web-designer/Contact.vue'
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
    id: 'faq',
    name: 'Faq',
  },
  {
    id: 'stories',
    name: 'Stories',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
]
</script>
