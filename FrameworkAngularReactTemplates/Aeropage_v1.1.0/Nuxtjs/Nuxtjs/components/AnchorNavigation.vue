<template>
  <div
    class="sticky top-40 rounded-lg border border-default-200 bg-white px-4 py-6 dark:bg-default-50"
  >
    <ul class="sidebar-nav mb-0 flex flex-col gap-1 py-0" id="ui-nav">
      <li class="group p-0" v-for="(item, idx) in elements" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import gumshoeMin from 'gumshoejs'
import type { PropType } from 'vue'
import { onMounted } from 'vue'

type ElementType = {
  id: string
  title: string
}

defineProps({
  elements: {
    type: Object as PropType<ElementType[]>
  }
})

function initgumshoes() {
  if (document.querySelector('#ui-nav a')) {
    new gumshoeMin('#ui-nav a', {
      offset: 100
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    initgumshoes()
  })
})
</script>
