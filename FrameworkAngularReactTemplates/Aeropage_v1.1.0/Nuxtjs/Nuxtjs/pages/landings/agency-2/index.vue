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

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Agency2Hero from '@/components/heros/Agency2Hero.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Footer from '@/layouts/partials/Footer.vue'
import Navbar2 from '@/layouts/partials/Navbar2.vue'
import Blog from '@/pages/landings/agency-2/components/Blog.vue'
import Faq from '@/pages/landings/agency-2/components/Faq.vue'
import Feature from '@/pages/landings/agency-2/components/Feature.vue'
import Pricing from '@/pages/landings/agency-2/components/Pricing.vue'
import Review from '@/pages/landings/agency-2/components/Review.vue'
import Service from '@/pages/landings/agency-2/components/Service.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { projectData2 } from '@/utilities/common'

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
    id: 'faq',
    name: 'Faq'
  },
  {
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'pricing',
    name: 'Pricing'
  },
  {
    id: 'services',
    name: 'Services'
  },
  {
    id: 'blog',
    name: 'Blog'
  }
]
</script>
