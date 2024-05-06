<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

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

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import Navbar1 from '@/layouts/partials/Navbar1.vue'
import HostingHero from '@/components/heros/HostingHero.vue'
import Brands from '@/components/sections/Brands.vue'
import Pricing from '@/pages/landings/hosting/components/Pricing.vue'
import Service from '@/pages/landings/hosting/components/Service.vue'
import Cta from '@/pages/landings/hosting/components/Cta.vue'
import Feature from '@/pages/landings/hosting/components/Feature.vue'
import Testimonial from '@/pages/landings/hosting/components/Testimonial.vue'
import Faq from '@/pages/landings/hosting/components/Faq.vue'
import Extra from '@/pages/landings/hosting/components/Extra.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { brandData } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home'
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
    id: 'features',
    name: 'Features'
  },
  {
    id: 'testimonial',
    name: 'Testimonial'
  },
  {
    id: 'faq',
    name: 'Faq'
  }
]
</script>
