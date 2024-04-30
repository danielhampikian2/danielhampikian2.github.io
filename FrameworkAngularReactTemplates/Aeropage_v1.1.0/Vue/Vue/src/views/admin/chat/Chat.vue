<template>
  <div class="w-full overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50">
    <div class="border-b border-default-200 px-6 py-3">
      <div class="flex flex-wrap items-center justify-between gap-3 py-1.5">
        <div class="sm:w-7/12">
          <div class="flex items-center gap-2">
            <img :src="avatar5" class="me-2 h-9 rounded-full" alt="" />
            <div>
              <h5 class="text-base font-medium text-default-700">John Kish</h5>
              <p class="mt-1.5 flex items-center text-xs text-default-400">
                <CircleIcon class="me-1 text-red-400 h-3 w-3 fill-red-400" />
                Offline
              </p>
            </div>
          </div>
        </div>

        <div class="w-auto flex items-center">
          <a href="javascript: void(0);" class="inline-block p-1.5">
            <PhoneIcon class="text-default-900 w-5 h-5" />
          </a>
          <a href="javascript: void(0);" class="inline-block p-1.5">
            <VideoIcon class="text-default-900 w-5 h-5" />
          </a>
          <a href="javascript: void(0);" class="inline-block p-1.5">
            <UsersIcon class="text-default-900 w-5 h-5" />
          </a>
          <a href="javascript: void(0);" class="inline-block p-1.5">
            <Trash2Icon class="text-default-900 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div
      class="h-[calc(100vh-480px)] overflow-y-auto p-6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
    >
      <div class="space-y-4">
        <!-- Chat Left -->
        <div
          v-for="(item, idx) in conversationData"
          :key="idx"
          class="flex w-11/12 gap-3"
          :class="item.isCurrent ? 'ms-auto flex-row-reverse text-end' : 'group text-start'"
        >
          <div class="text-center">
            <img :src="item.user.image" class="h-8 rounded-md" />
            <p class="pt-0.5 text-xs">{{ item.time }}</p>
          </div>

          <div class="max-w-3/4">
            <div class="rounded p-3" :class="item.isCurrent ? 'bg-primary' : 'bg-default-100'">
              <p class="relative text-xs font-bold" :class="item.isCurrent ? 'text-white/90' : 'text-default-800'">
                {{ item.user.name }}
              </p>
              <p class="pt-1" :class="{ 'text-white/90': item.isCurrent }">{{ item.message }}</p>
            </div>

            <div v-if="idx == conversationData.length - 1" class="mt-3 rounded border border-default-200">
              <div class="p-3">
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="h-12 w-12">
                      <span class="inline-flex h-full w-full items-center justify-center rounded bg-primary text-white"> .ZIP </span>
                    </div>
                    <div class="text-start text-default-400">
                      <a href="javascript:void(0);" class="text-sm font-bold">sketch.zip</a>
                      <p class="text-sm">2.3 MB</p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" class="btn !text-xl">
                    <DownloadIcon class="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-default-200 bg-white p-6 dark:bg-default-50">
      <form name="chat-form" class="flex items-center gap-2">
        <input
          type="text"
          class="form-input w-full rounded border-none bg-default-100 text-default-900 placeholder:text-default-600 focus:ring-primary"
          placeholder="Enter your text"
          required
        />
        <div class="flex w-auto gap-1">
          <a href="#" class="rounded bg-default-200 px-3 py-2 text-default-800 hover:bg-default-800/20">
            <PaperclipIcon class="h-4 w-4" />
          </a>
          <button
            class="inline-flex items-center justify-center gap-2 rounded bg-primary px-3 py-2 text-white transition-all duration-300 hover:bg-primary-700"
          >
            Send
            <SendIcon class="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleIcon, PhoneIcon, VideoIcon, UsersIcon, Trash2Icon, PaperclipIcon, SendIcon, DownloadIcon } from 'lucide-vue-next'

import type { UserType } from '@/types/admin'

type ConversationType = {
  user: UserType
  time: string
  message: string
  isCurrent?: boolean
}

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'

const userData: UserType[] = [
  {
    image: avatar5,
    name: 'John K',
  },
  {
    image: avatar1,
    name: 'Diane B',
  },
]

const conversationData: ConversationType[] = [
  {
    user: userData[0],
    time: '10:00',
    message: 'Hello!',
  },
  {
    user: userData[1],
    time: '10:01',
    message: 'Hi, How are you? What about our next meeting?',
    isCurrent: true,
  },
  {
    user: userData[0],
    time: '10:01',
    message: 'Yeah everything is fine',
  },
  {
    user: userData[1],
    time: '10:02',
    message: `Wow that's great`,
    isCurrent: true,
  },
  {
    user: userData[0],
    time: '10:02',
    message: `Let's have it today if you are free`,
  },
  {
    user: userData[1],
    time: '10:03',
    message: `Sure thing! let me know if 2pm works for you`,
    isCurrent: true,
  },
  {
    user: userData[0],
    time: '10:04',
    message: `Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?`,
  },
  {
    user: userData[0],
    time: '10:04',
    message: `We can also discuss about the presentation talk format if you have some extra mins`,
  },
  {
    user: userData[1],
    time: '10:05',
    message: `3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here...`,
    isCurrent: true,
  },
]
</script>
