<template>
  <AdminNavbar />
  <slot />
  <AdminFooter />

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup lang="ts">
import AdminNavbar from '@/layouts/partials/AdminNavbar.vue'
import AdminFooter from '@/layouts/partials/AdminFooter.vue'
import { onMounted } from 'vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

onMounted(() => {
  document.getElementsByTagName('body')[0].classList.add('bg-default-50')
})
</script>
