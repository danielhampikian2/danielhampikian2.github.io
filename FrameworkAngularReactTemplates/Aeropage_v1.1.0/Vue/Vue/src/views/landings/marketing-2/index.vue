<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <Marketing2Hero />

  <section class="lg:-mt-[72px]">
    <MarqueeGroup custom-class="bg-default-100 dark:bg-default-50 border-none" />
  </section>

  <About />

  <Service />

  <Portfolio />

  <Step />

  <Testimonial />

  <Action />

  <Blog />

  <Cta />

  <Contact />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import Marketing2Hero from '@/components/heros/Marketing2Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/views/landings/marketing-2/About.vue'
import Service from '@/views/landings/marketing-2/Service.vue'
import Portfolio from '@/views/landings/marketing-2/Portfolio.vue'
import Step from '@/views/landings/marketing-2/Step.vue'
import Testimonial from '@/views/landings/marketing-2/Testimonial.vue'
import Action from '@/views/landings/marketing-2/Action.vue'
import Blog from '@/views/landings/marketing-2/Blog.vue'
import Cta from '@/views/landings/marketing-2/Cta.vue'
import Contact from '@/views/landings/marketing-2/Contact.vue'
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
    id: 'testimonial',
    name: 'Testimonial',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
]
</script>
