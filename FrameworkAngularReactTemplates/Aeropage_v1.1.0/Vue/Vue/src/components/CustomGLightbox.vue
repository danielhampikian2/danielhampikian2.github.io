<template>
  <slot />
</template>

<script setup lang="ts">
import GLightbox from 'glightbox'
import { onMounted } from 'vue'

onMounted(() => {
  const lightbox = GLightbox({ selector: '.glightbox', title: false })
})
</script>
