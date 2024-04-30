<template>
  <AdminLayout>
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
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layout/AdminLayout.vue'
import AdminPageTitle from '@/layout/partials/AdminPageTitle.vue'
import Buttons from '@/views/ui-kit/Buttons.vue'
import Badges from '@/views/ui-kit/Badges.vue'
import Alerts from '@/views/ui-kit/Alerts.vue'
import Dropdowns from '@/views/ui-kit/Dropdowns.vue'
import Accordions from '@/views/ui-kit/Accordions.vue'
import NavTabs from '@/views/ui-kit/NavTabs.vue'
import Pagination from '@/views/ui-kit/Pagination.vue'
import Modals from '@/views/ui-kit/Modals.vue'
import Popover from '@/views/ui-kit/Popover.vue'
import Tooltip from '@/views/ui-kit/Tooltip.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorNavigationData = [
  {
    id: 'buttons',
    title: 'Buttons',
  },
  {
    id: 'badges',
    title: 'Badges',
  },
  {
    id: 'alerts',
    title: 'Alerts',
  },
  {
    id: 'dropdowns',
    title: 'Dropdowns',
  },
  {
    id: 'accordions',
    title: 'Accordions',
  },
  {
    id: 'nav-tabs',
    title: 'Nav Tabs',
  },
  {
    id: 'paginations',
    title: 'Paginations',
  },
  {
    id: 'modals',
    title: 'Modals',
  },
  {
    id: 'popover',
    title: 'Popover',
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
  },
]
</script>
