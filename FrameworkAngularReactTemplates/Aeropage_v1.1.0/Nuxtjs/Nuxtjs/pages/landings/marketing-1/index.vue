<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <Marketing1Hero />

  <section>
    <MarqueeGroup />
  </section>

  <Service1 />

  <About />

  <Service2 />

  <Portfolio title="Selected Projects." tag="Our Portfolio" :project-list="projectData1" />

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
import Marketing1Hero from '@/components/heros/Marketing1Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Service1 from '@/pages/landings/marketing-1/components/Service1.vue'
import Service2 from '@/pages/landings/marketing-1/components/Service2.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import About from '@/pages/landings/marketing-1/components/About.vue'
import Faq from '@/pages/landings/marketing-1/components/Faq.vue'
import Testimonial from '@/pages/landings/marketing-1/components/Testimonial.vue'
import Blog from '@/pages/landings/marketing-1/components/Blog.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'
import { projectData1 } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'features',
    name: 'Features'
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
  },
  {
    id: 'testimonial',
    name: 'Testimonial'
  },
  {
    id: 'blog',
    name: 'Blog'
  }
]
</script>
