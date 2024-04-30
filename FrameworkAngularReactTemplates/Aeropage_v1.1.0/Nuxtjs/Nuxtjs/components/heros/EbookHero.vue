<template>
  <section
    id="home"
    class="pb-40 pt-40 flex items-center justify-center relative overflow-hidden bg-cover bg-gradient-to-l from-primary-500/5 to-primary-500/10 via-primary-500/0"
  >
    <div class="absolute top-1/4 start-[10%] -z-1 hidden 2xl:block">
      <img :src="ebookBg2" class="h-28" alt="" />
    </div>

    <div class="container">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-6 relative items-center">
        <div class="col-span-1">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Digital Ebooks</span
          >
          <h2 class="md:text-5xl/tight text-4xl font-medium text-default-950 my-5">
            Ebooks to Foster Your Personal and Professional Development
          </h2>
          <p class="text-base font-medium text-default-950 mb-10">
            Our meticulously selected ebooks ensure a top-notch reading journey, spanning across
            fiction, non-fiction, self-help, and educational genres.
          </p>
          <div class="flex flex-wrap items-center gap-6 mt-10">
            <a
              href="#"
              class="text-lg py-2 px-8 rounded-lg text-white border border-primary bg-primary/90 hover:border-primary hover:bg-primary transition-all duration-300"
              >Download Now</a
            >
            <a
              href="#"
              class="text-lg font-medium py-2 px-8 rounded-lg border border-primary text-primary hover:border-primary hover:text-white hover:bg-primary transition-all duration-300"
              >Browse Ebook</a
            >
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex items-end justify-center">
            <div class="-me-40 z-10 hidden md:block">
              <img
                :src="ebook17"
                class="h-60 rounded-tr-[90px] rounded-bl-[90px] border-4 border-default-100"
                alt=""
              />
            </div>
            <div class="relative">
              <img :src="ebook16" class="h-[500px] rounded-t-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ebookBg2 from '@/assets/images/landing/ebook/bg-2.png'
import ebook16 from '@/assets/images/landing/ebook/img-16.jpg'
import ebook17 from '@/assets/images/landing/ebook/img-17.jpg'
</script>
