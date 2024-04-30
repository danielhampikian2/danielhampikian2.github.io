<template>
  <form class="mt-10 shrink" @submit.prevent="handleRegister">
    <div v-if="error" class="my-1 block text-red-500">Please Provide valid credentials</div>

    <div class="mb-4">
      <label for="LogInFullName" class="mb-2 block text-base/normal font-semibold text-zinc-200"
        >Full Name</label
      >
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
      <label for="LogInEmailAddress" class="mb-2 block text-base/normal font-semibold text-zinc-200"
        >Email address</label
      >
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
        <label
          class="ms-2 select-none align-middle text-base/none text-zinc-200"
          for="checkbox-signin"
          >Remember me</label
        >
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
    Already have an account ?
    <nuxt-link to="/auth/login" class="ms-1 text-primary">
      <b>Login</b>
    </nuxt-link>
  </p>
</template>

<script setup lang="ts">
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'auth'
})

import PasswordInput from '@/components/PasswordInput.vue'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import { ref } from 'vue'

const useFakeAuth = useFakeAuthStore()

const userData = ref({
  fullName: '',
  email: '',
  password: ''
})

const error = ref(false)

const router = useRouter()

const handleRegister = () => {
  if (
    useFakeAuth.register(userData.value.fullName, userData.value.email, userData.value.password)
  ) {
    if (router.currentRoute.value.redirectedFrom) {
      return router.push(`${router.currentRoute.value.redirectedFrom}`)
    }
    return router.push('/')
  }
  error.value = true
}
</script>
