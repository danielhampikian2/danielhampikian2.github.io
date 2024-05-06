<template>
  <AuthLayout>
    <template v-slot:form>
      <form class="mt-10 shrink" @submit.prevent="handleRegister">
        <div v-if="error" class="my-1 block text-red-500">Please Provide valid credentials</div>

        <div class="mb-4">
          <label for="LogInFullName" class="mb-2 block text-base/normal font-semibold text-zinc-200">Full Name</label>
          <input
            class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            type="text"
            id="LogInFullName"
            v-model="userData.fullName"
            placeholder="Enter your Full Name"
          />
          <span class="mt-1 block text-red-500"></span>
        </div>

        <div class="mb-4">
          <label for="LogInEmailAddress" class="mb-2 block text-base/normal font-semibold text-zinc-200">Email address</label>
          <input
            class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            type="email"
            id="LogInEmailAddress"
            v-model="userData.email"
            placeholder="Enter your email"
          />
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
        </div>

        <div class="mb-6 text-center">
          <button
            class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
            type="submit"
          >
            Register
          </button>
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
import PasswordInput from '@/components/PasswordInput.vue'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const useFakeAuth = useFakeAuthStore()

const userData = ref({
  fullName: '',
  email: '',
  password: '',
})

const error = ref(false)

const route = useRoute()

const handleRegister = () => {
  if (useFakeAuth.register(userData.value.fullName, userData.value.email, userData.value.password)) {
    if (route.query.redirectFrom) {
      return router.push(`${route.query.redirectFrom}`)
    }
    return router.push('/')
  }
  error.value = true
}
</script>
