<template>
  <form class="mt-10 shrink">
    <div class="mb-4">
      <PasswordInput label="New Password" v-model="userData.newPassword" />
    </div>

    <div class="mb-4">
      <PasswordInput label="Confirm New Password" v-model="userData.confirmPassword" />
    </div>

    <div class="mb-6 flex flex-col justify-center gap-4">
      <nuxt-link
        to="/auth/login"
        class="relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700"
      >
        Reset Password
      </nuxt-link>
    </div>
  </form>

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
          <FacebookIcon
            class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
          />
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0);"
          class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-pink-600"
        >
          <InstagramIcon
            class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
          />
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0);"
          class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-sky-600"
        >
          <TwitterIcon
            class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
          />
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0);"
          class="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-800"
        >
          <LinkedinIcon
            class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
          />
        </a>
      </li>
    </ul>
  </div>

  <p class="shrink text-center text-zinc-200">
    Back To ?
    <nuxt-link to="/auth/login" class="ms-1 text-primary">
      <b>Login</b>
    </nuxt-link>
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next'
import PasswordInput from '@/components/PasswordInput.vue'
import { ref } from 'vue'

const userData = ref({
  newPassword: '',
  confirmPassword: ''
})
</script>
