<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'assets/css/style.css'

definePageMeta({
  middleware: ['auth']
})

useHead({
  title: 'AeroPage - Tailwind CSS Multipurpose One Page Landing Template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: 'Coderthemes' },
    {
      name: 'description',
      content:
        'Tailwind CSS Saas & Software Landing Page Template, Portfolio, business, clean, modern, multipurpose, tailwind css.'
    }
  ]
})

useSeoMeta({
  title: 'AeroPage - Tailwind CSS Multipurpose One Page Landing Template',
  description:
    'Tailwind CSS Saas & Software Landing Page Template, Portfolio, business, clean, modern, multipurpose, tailwind css.'
})
</script>
