<template>
  <div class="my-auto text-center">
    <h4 class="mb-4 text-2xl font-bold text-white">See you Again!</h4>
    <p class="mx-auto mb-5 max-w-sm text-default-300">You are now successfully sign out.</p>
    <div class="flex items-start justify-center">
      <img :src="logoutImg" alt="" class="h-40" />
    </div>
  </div>

  <p class="shrink text-center text-zinc-200">
    Already have an account ?
    <nuxt-link to="/auth/login" class="ms-1 text-primary">
      <b>Login</b>
    </nuxt-link>
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

import logoutImg from '@/assets/images/other/logout.png'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import { onMounted } from 'vue'

const useFakeAuth = useFakeAuthStore()

onMounted(() => {
  useFakeAuth.logout()
})
</script>
