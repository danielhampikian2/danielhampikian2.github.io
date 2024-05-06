<template>
  <Navbar2 menu-position="sticky" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <PhotographyHero />

  <section>
    <MarqueeGroup
      :marqee-items="['Wildlife photography', 'Pet portraits', 'Nature photography', 'Wildlife photography', 'Pet portraits', 'Nature photography']"
      custom-class="relative m-auto flex gap-28 overflow-hidden bg-black py-6"
      text-class="text-4xl text-white"
    />
  </section>

  <About />

  <Service />

  <Portfolio />

  <Faq />

  <Blog />

  <Contact />

  <section>
    <MarqueeGroup
      :marqee-items="['Wildlife photography', 'Pet portraits', 'Nature photography', 'Wildlife photography', 'Pet portraits', 'Nature photography']"
      custom-class="relative m-auto flex gap-28 overflow-hidden bg-black py-6"
      text-class="text-4xl text-white"
    />
  </section>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar2 from '@/layout/partials/Navbar2.vue'
import PhotographyHero from '@/components/heros/PhotographyHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/views/landings/photography/About.vue'
import Service from '@/views/landings/photography/Service.vue'
import Portfolio from '@/views/landings/photography/Portfolio.vue'
import Faq from '@/views/landings/photography/Faq.vue'
import Blog from '@/views/landings/photography/Blog.vue'
import Contact from '@/views/landings/photography/Contact.vue'
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
    id: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
]
</script>
