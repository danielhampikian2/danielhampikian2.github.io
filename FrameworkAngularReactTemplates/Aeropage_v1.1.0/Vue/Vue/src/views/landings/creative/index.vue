<template>
  <Navbar1 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <CreativeHero />

  <section>
    <MarqueeGroup custom-class="py-8" text-class="text-5xl" />
  </section>

  <Feature />

  <Portfolio title="Selected Projects." tag="our portfolio" :project-list="projectData1" />

  <Service />

  <Testimonial />

  <Faq />

  <Blog />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import CreativeHero from '@/components/heros/CreativeHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Feature from '@/views/landings/creative/Feature.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Service from '@/views/landings/creative/Service.vue'
import Testimonial from '@/views/landings/creative/Testimonial.vue'
import Faq from '@/views/landings/creative/Faq.vue'
import Blog from '@/views/landings/creative/Blog.vue'
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
    id: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
]
</script>
