<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <HostingHero />

  <Brands :brand-data="brandData" />

  <Pricing />

  <Service />

  <Cta />

  <Feature />

  <Testimonial />

  <Faq />

  <Extra />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import HostingHero from '@/components/heros/HostingHero.vue'
import Brands from '@/components/sections/Brands.vue'
import Pricing from '@/views/landings/hosting/Pricing.vue'
import Service from '@/views/landings/hosting/Service.vue'
import Cta from '@/views/landings/hosting/Cta.vue'
import Feature from '@/views/landings/hosting/Feature.vue'
import Testimonial from '@/views/landings/hosting/Testimonial.vue'
import Faq from '@/views/landings/hosting/Faq.vue'
import Extra from '@/views/landings/hosting/Extra.vue'
import Footer from '@/layout/partials/Footer.vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { brandData } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home',
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
    id: 'features',
    name: 'Features',
  },
  {
    id: 'testimonial',
    name: 'Testimonial',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
]
</script>
