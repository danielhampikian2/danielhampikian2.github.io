<template>
  <header
    id="navbar"
    class="fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 border-b border-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80"
  >
    <div class="h-full flex items-center py-4">
      <div class="container">
        <nav class="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
          <div class="w-full lg:w-auto flex items-center justify-between">
            <!-- Navbar Brand Logo -->
            <router-link :to="{ name: 'landing' }">
              <img src="@/assets/images/logo-dark.png" alt="logo" class="h-10 flex dark:hidden" />
              <img src="@/assets/images/logo-light.png" alt="logo" class="h-10 hidden dark:flex" />
            </router-link>

            <!-- Mobile Menu Toggle Button -->
            <button
              class="hs-collapse-toggle lg:hidden inline-block"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <MenuIcon class="w-7 h-7 text-default-600 hover:text-default-900" />
            </button>
          </div>

          <!-- Navigation Menu -->
          <div
            id="mobileMenu"
            class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0 overflow-hidden"
          >
            <ul class="menu flex lg:items-center justify-center flex-col lg:flex-row gap-y-2">
              <!-- Contact us Link -->
              <li
                class="menu-item text-sm lg:text-base font-medium text-default-800 transition-all duration-300 hover:text-primary-600 [&.active]:text-primary"
              >
                <a class="inline-flex items-center py-2 px-4 rounded-full" href="#home">Home</a>
              </li>
              <!-- Contact us Link -->
              <li
                class="menu-item text-sm lg:text-base font-medium text-default-800 transition-all duration-300 hover:text-primary-600 [&.active]:text-primary"
              >
                <a class="inline-flex items-center py-2 px-4 rounded-full" href="#demo">Demos</a>
              </li>
              <!-- Contact us Link -->
              <li
                class="menu-item text-sm lg:text-base font-medium text-default-800 transition-all duration-300 hover:text-primary-600 [&.active]:text-primary"
              >
                <a class="inline-flex items-center py-2 px-4 rounded-full" href="#features">Features</a>
              </li>
            </ul>
          </div>

          <div class="ms-auto shrink hidden lg:inline-flex gap-2">
            <a
              href="#"
              class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500"
            >
              <DownloadCloudIcon class="h-4 w-4 fill-white/40" />
              <span class="hidden sm:block">Download</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { DownloadCloudIcon, MenuIcon } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gumshoeMin from 'gumshoejs'

const initStickyNav = () => {
  const windowScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
        navbar.classList.add('nav-sticky')
      } else {
        navbar.classList.remove('nav-sticky')
      }
    }
  }

  window.addEventListener('scroll', (ev) => {
    ev.preventDefault()
    windowScroll()
  })
}

const initNavLinkActive = () => {
  if (document.querySelector('.menu a')) {
    gumshoeMin('.menu a', {
      offset: 80,
    })
  }
}

// Navbar Active Class
const initMobileNavLinkActive = () => {
  if (document.querySelector('#mobile-menu nav a')) {
    gumshoeMin('#mobile-menu nav a', {
      offset: 80,
    })
  }
}

onMounted(() => {
  initNavLinkActive()
  initMobileNavLinkActive()
  initStickyNav()
})
</script>
