<template>
  <div class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50">
    <div class="flex items-center justify-between border-b border-default-200 px-4 py-3">
      <h4 class="text-lg text-default-900">Sources</h4>
      <a
        href="javascript:void(0);"
        class="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-primary-700"
      >
        Export
        <UploadIcon class="ms-1.5 h-4 w-4" />
      </a>
    </div>

    <div class="">
      <table class="w-full">
        <thead class="border-b border-default-200 bg-default-100">
          <tr>
            <th class="p-2 text-start text-sm font-semibold text-default-900">Types</th>
            <th class="p-2 text-start text-sm font-semibold text-default-900">Sessions</th>
            <th class="p-2 text-start text-sm font-semibold text-default-900">Views</th>
          </tr>
        </thead>
        <tbody class="divide-y dark:divide-default-200">
          <tr>
            <td class="p-2">Direct</td>
            <td class="p-2">358</td>
            <td class="p-2">250</td>
          </tr>
          <tr>
            <td class="p-2">Referral</td>
            <td class="p-2">501</td>
            <td class="p-2">50</td>
          </tr>
          <tr>
            <td class="p-2">Email</td>
            <td class="p-2">460</td>
            <td class="p-2">600</td>
          </tr>
          <tr>
            <td class="p-2">Organic</td>
            <td class="p-2">920</td>
            <td class="p-2">150</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UploadIcon } from 'lucide-vue-next'
</script>
