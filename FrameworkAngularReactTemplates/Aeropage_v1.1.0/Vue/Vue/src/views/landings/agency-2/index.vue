<template>
  <Navbar2 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <Agency2Hero />

  <Feature />

  <Faq />

  <Portfolio tag="Our Portfolio" title="Selected Projects." :project-list="projectData2" />

  <Pricing />

  <Service />

  <section>
    <MarqueeGroup custom-class="py-8" />
  </section>

  <Review />

  <Blog />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar2 from '@/layout/partials/Navbar2.vue'
import Agency2Hero from '@/components/heros/Agency2Hero.vue'
import Feature from '@/views/landings/agency-2/Feature.vue'
import Faq from '@/views/landings/agency-2/Faq.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Pricing from '@/views/landings/agency-2/Pricing.vue'
import Service from '@/views/landings/agency-2/Service.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Review from '@/views/landings/agency-2/Review.vue'
import Blog from '@/views/landings/agency-2/Blog.vue'
import Footer from '@/layout/partials/Footer.vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { projectData2 } from '@/utilities/common'

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
    id: 'faq',
    name: 'Faq',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 'pricing',
    name: 'Pricing',
  },
  {
    id: 'services',
    name: 'Services',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
]
</script>
