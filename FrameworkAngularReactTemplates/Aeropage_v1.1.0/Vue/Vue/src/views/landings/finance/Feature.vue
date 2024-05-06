<template>
  <section id="features" class="pt-10 lg:pt-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Highlighted Projects</span
          >
          <h2 class="text-4xl/tight text-default-950 mt-4">Streamline Data Integrations: Simplify finance with Vault</h2>
          <p class="text-base text-default-900 font-medium mt-5">
            Save time on financial tasks by automating them with Vault. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div class="group mt-5">
            <a
              href="javascript:void(0);"
              class="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
              >Read More
              <MoveRightIcon class="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>

        <div>
          <img :src="financeImg8" class="h-full w-full rounded-lg" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <img :src="financeImg9" class="h-full w-full rounded-lg" alt="" />
        </div>

        <div>
          <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Investor ready reporting</span
          >
          <h2 class="text-4xl/tight font-medium text-default-950 mt-4">Streamline Data Integrations: Simplify finance with Vault</h2>
          <ul role="list" class="mt-6 space-y-2 text-sm text-default-700 -ms-3 ps-6">
            <li class="flex items-center gap-3">
              <CircleIcon class="shrink inline-block h-2 w-2 text-primary fill-primary"></CircleIcon>
              <span class="grow text-base font-medium text-default-950"
                >Demonstrate your firm grasp of business finances by having instant access.</span
              >
            </li>
            <li class="flex items-center gap-3">
              <CircleIcon class="shrink inline-block h-2 w-2 text-primary fill-primary"></CircleIcon>
              <span class="grow text-base font-medium text-default-950"
                >Effortlessly collaborate with investors by sharing live reports and models.</span
              >
            </li>
            <li class="flex items-center gap-3">
              <CircleIcon class="shrink inline-block h-2 w-2 text-primary fill-primary"></CircleIcon>
              <span class="grow text-base font-medium text-default-950">Simplify investor collaboration by seamlessly sharing real-time Sheets.</span>
            </li>
          </ul>
          <div class="group mt-5">
            <a
              href="javascript:void(0);"
              class="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
              >Read More
              <MoveRightIcon class="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <span class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Access Advisors</span
          >
          <h2 class="text-4xl/tight font-medium text-default-950 mt-4">Personalized Expert Support and Feedback</h2>
          <p class="text-base font-medium mt-5">
            Receive expert support and valuable feedback tailored to your business's needs. Our advisors are here to help you navigate financial
            challenges and make informed decisions.
          </p>
          <div class="group mt-5">
            <a
              href="javascript:void(0);"
              class="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
              >Read More
              <MoveRightIcon class="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>

        <div class="relative">
          <img :src="financeImg10" class="rounded-xl" alt="" />
          <div class="hidden lg:block">
            <div class="absolute -top-20 -end-20">
              <div class="max-w-md">
                <div class="p-6 bg-white border border-default-200 rounded-xl dark:bg-default-50">
                  <h2 class="text-xl font-medium text-default-950">Obtain Financing and Fundraising Advice</h2>
                  <p class="text-base font-medium mt-4">Schedule a free consultation with our financing and fundraising expert.</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-8 -start-20">
              <div class="inline-block">
                <div class="p-5 bg-white border border-default-200 rounded-xl dark:bg-default-50">
                  <h4 class="text-xl font-medium text-default-950">Priority Support</h4>
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
import financeImg8 from '@/assets/images/landing/finance/img-8.png'
import financeImg9 from '@/assets/images/landing/finance/img-9.png'
import financeImg10 from '@/assets/images/landing/finance/img-10.jpg'
import { MoveRightIcon, CircleIcon } from 'lucide-vue-next'
</script>
