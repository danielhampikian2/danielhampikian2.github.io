<template>
  <section id="about" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <img :src="ebook15" class="h-[500px] rounded-xl mx-auto" alt="" />
        </div>

        <div>
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >our About</span
          >
          <h2 class="text-4xl font-medium text-default-950 mt-5">About the Alchemist</h2>
          <p class="text-base mt-4">
            Lorem ipsum is simply Dummy text of the Printing and typesetting industry. lorem is
            simply dummy text
          </p>

          <ul role="list" class="my-6 space-y-2">
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-10 w-10 text-primary"></DotIcon>
              <p class="text-base">Lorem ipsum is smiply dummy text of the printing.</p>
            </li>
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-10 w-10 text-primary"></DotIcon>
              <p class="text-base">
                Lorem ipsum is smiply dummy text of the printing and lorem <br />
                Donec posuere vulputate.
              </p>
            </li>
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-10 w-10 text-primary"></DotIcon>
              <p class="text-base">Aenean at bibendum enim. In auctor consectetur urna.</p>
            </li>
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-10 w-10 text-primary"></DotIcon>
              <p class="text-base">Lorem ipsum is smiply dummy text of the printing.</p>
            </li>
          </ul>

          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 text-base py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-500"
            >Read More
            <MoveRightIcon class="h-6 w-6"></MoveRightIcon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ebook15 from '@/assets/images/landing/ebook/img-15.jpg'
import { DotIcon, MoveRightIcon } from 'lucide-vue-next'
</script>
