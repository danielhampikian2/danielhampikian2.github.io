<template>
  <div
    class="relative bg-cover bg-center bg-no-repeat p-2 lg:p-0"
    :style="{ backgroundImage: `url(${authBg})` }"
  >
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
              <nuxt-link to="/" class="mb-8 block shrink">
                <img class="h-8" :src="logoLight" alt="images" />
              </nuxt-link>

              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import authBg from '@/assets/images/other/auth-bg.jpg'
import authImg from '@/assets/images/other/auth-img.jpg'
import logoLight from '@/assets/images/logo-light.png'
</script>
