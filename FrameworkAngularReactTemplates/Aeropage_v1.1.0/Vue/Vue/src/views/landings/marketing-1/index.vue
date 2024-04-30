<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

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

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import Marketing1Hero from '@/components/heros/Marketing1Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Service1 from '@/views/landings/marketing-1/Service1.vue'
import Service2 from '@/views/landings/marketing-1/Service2.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import About from '@/views/landings/marketing-1/About.vue'
import Faq from '@/views/landings/marketing-1/Faq.vue'
import Testimonial from '@/views/landings/marketing-1/Testimonial.vue'
import Blog from '@/views/landings/marketing-1/Blog.vue'
import Footer from '@/layout/partials/Footer.vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'
import { projectData1 } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'features',
    name: 'Features',
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
  {
    id: 'testimonial',
    name: 'Testimonial',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
]
</script>
