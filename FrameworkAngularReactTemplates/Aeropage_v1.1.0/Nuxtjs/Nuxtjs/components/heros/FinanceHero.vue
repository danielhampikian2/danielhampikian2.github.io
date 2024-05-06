<template>
  <section
    id="home"
    class="md:py-20 flex items-center justify-center relative overflow-hidden bg-cover bg-gradient-to-l from-primary/5 to-primary/10 via-primary/0"
  >
    <div class="container">
      <div class="grid lg:grid-cols-2 grid-cols-1 2xl:gap-20">
        <div class="pt-[132px] pb-20">
          <h2 class="text-3xl xl:text-5xl/tight font-medium text-default-950">
            A Financial Planning and Growth Platform for Entrepreneurs
          </h2>
          <p class="sm:text-lg mt-6">
            Pellentesque lectus, with neque cursus sapien, massa laoreet varius. Ultricies faucibus
            donec tellus cras ornare. Aliquam mattis neque sed sit arcu egestas quisque quisque.
          </p>
          <div class="flex flex-wrap items-center mt-10 gap-6">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 text-base py-3 px-10 rounded-full text-white bg-primary hover:bg-primary-700 transition-all duration-300"
              >Get Started
              <MoveRightIcon class="h-6 w-6" />
            </a>
            <button
              class="relative flex items-center justify-center gap-4 text-base group"
              data-hs-overlay="#watchvideomodal"
            >
              <span
                class="h-12 w-12 flex items-center justify-center gap-4 rounded-full text-base font-medium bg-primary/40 text-primary transition-all duration-300 ring-4 ring-primary/20 group-hover:bg-primary/80 group-hover:text-white"
              >
                <PlayIcon class="h-5 w-5"></PlayIcon
              ></span>
              <span class="text-base font-medium">See How it Works</span>
            </button>
          </div>
        </div>

        <div>
          <div class="relative opacity-100 z-20">
            <img :src="financeImg1" class="h-[700px] rounded-b-full mx-auto" alt="" />
            <div class="absolute top-40 end-0 -z-10">
              <img :src="financeBg1" class="h-[250px] mx-auto" alt="" />
            </div>
            <div class="absolute inset-x-0 top-auto bottom-5 -z-10">
              <img :src="financeBg2" class="h-[450px] mx-auto" alt="" />
            </div>

            <div class="absolute z-20 end-0 bottom-0">
              <div class="max-w-xs overflow-hidden rounded-md shadow">
                <div class="swiper testimonials">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="relative">
                        <div class="p-4 rounded-md bg-white relative dark:bg-default-50">
                          <div class="flex items-center gap-5">
                            <img
                              src="@/assets/images/avatars/img-1.jpg"
                              class="w-12 rounded-full"
                              alt=""
                            />
                            <div>
                              <h6 class="text-sm text-default-600">
                                Very convenient to use project manager!
                              </h6>
                              <p class="mt-2">
                                <span class="flex gap-1 items-center text-yellow-300 text-base">
                                  <StarIcon class="h-5 w-5 fill-yellow-300" />
                                  <StarIcon class="h-5 w-5 fill-yellow-300" />
                                  <StarIcon class="h-5 w-5 fill-yellow-300" />
                                  <StarIcon class="h-5 w-5 fill-yellow-300" />
                                  <StarIcon class="h-5 w-5" />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div class="absolute end-1 bottom-0">
                            <i class="fa-solid fa-quote-right text-2xl text-orange-500/20"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="p-4 rounded-md bg-white relative dark:bg-default-50">
                        <div class="flex items-center gap-5">
                          <div>
                            <img
                              src="@/assets/images/avatars/img-3.jpg"
                              class="w-14 rounded-full"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 class="text-sm text-default-600">
                              Very convenient to use project manager!
                            </h6>
                            <p class="mt-2">
                              <span class="flex gap-1 items-center text-yellow-300 text-base">
                                <StarIcon class="h-5 w-5 fill-yellow-300" />
                                <StarIcon class="h-5 w-5 fill-yellow-300" />
                                <StarIcon class="h-5 w-5 fill-yellow-300" />
                                <StarIcon class="h-5 w-5 fill-yellow-300" />
                                <StarIcon class="h-5 w-5" />
                              </span>
                            </p>
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
      </div>
    </div>
  </section>

  <!-- Watch Video Modal Start -->
  <div
    id="watchvideomodal"
    class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
  >
    <div
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
    >
      <div class="w-full flex flex-col pointer-events-auto rounded-xl overflow-x-hidden">
        <iframe
          class="w-full"
          height="400"
          src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import financeBg1 from '@/assets/images/landing/finance/bg-1.png'
import financeBg2 from '@/assets/images/landing/finance/bg-2.png'
import financeImg1 from '@/assets/images/landing/finance/img-1.png'
import { MoveRightIcon, PlayIcon, StarIcon } from 'lucide-vue-next'
</script>
