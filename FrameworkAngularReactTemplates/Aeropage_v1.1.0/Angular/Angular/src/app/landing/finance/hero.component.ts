import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:gap-20">
      <div class="pb-20 pt-[132px]">
        <h2 class="text-3xl font-medium text-default-950 xl:text-5xl/tight">
          A Financial Planning and Growth Platform for Entrepreneurs
        </h2>
        <p class="mt-6 sm:text-lg">
          Pellentesque lectus, with neque cursus sapien, massa laoreet varius.
          Ultricies faucibus donec tellus cras ornare. Aliquam mattis neque sed
          sit arcu egestas quisque quisque.
        </p>
        <div class="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="javascript:void(0);"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-3 text-base text-white transition-all duration-300 hover:bg-primary-700"
            >Get Started
            <lucide-angular name="move-right" class="size-6"></lucide-angular
          ></a>
          <button
            class="group relative flex items-center justify-center gap-4 text-base"
            data-hs-overlay="#watchvideomodal"
          >
            <span
              class="flex size-12 items-center justify-center gap-4 rounded-full bg-primary/40 text-base font-medium text-primary ring-4 ring-primary/20 transition-all duration-300 group-hover:bg-primary/80 group-hover:text-white"
              ><lucide-angular name="play" class="size-5"></lucide-angular
            ></span>
            <span class="text-base font-medium">See How it Works</span>
          </button>
        </div>
        <!-- flex End -->
      </div>
      <!-- col End -->

      <div>
        <div class="relative z-20 opacity-100">
          <img
            src="assets/images/landing/finance/img-1.png"
            class="mx-auto h-[700px] rounded-b-full"
            alt=""
          />
          <div class="absolute end-0 top-40 -z-10">
            <img
              src="assets/images/landing/finance/bg-1.png"
              class="mx-auto h-[250px]"
              alt=""
            />
          </div>
          <div class="absolute inset-x-0 bottom-5 top-auto -z-10">
            <img
              src="assets/images/landing/finance/bg-2.png"
              class="mx-auto h-[450px]"
              alt=""
            />
          </div>

          <div class="absolute bottom-0 end-0 z-20">
            <div class="max-w-xs overflow-hidden rounded-md shadow">
              <div class="swiper testimonials">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="relative">
                      <div
                        class="relative rounded-md bg-white p-4 dark:bg-default-50"
                      >
                        <div class="flex items-center gap-5">
                          <img
                            src="assets/images/avatars/img-1.jpg"
                            class="w-12 rounded-full"
                            alt=""
                          />
                          <div>
                            <h6 class="text-sm text-default-600">
                              Very convenient to use project manager!
                            </h6>
                            <p class="mt-2">
                              <span
                                class="flex items-center gap-1 text-base text-yellow-300"
                              >
                                <lucide-angular
                                  name="star"
                                  class="size-5 fill-yellow-300"
                                ></lucide-angular>
                                <lucide-angular
                                  name="star"
                                  class="size-5 fill-yellow-300"
                                ></lucide-angular>
                                <lucide-angular
                                  name="star"
                                  class="size-5 fill-yellow-300"
                                ></lucide-angular>
                                <lucide-angular
                                  name="star"
                                  class="size-5 fill-yellow-300"
                                ></lucide-angular>
                                <lucide-angular
                                  name="star"
                                  class="size-5"
                                ></lucide-angular>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="absolute bottom-0 end-1">
                          <i
                            class="fa-solid fa-quote-right text-2xl text-orange-500/20"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="relative rounded-md bg-white p-4 dark:bg-default-50"
                    >
                      <div class="flex items-center gap-5">
                        <div>
                          <img
                            src="assets/images/avatars/img-3.jpg"
                            class="w-14 rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 class="text-sm text-default-600">
                            Very convenient to use project manager!
                          </h6>
                          <p class="mt-2">
                            <span
                              class="flex items-center gap-1 text-base text-yellow-300"
                            >
                              <lucide-angular
                                name="star"
                                class="size-5 fill-yellow-300"
                              ></lucide-angular>
                              <lucide-angular
                                name="star"
                                class="size-5 fill-yellow-300"
                              ></lucide-angular>
                              <lucide-angular
                                name="star"
                                class="size-5 fill-yellow-300"
                              ></lucide-angular>
                              <lucide-angular
                                name="star"
                                class="size-5 fill-yellow-300"
                              ></lucide-angular>
                              <lucide-angular
                                name="star"
                                class="size-5"
                              ></lucide-angular>
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
      <!-- col End -->
    </div>
    <!-- grid End -->
    <!-- Watch Video Modal Start -->
    <div
      id="watchvideomodal"
      class="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden h-full w-full overflow-y-auto overflow-x-hidden"
    >
      <div
        class="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl"
      >
        <div
          class="pointer-events-auto flex w-full flex-col overflow-x-hidden rounded-xl"
        >
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
  `,
  styles: ``,
})
export class HeroComponent {}
