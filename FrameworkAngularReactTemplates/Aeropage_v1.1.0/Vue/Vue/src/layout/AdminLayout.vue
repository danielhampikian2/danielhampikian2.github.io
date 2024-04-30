<template>
  <AdminNavbar />
  <slot />
  <AdminFooter />
  <BackToTop />
</template>

<script setup lang="ts">
import AdminNavbar from '@/layout/partials/AdminNavbar.vue'
import AdminFooter from '@/layout/partials/AdminFooter.vue'
import { onMounted } from 'vue'
import BackToTop from '@/layout/partials/BackToTop.vue'

onMounted(() => {
  document.getElementsByTagName('body')[0].classList.add('bg-default-50')
})
</script>
