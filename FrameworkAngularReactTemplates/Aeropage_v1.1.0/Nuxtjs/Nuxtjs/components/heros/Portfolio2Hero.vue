<template>
  <section
    id="home"
    class="flex items-center justify-center overflow-hidden bg-gradient-to-t from-red-600/40 via-violet-600/40 to-blue-600/40 py-10 dark:from-gray-700 dark:via-gray-900 dark:to-black"
  >
    <div class="container">
      <div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
        <div>
          <span
            class="rounded-md border border-white/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950"
            >App Designer</span
          >
          <h2 class="mt-3 text-5xl/snug font-medium text-default-950">
            I'm Diego, an App Designer.
          </h2>
          <p class="mt-4 text-base">
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum,
            egestas nec, vestibulum et, malesuada adipiscing, dui.
          </p>

          <div class="mt-8 max-w-xl rounded-md bg-default-50">
            <form class="flex w-full items-center justify-between">
              <input
                type="email"
                name="email"
                id="email"
                class="w-full border-0 bg-transparent px-4 py-3 text-base text-default-950 focus:outline-none focus:ring-0"
                placeholder="Enter Your Email"
                autocomplete="off"
              />
              <button
                class="me-2 rounded-md border-0 bg-primary/90 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary"
              >
                <div class="items-center justify-center gap-1">
                  <span>Submit</span>
                </div>
              </button>
            </form>
          </div>

          <div class="mt-8 flex items-center gap-6">
            <div class="flex -space-x-2">
              <img
                class="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                :src="avatar1"
                alt="Image Description"
              />
              <img
                class="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                :src="avatar2"
                alt="Image Description"
              />
              <img
                class="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                :src="avatar3"
                alt="Image Description"
              />
              <button
                class="h-12 w-12 rounded-full border border-primary/50 bg-primary/30 font-medium text-primary shadow-md backdrop-blur-md"
              >
                80+
              </button>
            </div>
            <div class="text-center">
              <h2 class="text-2xl font-medium text-default-950">200+</h2>
              <p class="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        <div class="lg:-mb-10">
          <img :src="portfolio2Img10" class="mx-auto xl:h-full xl:w-full" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import portfolio2Img10 from '@/assets/images/landing/portfolio-2/img-10.png'
</script>
