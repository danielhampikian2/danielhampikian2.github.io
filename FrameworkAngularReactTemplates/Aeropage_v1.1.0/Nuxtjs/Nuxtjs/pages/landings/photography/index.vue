<template>
  <Navbar2
    menu-position="sticky"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <PhotographyHero />

  <section>
    <MarqueeGroup
      :marqee-items="[
        'Wildlife photography',
        'Pet portraits',
        'Nature photography',
        'Wildlife photography',
        'Pet portraits',
        'Nature photography'
      ]"
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
      :marqee-items="[
        'Wildlife photography',
        'Pet portraits',
        'Nature photography',
        'Wildlife photography',
        'Pet portraits',
        'Nature photography'
      ]"
      custom-class="relative m-auto flex gap-28 overflow-hidden bg-black py-6"
      text-class="text-4xl text-white"
    />
  </section>

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
import PhotographyHero from '@/components/heros/PhotographyHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/pages/landings/photography/components/About.vue'
import Service from '@/pages/landings/photography/components/Service.vue'
import Portfolio from '@/pages/landings/photography/components/Portfolio.vue'
import Faq from '@/pages/landings/photography/components/Faq.vue'
import Blog from '@/pages/landings/photography/components/Blog.vue'
import Contact from '@/pages/landings/photography/components/Contact.vue'
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
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'faq',
    name: 'Faq'
  }
]
</script>
