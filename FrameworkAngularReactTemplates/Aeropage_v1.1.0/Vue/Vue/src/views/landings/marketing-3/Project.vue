<template>
  <section id="projects" class="overflow-hidden py-10">
    <div class="container">
      <div class="relative overflow-hidden rounded-3xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_24px] dark:bg-default-50">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div class="relative p-6 text-center">
            <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Highlighted Projects</span
            >
            <h2 class="mt-4 text-3xl font-medium text-default-950">Innovative Design Solutions 💡</h2>
            <p class="mb-8 mt-5 text-base">
              Customize your design using a variety of theme options in the WordPress Customizer and witness instant changes.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
              >Read More
              <i data-lucide="move-right" class="h-6 w-6"></i>
            </a>
          </div>
          <img :src="marketing3Img2" class="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="overflow-hidden py-10">
    <div class="container">
      <div class="relative overflow-hidden rounded-3xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_24px] dark:bg-default-50">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <img :src="marketing3Img3" class="h-full w-full" alt="" />

          <div class="relative p-6">
            <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Exploratory Studies</span
            >
            <h2 class="mt-4 text-3xl font-medium text-default-950">Ideas Driven byPassion. ✏️</h2>
            <p class="mb-8 mt-5 text-base">
              We strongly hold that partnering with our clients to develop products and services is the most efficient method to achieve our
              objectives.
            </p>

            <div>
              <div class="flex items-center justify-between gap-6">
                <h2 class="text-lg font-medium text-default-950">Search Engine</h2>
                <h4 class="text-lg font-medium text-default-950">75</h4>
              </div>
              <div class="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="46"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="my-10">
              <div class="flex items-center justify-between gap-6">
                <h2 class="text-lg font-medium text-default-950">Digital marketing</h2>
                <h4 class="text-lg font-medium text-default-950">95</h4>
              </div>
              <div class="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary"
                  role="progressbar"
                  style="width: 95%"
                  aria-valuenow="46"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between gap-6">
                <h2 class="text-lg font-medium text-default-950">App Development</h2>
                <h4 class="text-lg font-medium text-default-950">85</h4>
              </div>
              <div class="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary"
                  role="progressbar"
                  style="width: 85%"
                  aria-valuenow="46"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import marketing3Img2 from '@/assets/images/landing/marketing-3/img-2.jpg'
import marketing3Img3 from '@/assets/images/landing/marketing-3/img-3.jpg'
</script>
