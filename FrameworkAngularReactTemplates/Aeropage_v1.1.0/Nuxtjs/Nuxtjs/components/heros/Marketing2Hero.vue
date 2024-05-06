<template>
  <section id="home" class="relative flex items-center justify-center overflow-hidden py-[164px]">
    <div class="absolute inset-0">
      <img :src="marketing2Bg2" class="h-full w-full dark:hidden" alt="" />
      <img :src="marketing2Bg2Dark" class="hidden h-full w-full dark:block" alt="" />
    </div>

    <div class="container">
      <div class="relative">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div class="mx-auto max-w-md text-center lg:ms-0 lg:text-start">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >startups Marketing</span
            >
            <h2 class="my-5 text-4xl font-medium text-default-950 md:text-5xl/tight">
              Global Marketing Consulting Firm
            </h2>
            <p class="mb-10 text-base">
              We are a worldwide marketing consultancy providing innovative solutions to our
              clientele.
            </p>
            <a
              href="#"
              class="rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-700"
            >
              Reach Out to Us
            </a>
          </div>

          <div>
            <div class="relative">
              <img :src="marketing2Img1" class="mx-auto rounded-3xl" alt="" />

              <div class="hidden xl:block">
                <div class="absolute -start-52 top-10">
                  <div class="inline-block">
                    <div
                      class="rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80"
                    >
                      <div class="max-w-sm px-4 py-4 text-center">
                        <p class="text-base text-default-950">
                          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute -end-40 bottom-20 top-auto">
                  <div>
                    <div
                      class="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80"
                    >
                      <div class="px-5 py-3">
                        <h5 class="text-base font-medium">Marketing Consulting</h5>
                      </div>
                    </div>
                  </div>

                  <div class="my-2">
                    <div
                      class="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80"
                    >
                      <div class="px-5 py-3">
                        <h5 class="text-base font-medium">Social Media Marketing</h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      class="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80"
                    >
                      <div class="px-5 py-3">
                        <h5 class="text-base font-medium">Search Engine Optimization</h5>
                      </div>
                    </div>
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
import marketing2Bg2 from '@/assets/images/landing/marketing-2/bg-2.png'
import marketing2Bg2Dark from '@/assets/images/landing/marketing-2/bg-2-dark.jpg'
import marketing2Img1 from '@/assets/images/landing/marketing-2/img-1.jpg'
</script>
