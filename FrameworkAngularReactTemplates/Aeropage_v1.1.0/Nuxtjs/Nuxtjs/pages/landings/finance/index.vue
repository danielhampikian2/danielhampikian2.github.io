<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <FinanceHero />

  <section>
    <MarqueeGroup custom-class="bg-default-100 dark:bg-default-50 py-4" />
  </section>

  <Testimonial />

  <Feature />

  <Asset />

  <Onboarding />

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
import FinanceHero from '@/components/heros/FinanceHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Testimonial from '@/pages/landings/finance/components/Testimonial.vue'
import Feature from '@/pages/landings/finance/components/Feature.vue'
import Asset from '@/pages/landings/finance/components/Asset.vue'
import Onboarding from '@/pages/landings/finance/components/Onboarding.vue'
import Cta from '@/pages/landings/finance/components/Cta.vue'
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
    id: 'experts',
    name: 'Experts'
  },
  {
    id: 'features',
    name: 'Features'
  },
  {
    id: 'assets',
    name: 'Assets'
  },
  {
    id: 'onboarding',
    name: 'Onboarding'
  }
]
</script>
