<template>
  <div class="relative bg-cover bg-center bg-no-repeat p-2 lg:p-0" :style="{ backgroundImage: `url(${authBg})` }">
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="flex h-screen w-full items-center justify-center">
      <div class="max-w-4xl overflow-hidden rounded-lg bg-black/60 backdrop-blur-3xl">
        <div class="grid lg:grid-cols-2">
          <div class="hidden py-2.5 ps-2.5 lg:block">
            <div class="relative h-full overflow-hidden rounded-md">
              <div class="absolute inset-0 bg-black/40"></div>
              <img :src="authImg" alt="" class="h-full max-w-full" />
            </div>
          </div>
          <div class="h-full">
            <div class="flex h-full flex-col p-6">
              <router-link :to="{ name: 'landing' }" class="mb-8 block shrink">
                <img class="h-8" :src="logoLight" alt="images" />
              </router-link>

              <slot name="form" />

              <template v-if="socialLinks">
                <div class="my-6 flex shrink items-center">
                  <div class="mt-px flex-auto border-t border-dashed border-white/20"></div>
                  <div class="mx-4 text-zinc-100">Or</div>
                  <div class="mt-px flex-auto border-t border-dashed border-white/20"></div>
                </div>

                <!-- social-->
                <div class="mb-6 shrink text-center">
                  <p class="mb-6 text-xl text-white">Continue in with</p>
                  <ul class="flex flex-wrap items-center justify-center gap-2">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-500"
                      >
                        <FacebookIcon class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-pink-600"
                      >
                        <InstagramIcon class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-sky-600"
                      >
                        <TwitterIcon class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-800"
                      >
                        <LinkedinIcon class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white" />
                      </a>
                    </li>
                  </ul>
                </div>
              </template>

              <slot name="bottom-link" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import authBg from '@/assets/images/other/auth-bg.jpg'
import authImg from '@/assets/images/other/auth-img.jpg'
import logoLight from '@/assets/images/logo-light.png'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next'

defineProps({
  socialLinks: {
    type: Boolean,
    default: true,
  },
})
</script>
