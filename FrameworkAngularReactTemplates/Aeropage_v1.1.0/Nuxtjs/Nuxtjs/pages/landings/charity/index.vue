<template>
  <Navbar2 :navbar-link="navLinkData" btn-text="Download" :btn-icon="DownloadCloudIcon" />

  <CharityHero />

  <Service1 />

  <Join />

  <Stat />

  <Cause />

  <Service2 />

  <Blog />

  <section
    class="relative py-20 bg-cover bg-no-repeat bg-center bg-[url('../images/landing/charity/img-3.jpg')]"
  >
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="container">
      <div class="max-w-2xl mx-auto text-center mb-12 relative">
        <h2 class="text-4xl/snug font-medium text-white mt-4">
          Stay Informed by Subscribing to Our Newsletter
        </h2>
        <p class="text-base text-white/80 mt-5">
          Receive instant news by subscribing to our daily newsletter.
        </p>
        <form class="space-y-2 mt-6 max-w-xl mx-auto">
          <div class="relative">
            <input
              type="email"
              id="subcribe"
              class="py-4 ps-4 pe-16 w-full h-12 text-default-950 rounded-full border-default-200 bg-default-50 focus:ring-0 focus:border-default-200"
              placeholder="Type Your Email"
              name="email"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 rounded-full text-white bg-primary hover:bg-primary-700 transition-all"
            >
              <MoveRightIcon class="h-6 w-6"></MoveRightIcon>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

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

import Navbar2 from '@/layouts/partials/Navbar2.vue'
import CharityHero from '@/components/heros/CharityHero.vue'
import Service1 from '@/pages/landings/charity/components/Service1.vue'
import Join from '@/pages/landings/charity/components/Join.vue'
import Stat from '@/pages/landings/charity/components/Stat.vue'
import Cause from '@/pages/landings/charity/components/Cause.vue'
import Service2 from '@/pages/landings/charity/components/Service2.vue'
import Blog from '@/pages/landings/charity/components/Blog.vue'
import Contact from '@/pages/landings/charity/components/Contact.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

import { DownloadCloudIcon, MoveRightIcon } from 'lucide-vue-next'

import type { NavbarLinkType } from '@/types/layout'

const navLinkData: NavbarLinkType[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'join',
    name: 'Join'
  },
  {
    id: 'causes',
    name: 'Causes'
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
