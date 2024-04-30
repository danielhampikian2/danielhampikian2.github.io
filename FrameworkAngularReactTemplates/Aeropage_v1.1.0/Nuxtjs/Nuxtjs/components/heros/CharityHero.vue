<template>
  <section
    id="home"
    class="relative bg-default-100 dark:bg-default-50 py-24 lg:py-32 bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
  >
    <div
      class="flex items-center overflow-hidden before:bg-primary/80 before:absolute before:inset-0 before:left-[63.67%] before:rounded-bl-3xl before:hidden lg:before:block"
    >
      <div
        class="bg-contain bg-right bg-no-repeat absolute -top-44 right-0 bottom-0 w-2/6"
        :style="{ backgroundImage: `url(${charityBg})` }"
      ></div>

      <div class="container">
        <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
          <div class="">
            <div class="flex flex-col justify-center">
              <h2 class="xl:text-5xl/tight sm:text-3xl text-2xl font-medium text-default-950 mb-4">
                Let's Collaborate and Achieve Greatness Together!
              </h2>
              <p class="text-base mt-5">
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida
                magna mi a libero.
              </p>
              <div class="mt-10">
                <a
                  href="#"
                  class="inline-flex items-center justify-center gap-2 text-base py-2 px-8 rounded-md text-white bg-primary hover:bg-primary-300 transition-all duration-700"
                  >Read More
                  <MoveRightIcon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div class="z-10">
            <div class="flex gap-4 md:gap-6 tilt items-center">
              <div class="flex flex-col gap-4 md:gap-6 w-full">
                <img :src="charityImg1" class="h-full w-full rounded-lg object-cover" alt="" />
              </div>
              <div class="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                <img
                  :src="charityImg2"
                  class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                  alt=""
                />
                <img
                  :src="charityImg3"
                  class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import charityBg from '@/assets/images/landing/charity/bg-1.png'
import charityImg1 from '@/assets/images/landing/charity/img-1.jpg'
import charityImg2 from '@/assets/images/landing/charity/img-2.jpg'
import charityImg3 from '@/assets/images/landing/charity/img-3.jpg'
import { MoveRightIcon } from 'lucide-vue-next'
</script>
