<template>
  <Navbar1
    menu-position="fixed"
    :navbar-link="navLinkData"
    btn-text="Download"
    :btn-icon="DownloadCloudIcon"
  />

  <Marketing2Hero />

  <section class="lg:-mt-[72px]">
    <MarqueeGroup custom-class="bg-default-100 dark:bg-default-50 border-none" />
  </section>

  <About />

  <Service />

  <Portfolio />

  <Step />

  <Testimonial />

  <Action />

  <Blog />

  <Cta />

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

import Navbar1 from '@/layouts/partials/Navbar1.vue'
import Marketing2Hero from '@/components/heros/Marketing2Hero.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/pages/landings/marketing-2/components/About.vue'
import Service from '@/pages/landings/marketing-2/components/Service.vue'
import Portfolio from '@/pages/landings/marketing-2/components/Portfolio.vue'
import Step from '@/pages/landings/marketing-2/components/Step.vue'
import Testimonial from '@/pages/landings/marketing-2/components/Testimonial.vue'
import Action from '@/pages/landings/marketing-2/components/Action.vue'
import Blog from '@/pages/landings/marketing-2/components/Blog.vue'
import Cta from '@/pages/landings/marketing-2/components/Cta.vue'
import Contact from '@/pages/landings/marketing-2/components/Contact.vue'
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
    id: 'testimonial',
    name: 'Testimonial'
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
