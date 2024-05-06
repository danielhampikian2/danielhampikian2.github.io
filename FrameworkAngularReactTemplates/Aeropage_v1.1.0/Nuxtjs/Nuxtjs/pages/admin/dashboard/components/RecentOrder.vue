<template>
  <div class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50">
    <div class="flex items-center justify-between border-b border-default-200 px-4 py-3">
      <h4 class="uppercase">Recent Orders</h4>
      <a
        href="javascript:void(0);"
        class="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-primary-700"
        >Export
        <UploadIcon class="ms-1.5 h-4 w-4" />
      </a>
    </div>

    <div class="overflow-auto">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-default-200">
            <thead>
              <tr class="bg-default-100">
                <th
                  v-for="(item, idx) in tableHead"
                  :key="idx"
                  scope="col"
                  class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                >
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-default-200">
              <tr v-for="(order, idx) in orderData" :key="idx" class="hover:bg-default-100">
                <td class="whitespace-nowrap px-4 py-4 text-sm font-medium text-default-600">
                  #{{ order.id }}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-default-600">
                  {{ order.product }}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-default-600">
                  {{ order.customer }}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-start text-default-600">
                  ${{ order.price }}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-start text-default-600">
                  <span
                    class="inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs font-medium capitalize"
                    :class="
                      order.status === 'pending'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : order.status === 'delivered'
                          ? 'bg-teal-500/10 text-teal-500'
                          : 'bg-red-500/10 text-red-500'
                    "
                  >
                    {{ order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UploadIcon } from 'lucide-vue-next'

const tableHead = ['#', 'Product', 'Customer', 'Price', 'Status']

const orderData = [
  {
    id: 98754,
    product: 'ASOS Ridley High',
    customer: 'Otto B',
    price: 79.49,
    status: 'pending'
  },
  {
    id: 98753,
    product: 'Marco Lightweight Shirt',
    customer: 'Mark P',
    price: 125.49,
    status: 'delivered'
  },
  {
    id: 98752,
    product: 'Half Sleeve Shirt',
    customer: 'Dave B',
    price: 35.49,
    status: 'declined'
  },
  {
    id: 98751,
    product: 'Lightweight Jacket',
    customer: 'Shreyu N',
    price: 49.49,
    status: 'declined'
  },
  {
    id: 98750,
    product: 'Marco Shoes',
    customer: 'Rik N',
    price: 69.49,
    status: 'declined'
  }
]
</script>
