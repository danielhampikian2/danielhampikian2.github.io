<template>
  <section id="about" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
        <div class="relative mb-20 lg:mb-0">
          <div class="relative">
            <img :src="startupImg3" class="mx-auto rounded-xl" alt="" />
          </div>
          <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
            <img :src="startupImg10" class="h-full rounded-xl" alt="" />
          </div>
        </div>

        <div>
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >About Our Studio</span
          >
          <h2 class="mt-6 text-4xl/tight font-medium text-default-950">
            We trust designers driven by passion
          </h2>
          <p class="mt-5 text-base">
            Etiam fermentum vehicula faucibus. Praesent ullamcorper urna id arcu molestie
            scelerisque. Sed imperdiet tristique mauris et faucibus. Maecenas semper augue non
            fringilla placerat. Curabitur luctus erat sit amet ultricies aliquam. Donec dictum
            convallis mauris et maximus. Nullam massa arcu, porta quis felis et, eleifend varius
            quam.
          </p>
          <ul role="list" class="mt-6 space-y-2">
            <li class="flex items-center gap-2">
              <MinusIcon class="inline-block h-7 w-7 text-primary" />
              <span class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
            </li>
            <li class="flex items-center gap-2">
              <MinusIcon class="inline-block h-7 w-7 text-primary" />
              <span class="text-base">Vivamus hendrerit eros vitae tincidunt vulputate.</span>
            </li>
            <li class="flex items-center gap-2">
              <MinusIcon class="inline-block h-7 w-7 text-primary" />
              <span class="text-base">Aenean at bibendum enim. In auctor consectetur urna.</span>
            </li>
            <li class="flex items-center gap-2">
              <MinusIcon class="inline-block h-7 w-7 text-primary" />
              <span class="text-base">Proin ut gravida lorem, quis scelerisque metus.</span>
            </li>
          </ul>

          <div class="mt-10">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-default-300 px-8 py-2 text-base text-default-900 transition-all hover:border-primary hover:bg-primary hover:text-white"
              >Read More
              <MoveRightIcon class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import startupImg3 from '@/assets/images/landing/startup/img-3.jpg'
import startupImg10 from '@/assets/images/landing/startup/img-10.jpg'
import { MinusIcon, MoveRightIcon } from 'lucide-vue-next'
</script>
