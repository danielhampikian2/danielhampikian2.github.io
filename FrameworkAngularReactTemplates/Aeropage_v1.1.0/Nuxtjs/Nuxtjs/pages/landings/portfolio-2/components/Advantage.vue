<template>
  <section id="advantage" class="py-10 lg:py-20">
    <div class="container">
      <div class="mb-10 flex items-end justify-between">
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Advantage</span
          >
          <h2 class="mt-4 text-4xl font-medium capitalize text-default-950">
            Abilities & Resources
          </h2>
          <p class="mt-4 text-base">
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-6">
        <div v-for="(item, idx) in abilities" :key="idx" class="mx-auto text-center">
          <div
            class="flex h-44 w-44 items-center justify-center rounded-full border border-primary/20 bg-primary/10"
          >
            <div class="text-center">
              <component :is="item.icon" class="h-10 w-10 text-default-950" />
              <h3 class="mt-4 text-2xl font-medium text-default-950">{{ item.ability }}%</h3>
            </div>
          </div>
          <h2 class="mt-5 text-2xl font-medium text-default-950">{{ item.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  FigmaIcon,
  InstagramIcon,
  LayersIcon,
  LinkedinIcon,
  TriangleIcon,
  TwitterIcon
} from 'lucide-vue-next'

const abilities = [
  {
    icon: FigmaIcon,
    title: 'Figma',
    ability: 94
  },
  {
    icon: TriangleIcon,
    title: 'Sketch',
    ability: 82
  },
  {
    icon: InstagramIcon,
    title: 'Photoshop',
    ability: 98
  },
  {
    icon: TwitterIcon,
    title: 'Adobe xDS',
    ability: 84
  },
  {
    icon: LinkedinIcon,
    title: 'Invisionapp',
    ability: 78
  },
  {
    icon: LayersIcon,
    title: 'Illustrator',
    ability: 84
  }
]
</script>
