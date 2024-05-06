<template>
  <AdminLayout>
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
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layout/AdminLayout.vue'
import AdminPageTitle from '@/layout/partials/AdminPageTitle.vue'
import ContactList from '@/views/admin/chat/ContactList.vue'
import Chat from '@/views/admin/chat/Chat.vue'
</script>
