<template>
  <label
    :for="id ?? 'form-password'"
    class="mb-2 block text-base/normal font-semibold text-zinc-200"
    >{{ label ?? 'Password' }}</label
  >
  <div class="flex">
    <input
      :type="showPassword ? 'text' : 'password'"
      :id="id ?? 'form-password'"
      :placeholder="placeHolder ?? 'Enter your password'"
      :value="modelValue"
      @input="updateValue"
      v-bind="$attrs"
      class="form-password block w-full rounded-s border border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:ring-transparent"
    />
    <button
      type="button"
      @click="setShowPassword"
      class="-ms-px inline-flex items-center justify-center rounded-e border border-white/10 bg-transparent px-4 py-2.5"
    >
      <EyeIcon v-if="showPassword" class="password-eye-on h-5 w-5 text-zinc-100" />
      <EyeOffIcon v-else class="password-eye-off h-5 w-5 text-zinc-100" />
    </button>
  </div>

  <span v-if="error" class="mt-1 block text-red-500">{{ error ?? 'Incorrect password!' }}</span>
</template>

<script setup lang="ts">
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

type PasswordInputType = {
  id?: string
  value?: string
  label?: string
  placeHolder?: string
  error?: string
  modelValue?: string
}

const props = defineProps<PasswordInputType>()

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
