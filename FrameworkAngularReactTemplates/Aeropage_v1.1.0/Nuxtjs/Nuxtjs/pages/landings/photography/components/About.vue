<template>
  <section id="about" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
        <div>
          <img :src="photography7" alt="" />
        </div>

        <div>
          <h2 class="text-4xl font-medium text-default-950">
            Revealing the Splendor of the Animal Realm
          </h2>
          <p class="mb-6 mt-4 text-base">
            Our profound affection and reverence for animals propel us forward. We firmly believe
            that every living being, regardless of its size, holds a unique tale, and our fervor
            lies in capturing their extraordinary moments through the lens of our cameras.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 bg-primary px-7 py-2 text-base text-white transition-all hover:bg-primary-700"
            >Read More
            <MoveRightIcon class="h-6 w-6" />
          </a>

          <div class="mt-10 grid grid-cols-3 gap-6">
            <img :src="photography13" alt="" />
            <img :src="photography7" alt="" />
            <img :src="photography14" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import photography7 from '@/assets/images/landing/photography/img-7.jpg'
import photography13 from '@/assets/images/landing/photography/img-13.jpg'
import photography14 from '@/assets/images/landing/photography/img-14.jpg'

import { MoveRightIcon } from 'lucide-vue-next'
</script>
