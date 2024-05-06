<template>
  <Navbar2
    menu-position="sticky"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <Marketing3Hero />

  <Solution />

  <Project />

  <Feature />

  <section class="pb-10 pt-20">
    <MarqueeGroup
      :marqee-items="['eCommerce', 'Development', 'Social media', 'Consultation']"
      custom-class="gap-10 border-y py-8"
      text-class="text-5xl font-medium text-default-950"
    />
  </section>

  <Faq />

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

import Navbar2 from '@/layouts/partials/Navbar2.vue'
import Marketing3Hero from '@/components/heros/Marketing3Hero.vue'
import Solution from '@/pages/landings/marketing-3/components/Solution.vue'
import Project from '@/pages/landings/marketing-3/components/Project.vue'
import Feature from '@/pages/landings/marketing-3/components/Feature.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Faq from '@/pages/landings/marketing-3/components/Faq.vue'
import Cta from '@/pages/landings/marketing-3/components/Cta.vue'
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
    id: 'solutions',
    name: 'Solutions'
  },
  {
    id: 'projects',
    name: 'Projects'
  },
  {
    id: 'features',
    name: 'Features'
  },
  {
    id: 'faq',
    name: 'Faq'
  }
]
</script>
