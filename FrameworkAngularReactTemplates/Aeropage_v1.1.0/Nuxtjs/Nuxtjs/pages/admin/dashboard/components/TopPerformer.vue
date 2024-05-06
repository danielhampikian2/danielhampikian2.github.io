<template>
  <div class="rounded-md border border-default-200 bg-white dark:bg-default-50">
    <div class="border-b border-default-200 px-6 py-3">
      <h4 class="text-lg text-default-900">Top Performers</h4>
    </div>

    <div
      class="h-[440px] divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1"
    >
      <div v-for="(user, idx) in userData" :key="idx" class="flex items-center p-2.5">
        <img :src="user.image" class="me-3 h-12 rounded-full" alt="shreyu" />
        <div class="flex-grow">
          <h5 class="mt-1 text-default-900">{{ user.name }}</h5>
          <h6 class="mt-1 text-default-600">{{ user.role }}</h6>
        </div>
        <div class="h-4">
          <div
            class="hs-dropdown relative inline-flex [--placement:left-top] rtl:[--placement:bottom-left]"
          >
            <button type="button" class="hs-dropdown-toggle rounded">
              <MoreVerticalIcon class="h-4 w-4" />
            </button>

            <div
              class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white py-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
            >
              <a
                class="mx-1.5 flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                href="javascript:;"
              >
                <PencilIcon class="me-1.5 h-4 w-4" />
                <span>Edit</span>
              </a>
              <a
                class="mx-1.5 flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                href="javascript:;"
              >
                <LogOutIcon class="me-1.5 h-4 w-4" />
                <span>Remove from Team</span>
              </a>
              <hr class="my-2 border-default-200" />
              <a
                class="mx-1.5 flex items-center rounded px-3 py-2 text-red-500 transition-all hover:bg-red-500/10"
                href="javascript:;"
              >
                <Trash2Icon class="me-1.5 h-4 w-4" />
                <span>Delete</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar7 from '@/assets/images/avatars/img-7.jpg'
import avatar8 from '@/assets/images/avatars/img-8.jpg'
import avatar9 from '@/assets/images/avatars/img-9.jpg'

import { LogOutIcon, MoreVerticalIcon, PencilIcon, Trash2Icon } from 'lucide-vue-next'

import type { UserType } from '@/types/admin'

const userData: UserType[] = [
  {
    image: avatar7,
    name: 'Saske N',
    role: 'Senior Sales Guy'
  },
  {
    image: avatar9,
    name: 'Greeva Y',
    role: 'Social Campaign'
  },
  {
    image: avatar4,
    name: 'Nik G',
    role: 'Inventory Manager'
  },
  {
    image: avatar1,
    name: 'Hardik G',
    role: 'Sales Person'
  },
  {
    image: avatar8,
    name: 'GB Patel G',
    role: 'Sales Person'
  },
  {
    image: avatar2,
    name: 'Jessica B',
    role: 'Inventory Senior Manager'
  },
  {
    image: avatar3,
    name: 'Tony S',
    role: 'Sales Guy'
  }
]
</script>
