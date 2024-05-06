<template>
  <section id="features" class="py-10 lg:py-20">
    <div class="container">
      <div class="grid items-center gap-6 lg:grid-cols-2">
        <div>
          <ActivitySquareIcon class="h-12 w-12 text-default-950" />
          <h2 class="mt-5 text-4xl font-medium text-default-950">Flexibility and Expansion.</h2>
          <p class="mt-4 text-base">
            Transform your concepts into reality using an intuitive visual editor. we's Build,
            modify, and personalize your website visually without any coding required!
          </p>

          <ul role="list" class="mt-6 text-sm text-default-700">
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-9 w-9 text-primary" />
              <span class="text-base font-medium">99.9% Uptime Assurance</span>
            </li>
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-9 w-9 text-primary" />
              <span class="text-base font-medium">Endless Photos and Videos</span>
            </li>
            <li class="flex items-center gap-2">
              <DotIcon class="inline-block h-9 w-9 text-primary" />
              <span class="text-base font-medium">Premium Support</span>
            </li>
          </ul>
        </div>

        <div class="h-[500px]">
          <img :src="marketing3Img4" class="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="grid items-center gap-6 lg:grid-cols-2">
        <div>
          <div class="flex flex-wrap items-center justify-center gap-6">
            <div class="h-40 w-52 rounded-xl bg-purple-500/10 p-6 text-center">
              <div class="flex justify-center">
                <ShoppingBagIcon class="h-12 w-12 text-purple-600" />
              </div>
              <h3 class="mt-3 text-xl font-medium text-purple-600">Ecommerce</h3>
            </div>

            <div class="h-40 w-52 rounded-xl bg-green-500/10 p-6 text-center md:-mt-14">
              <div class="flex justify-center">
                <ActivitySquareIcon class="h-12 w-12 text-green-600" />
              </div>
              <h3 class="mt-3 text-xl font-medium text-green-600">Branding</h3>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-center gap-5">
            <div class="h-40 w-52 rounded-xl bg-red-500/10 p-6 text-center">
              <div class="flex justify-center">
                <ToggleRightIcon class="h-12 w-12 text-red-600" />
              </div>
              <h3 class="mt-3 text-xl font-medium text-red-600">Consultation</h3>
            </div>
            <div class="h-40 w-52 rounded-xl bg-sky-500/10 p-6 text-center md:-mt-14">
              <div class="flex justify-center">
                <ComponentIcon class="h-12 w-12 text-sky-600" />
              </div>
              <h3 class="mt-3 text-xl font-medium text-sky-600">Marketing</h3>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-medium text-default-950">Marketing Solutions ⚡</h2>
          <p class="mb-10 mt-5 text-base">
            With a wealth of over 25 years in the field, we have developed numerous strategic
            discovery processes that empower us to uncover the layers necessary to comprehend, link,
            and represent effectively.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
            >Read More
            <MoveRightIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <div class="grid items-end gap-6 lg:grid-cols-2">
        <div>
          <h2 class="mb-8 text-4xl font-medium text-default-950">Powered by Enthusiasm.</h2>

          <div class="rounded-xl border border-default-200">
            <div class="grid md:grid-cols-2">
              <div class="p-6">
                <h2 class="text-xl font-medium text-default-950">Mobile Development</h2>
                <p class="mt-3 text-sm">
                  At Hub IT, we empower your business and technology to harness the potential of big
                  data in the digital realm.
                </p>
              </div>

              <div class="border-s border-default-200 p-6">
                <h2 class="text-xl font-medium text-default-950">Digital Branding</h2>
                <p class="mt-3 text-sm">
                  At Hub IT, we empower your business and technology to harness the potential of big
                  data in the digital realm.
                </p>
              </div>

              <div class="border-e border-t border-default-200 p-6">
                <h2 class="text-xl font-medium text-default-950">Consultation</h2>
                <p class="mt-3 text-sm">
                  At Hub IT, we empower your business and technology to harness the potential of big
                  data in the digital realm.
                </p>
              </div>

              <div class="border-t border-default-200 p-6">
                <h2 class="text-xl font-medium text-default-950">Social Media</h2>
                <p class="mt-3 text-sm">
                  At Hub IT, we empower your business and technology to harness the potential of big
                  data in the digital realm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative mb-20 lg:mb-0">
          <div class="relative">
            <img :src="marketing3Img5" class="mx-auto rounded-xl" alt="" />
          </div>
          <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
            <img :src="marketing3Img6" class="h-full rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ActivitySquareIcon,
  ShoppingBagIcon,
  ToggleRightIcon,
  ComponentIcon,
  DotIcon,
  MoveRightIcon
} from 'lucide-vue-next'
import marketing3Img4 from '@/assets/images/landing/marketing-3/img-4.svg'
import marketing3Img5 from '@/assets/images/landing/marketing-3/img-5.jpg'
import marketing3Img6 from '@/assets/images/landing/marketing-3/img-6.jpg'
</script>
