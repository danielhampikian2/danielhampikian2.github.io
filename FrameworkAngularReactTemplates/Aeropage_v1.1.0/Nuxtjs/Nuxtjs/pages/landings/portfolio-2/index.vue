<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <Portfolio2Hero />

  <section>
    <MarqueeGroup custom-class="bg-black" text-class="text-white" />
  </section>

  <About />

  <Project />

  <Advantage />

  <Accolades />

  <Testimonial />

  <Blog />

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
import Portfolio2Hero from '@/components/heros/Portfolio2Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/pages/landings/portfolio-2/components/About.vue'
import Project from '@/pages/landings/portfolio-2/components/Project.vue'
import Advantage from '@/pages/landings/portfolio-2/components/Advantage.vue'
import Accolades from '@/pages/landings/portfolio-2/components/Accolades.vue'
import Testimonial from '@/pages/landings/portfolio-2/components/Testimonial.vue'
import Blog from '@/pages/landings/portfolio-2/components/Blog.vue'
import Cta from '@/pages/landings/portfolio-2/components/Cta.vue'
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
    id: 'project',
    name: 'Project'
  },
  {
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'advantage',
    name: 'Advantage'
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
