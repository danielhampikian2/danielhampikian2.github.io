<template>
  <header class="sticky top-0 z-50">
    <div
      class="z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4"
    >
      <nav class="container flex w-full items-center justify-between gap-6">
        <div>
          <nuxt-link to="/" class="block">
            <img src="@/assets/images/logo-light.png" class="flex h-8" alt="images" />
          </nuxt-link>
        </div>

        <div class="flex items-center gap-3">
          <div class="relative hidden lg:block">
            <SearchIcon class="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              class="h-10 w-full rounded-full border-0 bg-zinc-800 pe-4 ps-11 text-zinc-300 placeholder-zinc-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
            />
          </div>

          <!-- Fullscreen Button -->
          <div class="hidden sm:flex">
            <button
              @click="toggleFullScreen"
              type="button"
              class="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
            >
              <MinimizeIcon v-if="fullScreenOn" class="h-5 w-5" />
              <MaximizeIcon v-else class="h-5 w-5" />
            </button>
          </div>

          <!-- Notification Dropdown -->
          <div class="hidden sm:flex">
            <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                class="hs-dropdown-toggle inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
              >
                <MailIcon class="h-5 w-5" />
                <span
                  class="absolute -end-0 -top-0 h-4 w-4 rounded-full bg-primary text-xs font-medium text-white"
                  >2</span
                >
              </button>

              <div
                class="hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <div class="flex items-center justify-between px-4 py-3">
                  <h6 class="text-base font-semibold text-default-900">Messages</h6>
                  <a
                    href="javascript: void(0);"
                    class="border-b border-dashed border-default-300 font-semibold text-default-800"
                  >
                    <small>Clear All</small>
                  </a>
                </div>

                <div
                  class="h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
                >
                  <a
                    v-for="(item, idx) in notificationData"
                    :key="idx"
                    class="mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100"
                  >
                    <span
                      class="inline-flex h-9 w-9 items-center justify-center rounded-full"
                      :class="
                        idx % 2 == 0 ? 'bg-primary/20 text-primary' : 'bg-teal-500/20 text-teal-500'
                      "
                    >
                      <component :is="item.icon" class="h-5 w-5" />
                    </span>
                    <span class="px-3">
                      <h6 class="text-sm font-semibold text-default-800">
                        {{ item.title }}
                      </h6>
                      <p class="text-xs text-default-600">
                        {{ item.description }}
                      </p>
                    </span>
                  </a>
                </div>

                <a
                  href="javascript:void(0);"
                  class="block px-4 py-3 text-center text-sm font-medium text-primary"
                >
                  View All
                </a>
              </div>
            </div>
          </div>

          <div class="hidden sm:flex">
            <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                class="hs-dropdown-toggle inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
              >
                <LayoutGridIcon class="h-5 w-5" />
              </button>

              <div
                class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <div class="grid grid-cols-3 gap-3">
                  <a
                    v-for="(item, idx) in menuData"
                    :key="idx"
                    class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                    href="#"
                  >
                    <img :src="item.image" class="h-6" alt="" />
                    <span>{{ item.title }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Dropdown -->
          <div class="flex">
            <div class="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-with-header"
                type="button"
                class="hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all"
              >
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="@/assets/images/avatars/img-1.jpg"
                />
                <div class="hidden text-start lg:block">
                  <p class="text-sm font-bold text-white">Diane Berry</p>
                  <p class="mt-1 text-xs font-semibold text-zinc-400">Admin</p>
                </div>
              </button>

              <div
                class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <a
                  class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                  href="#"
                >
                  <UserIcon class="h-4 w-4" />
                  My Profile
                </a>
                <nuxt-link
                  to="/"
                  class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                >
                  <NewspaperIcon class="h-4 w-4" />
                  Landing
                </nuxt-link>
                <a
                  class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                  href="#"
                >
                  <SettingsIcon class="h-4 w-4" />
                  Setting
                </a>

                <hr class="-mx-2 my-2 border-default-200" />

                <nuxt-link
                  to="/auth/logout"
                  class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-400/10"
                >
                  <LogOutIcon class="h-4 w-4" />
                  Log out
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <nav
      class="admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50"
    >
      <div
        class="custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5"
      >
        <div
          v-for="(item, idx) in adminNavbarLinkData"
          :key="item.name"
          class="shrink-0 snap-center px-2"
        >
          <template v-if="item.path">
            <nuxt-link
              :to="item.path"
              class="inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary"
            >
              <component :is="item.icon" class="h-5 w-5"></component>
              <span>{{ item.name }}</span>
            </nuxt-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
AlertOctagonIcon,
LayoutGridIcon,
LogOutIcon,
MailIcon,
MaximizeIcon,
MinimizeIcon,
NewspaperIcon,
SearchIcon,
SettingsIcon,
ShieldHalfIcon,
UserIcon
} from 'lucide-vue-next'

import { adminNavbarLinkData } from '@/utilities/layout'

import behance from '@/assets/images/brand/behance.png'
import bitbucket from '@/assets/images/brand/bitbucket.png'
import dribbble from '@/assets/images/brand/dribbble.png'
import dropbox from '@/assets/images/brand/dropbox.png'
import github from '@/assets/images/brand/github.png'
import slack from '@/assets/images/brand/slack.png'
import { ref } from 'vue'

const menuData = [
  {
    image: github,
    title: 'GitHub'
  },
  {
    image: bitbucket,
    title: 'Bitbucket'
  },
  {
    image: dropbox,
    title: 'Dropbox'
  },
  {
    image: slack,
    title: 'Slack'
  },
  {
    image: dribbble,
    title: 'Dribbble'
  },
  {
    image: behance,
    title: 'Behance'
  }
]

const notificationData = [
  {
    icon: ShieldHalfIcon,
    title: 'Congratulations!',
    description: 'Your OS System successfully updated.'
  },
  {
    icon: AlertOctagonIcon,
    title: 'Check this out!',
    description: 'Please review this file.'
  },
  {
    icon: ShieldHalfIcon,
    title: 'An error occurred',
    description: 'There was a problem in your code.'
  }
]

let fullScreenOn = ref<boolean>(false)

const toggleFullScreen = () => {
  const document: any = window.document
  if (
    !document.fullscreenElement &&
    /* alternative standard method */ !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    }
    fullScreenOn.value = true
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    }
    fullScreenOn.value = false
  }
}
</script>
