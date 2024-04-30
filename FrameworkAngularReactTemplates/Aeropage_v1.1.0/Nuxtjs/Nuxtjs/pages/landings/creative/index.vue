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

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import Navbar1 from '@/layouts/partials/Navbar1.vue'
import CreativeHero from '@/components/heros/CreativeHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Feature from '@/pages/landings/creative/components/Feature.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Service from '@/pages/landings/creative/components/Service.vue'
import Testimonial from '@/pages/landings/creative/components/Testimonial.vue'
import Faq from '@/pages/landings/creative/components/Faq.vue'
import Blog from '@/pages/landings/creative/components/Blog.vue'
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
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'testimonials',
    name: 'Testimonials'
  },
  {
    id: 'faq',
    name: 'Faq'
  },
  {
    id: 'blog',
    name: 'Blog'
  }
]
</script>
