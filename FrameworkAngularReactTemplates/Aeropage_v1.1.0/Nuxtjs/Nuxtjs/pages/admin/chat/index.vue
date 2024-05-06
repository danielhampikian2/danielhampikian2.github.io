<template>
  <AdminPageTitle title="Chat" subtitle="Admin" />

  <section>
    <div class="container">
      <div class="my-6 space-y-6">
        <div class="grid gap-4 lg:grid-cols-3">
          <div class="lg:col-span-1">
            <ContactList />
          </div>

          <div class="lg:col-span-2">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import AdminPageTitle from '@/layouts/partials/AdminPageTitle.vue'
import ContactList from '@/pages/admin/chat/components/ContactList.vue'
import Chat from '@/pages/admin/chat/components/Chat.vue'
</script>
