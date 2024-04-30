<template>
  <Navbar1 menu-position="fixed" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

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

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar1 from '@/layout/partials/Navbar1.vue'
import FinanceHero from '@/components/heros/FinanceHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Testimonial from '@/views/landings/finance/Testimonial.vue'
import Feature from '@/views/landings/finance/Feature.vue'
import Asset from '@/views/landings/finance/Asset.vue'
import Onboarding from '@/views/landings/finance/Onboarding.vue'
import Cta from '@/views/landings/finance/Cta.vue'
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
    id: 'experts',
    name: 'Experts',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'assets',
    name: 'Assets',
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
  },
]
</script>
