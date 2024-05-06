<template>
  <slot />
</template>

<script setup lang="ts">
import GLightbox from 'glightbox'
import { onMounted } from 'vue'

let lightboxInstance: any

onMounted(() => {
  lightboxInstance = GLightbox({ title: false })
})

onUnmounted(() => lightboxInstance?.destroy())
</script>
