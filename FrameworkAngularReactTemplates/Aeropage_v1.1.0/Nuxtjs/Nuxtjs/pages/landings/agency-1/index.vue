<template>
  <Navbar :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <AgencyHero />

  <section class="lg:pb-10">
    <MarqueeGroup />
  </section>

  <About />

  <Service1 />

  <Portfolio tag="Our Portfolio" title="Selected Projects." :project-list="projectData1" />

  <Service2 />

  <Faq />

  <Blog />

  <Contact />

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
import AgencyHero from '@/components/heros/AgencyHero.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Footer from '@/layouts/partials/Footer.vue'
import Navbar from '@/layouts/partials/Navbar1.vue'
import About from '~/pages/landings/agency-1/components/About.vue'
import Blog from '~/pages/landings/agency-1/components/Blog.vue'
import Contact from '~/pages/landings/agency-1/components/Contact.vue'
import Faq from '~/pages/landings/agency-1/components/Faq.vue'
import Service1 from '~/pages/landings/agency-1/components/Service1.vue'
import Service2 from '~/pages/landings/agency-1/components/Service2.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { projectData1 } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'about',
    name: 'About'
  },
  {
    id: 'services',
    name: 'Services'
  },
  {
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'faq',
    name: 'Faq'
  },
  {
    id: 'blog',
    name: 'Blog'
  },
  {
    id: 'contact',
    name: 'Contact'
  }
]
</script>
