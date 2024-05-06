<template>
  <Navbar2 menu-position="sticky" :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

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

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar2 from '@/layout/partials/Navbar2.vue'
import Marketing3Hero from '@/components/heros/Marketing3Hero.vue'
import Solution from '@/views/landings/marketing-3/Solution.vue'
import Project from '@/views/landings/marketing-3/Project.vue'
import Feature from '@/views/landings/marketing-3/Feature.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import Faq from '@/views/landings/marketing-3/Faq.vue'
import Cta from '@/views/landings/marketing-3/Cta.vue'
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
    id: 'solutions',
    name: 'Solutions',
  },
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
]
</script>
