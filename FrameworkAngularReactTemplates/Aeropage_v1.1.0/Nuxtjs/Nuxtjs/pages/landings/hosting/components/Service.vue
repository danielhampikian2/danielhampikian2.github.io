<template>
  <section id="services" class="py-10 lg:py-20">
    <div class="container">
      <div class="mx-auto mb-12 max-w-xl text-center">
        <h2 class="text-3xl font-medium text-default-950 md:text-4xl">Comprehensive Plan</h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        <ServiceCard4 v-for="(service, idx) in serviceData" :key="idx" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceType } from '@/types/landing'
import {
  BringToFrontIcon,
  CheckIcon,
  FileIcon,
  FolderDownIcon,
  LayersIcon,
  NavigationIcon,
  ShieldIcon,
  Table2Icon
} from 'lucide-vue-next'
import ServiceCard4 from '@/components/widgets/ServiceCard4.vue'

const serviceData: ServiceType[] = [
  {
    icon: NavigationIcon,
    title: 'Domain name configuration',
    description: 'Streamline the connection of your site to your domain name with Vault.'
  },
  {
    icon: LayersIcon,
    title: '20/8 network security',
    description: 'Enjoy peace of mind with constant network security for your visitors.'
  },
  {
    icon: ShieldIcon,
    title: 'User-friendly control panel',
    description:
      'Effortlessly manage app installations and backups with the industry-standard cPanel.'
  },
  {
    icon: Table2Icon,
    title: 'Scalable resources',
    description: `Easily boost your site's CPU/RAM for increased performance.`
  },
  {
    icon: FolderDownIcon,
    title: 'Worldwide Data Centers',
    description:
      'Enhance page loading speed and improve the customer experience with Vault hosting.'
  },
  {
    icon: BringToFrontIcon,
    title: 'Click installation',
    description: 'Simplify app integration effortlessly with Installation.'
  },
  {
    icon: FileIcon,
    title: 'Submit Support Request',
    description: 'Initiate a Support Request for Prompt Assistance and Timely Resolution.'
  },
  {
    icon: LayersIcon,
    title: 'Choose Site Transfer',
    description: 'Streamline the migration process with added security measures.'
  },
  {
    icon: CheckIcon,
    title: 'Completion',
    description: 'Your request is now fulfilled. Thank you for choosing us!'
  }
]
</script>
