<template>
  <AuthLayout>
    <template v-slot:form>
      <form class="mt-10 shrink" @submit.prevent="handleLogin">
        <span v-if="error" class="mt-1 block text-red-500">Please provide valid credentials</span>
        <div class="mb-4">
          <label for="LogInEmailAddress" class="mb-2 block text-base/normal font-semibold text-zinc-200">Email address</label>
          <input
            class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            type="email"
            id="LogInEmailAddress"
            placeholder="Enter your email"
            v-model="userData.email"
          />
          <span class="mt-1 block text-red-500"></span>
        </div>

        <div class="mb-4">
          <PasswordInput v-model="userData.password" />
        </div>

        <div class="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2">
          <div class="inline-flex items-center">
            <input
              type="checkbox"
              class="h-4 w-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0"
              id="checkbox-signin"
            />
            <label class="ms-2 select-none align-middle text-base/none text-zinc-200" for="checkbox-signin">Remember me</label>
          </div>
          <router-link :to="{ name: 'auth.recover-password' }" class="border-b border-dashed text-zinc-200"
            ><small>Forgot your password?</small></router-link
          >
        </div>

        <div class="mb-6 text-center">
          <button
            type="submit"
            class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
          >
            Log In
          </button>
        </div>
      </form>
    </template>

    <template v-slot:bottom-link>
      <p class="shrink text-center text-zinc-200">
        Don't have an account ?
        <router-link :to="{ name: 'auth.register' }" class="ms-1 text-primary">
          <b>Register</b>
        </router-link>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import router from '@/router'

const useFakeAuth = useFakeAuthStore()

const userData = ref({
  email: 'test@test.com',
  password: 'password',
})

const route = useRoute()

const error = ref(false)

const handleLogin = () => {
  if (useFakeAuth.login(userData.value.email, userData.value.password)) {
    if (route.query.redirectFrom) {
      return router.push(`${route.query.redirectFrom}`)
    }
    return router.push('/')
  }
  error.value = true
}
</script>
