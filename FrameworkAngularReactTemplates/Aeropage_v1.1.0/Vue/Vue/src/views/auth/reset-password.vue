<template>
  <AuthLayout>
    <template v-slot:form>
      <form class="mt-10 shrink">
        <div class="mb-4">
          <PasswordInput label="New Password" v-model="userData.newPassword" />
        </div>

        <div class="mb-4">
          <PasswordInput label="Confirm New Password" v-model="userData.confirmPassword" />
        </div>

        <div class="mb-6 flex flex-col justify-center gap-4">
          <router-link
            :to="{ name: 'auth.login' }"
            class="relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700"
          >
            Reset Password
          </router-link>
        </div>
      </form>
    </template>

    <template v-slot:bottom-link>
      <p class="shrink text-center text-zinc-200">
        Back To ?
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
import { ref } from 'vue'

const userData = ref({
  newPassword: '',
  confirmPassword: '',
})
</script>
