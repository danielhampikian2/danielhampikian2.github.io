<template>
  <AdminPageTitle title="Ui Components" subtitle="Admin" />

  <section class="pb-10">
    <div class="container relative">
      <div class="grid gap-6 lg:grid-cols-4">
        <div class="lg:col-span-3">
          <div class="space-y-6">
            <Buttons />

            <Badges />

            <Alerts />

            <Dropdowns />

            <Accordions />

            <NavTabs />

            <Pagination />

            <Modals />

            <Popover />

            <Tooltip />
          </div>
        </div>

        <div class="col-span-1 hidden md:block">
          <AnchorNavigation :elements="anchorNavigationData" />
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
import Buttons from '@/pages/ui-kit/components/Buttons.vue'
import Badges from '@/pages/ui-kit/components/Badges.vue'
import Alerts from '@/pages/ui-kit/components/Alerts.vue'
import Dropdowns from '@/pages/ui-kit/components/Dropdowns.vue'
import Accordions from '@/pages/ui-kit/components/Accordions.vue'
import NavTabs from '@/pages/ui-kit/components/NavTabs.vue'
import Pagination from '@/pages/ui-kit/components/Pagination.vue'
import Modals from '@/pages/ui-kit/components/Modals.vue'
import Popover from '@/pages/ui-kit/components/Popover.vue'
import Tooltip from '@/pages/ui-kit/components/Tooltip.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorNavigationData = [
  {
    id: 'buttons',
    title: 'Buttons'
  },
  {
    id: 'badges',
    title: 'Badges'
  },
  {
    id: 'alerts',
    title: 'Alerts'
  },
  {
    id: 'dropdowns',
    title: 'Dropdowns'
  },
  {
    id: 'accordions',
    title: 'Accordions'
  },
  {
    id: 'nav-tabs',
    title: 'Nav Tabs'
  },
  {
    id: 'paginations',
    title: 'Paginations'
  },
  {
    id: 'modals',
    title: 'Modals'
  },
  {
    id: 'popover',
    title: 'Popover'
  },
  {
    id: 'tooltip',
    title: 'Tooltip'
  }
]
</script>
