<template>
  <section id="pricing" class="lg:py-20 py-10">
    <div class="container">
      <div class="grid xl:grid-cols-5 gap-6">
        <div class="xl:col-span-2">
          <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Pricing</span
          >
          <h2 class="text-4xl font-medium text-default-950 mt-6">
            Affordable Pricing. <br />
            Easy scaling.
          </h2>
          <hr class="my-6 border border-dashed text-default-800 hidden xl:block" />
          <p class="text-base">Things go wrong have questions. We’ve understand. So we have people</p>

          <ul role="list" class="mt-4 text-sm text-default-white">
            <li class="flex items-center gap-2 py-1">
              <i data-lucide="move-right" class="inline-block h-6 w-6 stroke-primary"></i>
              <span class="text-base text-default-950">Amazing communication.</span>
            </li>
            <li class="flex items-center gap-2 py-1">
              <i data-lucide="move-right" class="inline-block h-6 w-6 stroke-primary"></i>
              <span class="text-base text-default-950">Best trending designing experience.</span>
            </li>
            <li class="flex items-center gap-2 py-1">
              <i data-lucide="move-right" class="inline-block h-6 w-6 stroke-primary"></i>
              <span class="text-base text-default-950">Email & Live chat.</span>
            </li>
          </ul>
        </div>

        <div class="xl:col-span-3 mt-8 lg:mt-0">
          <div class="lg:ms-8">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
              <div class="group relative shadow rounded-md z-2 bg-default-100 dark:bg-default-50">
                <div class="p-6 py-8">
                  <h6 class="font-bold uppercase mb-5 text-primary">Advanced</h6>

                  <div class="flex mb-2 text-default-950">
                    <span class="text-xl font-semibold">$</span>
                    <span class="price text-4xl font-semibold mb-0">24</span>
                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                  </div>
                  <p>14 days free</p>

                  <ul role="list" class="mt-4 mb-5 -ms-3 text-sm text-default-white">
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Guaranteed quality control</span>
                    </li>
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Top quality service</span>
                    </li>
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Best experts at your lease</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="border inline-block border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-300"
                    >Sign up</a
                  >
                </div>
              </div>

              <div class="group relative shadow rounded-md z-3 bg-default-100 dark:bg-default-50">
                <div class="p-6 py-8">
                  <h6 class="font-bold uppercase mb-5 text-primary">Enterprise</h6>

                  <div class="flex mb-2 text-default-950">
                    <span class="text-xl font-semibold">$</span>
                    <span class="price text-4xl font-semibold mb-0">87</span>
                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                  </div>
                  <p>14 days free</p>

                  <ul role="list" class="mt-4 mb-5 -ms-3 text-sm text-default-white">
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Guaranteed quality control</span>
                    </li>
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Top quality service</span>
                    </li>
                    <li class="flex items-center gap-2 py-1">
                      <DotIcon class="inline-block h-8 w-8 stroke-primary" />
                      <span class="text-base text-default-950">Best experts at your lease</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="border inline-block border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-300"
                    >Sign up</a
                  >
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
import { DotIcon } from 'lucide-vue-next'
</script>
