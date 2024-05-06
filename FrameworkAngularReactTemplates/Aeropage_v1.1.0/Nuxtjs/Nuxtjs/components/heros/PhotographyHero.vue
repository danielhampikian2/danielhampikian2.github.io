<template>
  <section id="home" class="relative overflow-hidden px-4 md:px-10">
    <div class="border border-primary/10 bg-primary/5">
      <div class="container">
        <div class="p-6">
          <div class="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span
                class="bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary shadow"
                >Animals Frame</span
              >
              <h1 class="my-4 max-w-lg text-4xl font-medium text-default-950 md:text-5xl/tight">
                Capturing the Essence of Animals, Frame by Frame
              </h1>
              <p class="md:text-lg">
                Our deep affection for animals inspires us to craft breathtaking and emotionally
                charged images that encapsulate the genuine nature of these remarkable beings.
              </p>

              <a
                href="#"
                class="group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-default-200 px-1 py-1 pe-4 text-default-950 transition-all duration-300 hover:bg-primary-600 hover:text-white"
              >
                <span
                  class="me-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-black"
                >
                  <ImageIcon class="h-5 w-5" />
                </span>
                Generate Portfolio
              </a>
            </div>

            <div class="mx-auto h-[695px] overflow-hidden">
              <div class="marquee grid grid-cols-2 gap-6">
                <div class="relative m-auto flex flex-col gap-6 overflow-hidden">
                  <div
                    class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    <img
                      v-for="(img, idx) in images"
                      :key="`group1-img${idx + 1}`"
                      class="aspect-1 h-full w-60 object-cover"
                      :src="img"
                      alt=""
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    <img
                      v-for="(img, idx) in images"
                      :key="`group2-img${idx + 1}`"
                      class="aspect-1 h-full w-60 object-cover"
                      :src="img"
                      alt=""
                    />
                  </div>
                </div>

                <div class="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                  <div
                    class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    <img
                      v-for="(img, idx) in images"
                      :key="`group3-img${idx + 1}`"
                      class="aspect-1 h-full w-60 object-cover"
                      :src="img"
                      alt=""
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    <img
                      v-for="(img, idx) in images"
                      :key="`group4-img${idx + 1}`"
                      class="aspect-1 h-full w-60 object-cover"
                      :src="img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/landing/photography/img-1.jpg'
import img2 from '@/assets/images/landing/photography/img-2.jpg'
import img3 from '@/assets/images/landing/photography/img-3.jpg'
import img4 from '@/assets/images/landing/photography/img-4.jpg'
import img5 from '@/assets/images/landing/photography/img-5.jpg'
import img6 from '@/assets/images/landing/photography/img-6.jpg'
import { ImageIcon } from 'lucide-vue-next'

const images = [img1, img2, img3, img4, img5, img6]
</script>
