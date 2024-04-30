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

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layout/partials/Navbar1.vue'
import AgencyHero from '@/components/heros/AgencyHero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/views/landings/agency-1/About.vue'
import Service1 from '@/views/landings/agency-1/Service1.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Service2 from '@/views/landings/agency-1/Service2.vue'
import Faq from '@/views/landings/agency-1/Faq.vue'
import Blog from '@/views/landings/agency-1/Blog.vue'
import Contact from '@/views/landings/agency-1/Contact.vue'
import Footer from '@/layout/partials/Footer.vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

import { DownloadCloudIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

import { projectData1 } from '@/utilities/common'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'about',
    name: 'About',
  },
  {
    id: 'services',
    name: 'Services',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 'faq',
    name: 'Faq',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
]
</script>
