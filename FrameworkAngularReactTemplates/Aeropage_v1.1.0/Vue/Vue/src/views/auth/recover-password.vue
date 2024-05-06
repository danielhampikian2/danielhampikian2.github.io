<template>
  <AuthLayout>
    <template v-slot:form>
      <form class="mt-10 shrink">
        <div class="mb-4">
          <label for="LogInEmailAddress" class="mb-2 block text-base/normal font-semibold text-gray-200">Email address</label>
          <input
            class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            type="email"
            id="LogInEmailAddress"
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-6 flex flex-col justify-center gap-4">
          <router-link
            :to="{ name: 'auth.reset-password' }"
            class="relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700"
          >
            Reset Password
          </router-link>
          <router-link
            :to="{ name: 'auth.login' }"
            class="relative inline-flex w-full items-center justify-center rounded border border-primary px-6 py-3 text-base capitalize text-primary transition-all hover:bg-primary hover:text-white"
          >
            Go to Login
          </router-link>
        </div>
      </form>
    </template>

    <template v-slot:bottom-link>
      <p class="shrink text-center text-zinc-200">
        Already have an account ?
        <router-link :to="{ name: 'auth.login' }" class="ms-1 text-primary">
          <b>Login</b>
        </router-link>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
</script>
