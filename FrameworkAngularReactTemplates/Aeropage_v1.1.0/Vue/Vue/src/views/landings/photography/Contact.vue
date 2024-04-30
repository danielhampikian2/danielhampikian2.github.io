<template>
  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="border border-primary/10 bg-primary/5 p-14">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl/tight font-medium text-default-950">Embark on Your Animal Photography Adventure Now</h2>
            <p class="mb-7 mt-4 text-base">Dive into the enchanting realm of animal photography alongside our seasoned team.</p>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
              >Contact us
              <MoveRightIcon class="h-6 w-6" />
            </a>
          </div>

          <div>
            <img :src="photography11" class="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
import photography11 from '@/assets/images/landing/photography/img-11.jpg'
</script>
