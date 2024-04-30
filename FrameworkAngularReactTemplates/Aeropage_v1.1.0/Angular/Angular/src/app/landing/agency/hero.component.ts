import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, SwiperDirective],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section Start -->
    <section
      id="home"
      class="bg-[url('../images/other/bg-lines-1.svg')] bg-cover bg-no-repeat"
    >
      <div class="relative grid grid-cols-1 items-center xl:grid-cols-5">
        <div
          class="relative z-10 order-2 -mt-24 p-6 xl:order-none xl:col-span-2 xl:-me-24 xl:mt-0 xl:p-0"
        >
          <div
            class="mx-auto max-w-xl rounded-xl bg-default-100 dark:bg-default-50 xl:me-0 xl:ms-auto"
          >
            <div class="p-6">
              <!-- Swiper -->
              <div class="swiper mySwiper2 relative">
                <swiper-container
                  class="swiper-wrapper"
                  init="false"
                  [config]="swiperConfig"
                >
                  <swiper-slide class="swiper-slide">
                    <div
                      class="flex flex-col items-start justify-end xl:h-full"
                    >
                      <span
                        class="text-base font-medium uppercase tracking-wider text-default-800"
                        >Digital agency</span
                      >
                      <h2
                        class="mt-6 text-3xl font-semibold text-default-950 md:text-4xl/snug"
                      >
                        Beyond a Design Agency
                      </h2>
                      <p class="mb-7 mt-5 text-base md:w-3/4">
                        Their ability to understand our vision and translate it
                        into a comprehensive marketing strategy is truly
                        exceptional.
                      </p>
                      <a
                        href="javascript:void(0);"
                        class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-300 hover:bg-primary hover:text-white"
                        >Get Solution
                        <lucide-angular
                          name="arrow-up-right"
                          class="size-6"
                        ></lucide-angular>
                      </a>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End-->

                  <swiper-slide class="swiper-slide">
                    <div
                      class="flex flex-col items-start justify-end xl:h-full"
                    >
                      <span
                        class="text-base font-medium uppercase tracking-wider text-default-800"
                        >Digital agency</span
                      >
                      <h2
                        class="mt-6 text-3xl font-semibold text-default-950 md:text-4xl/snug"
                      >
                        Beyond a Design Agency
                      </h2>
                      <p class="mb-7 mt-5 text-base md:w-3/4">
                        Their ability to understand our vision and translate it
                        into a comprehensive marketing strategy is truly
                        exceptional.
                      </p>
                      <a
                        href="javascript:void(0);"
                        class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-300 hover:bg-primary hover:text-white"
                        >Get Solution
                        <lucide-angular
                          name="arrow-up-right"
                          class="size-6"
                        ></lucide-angular>
                      </a>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End-->

                  <swiper-slide class="swiper-slide">
                    <div
                      class="flex flex-col items-start justify-end xl:h-full"
                    >
                      <span
                        class="text-base font-medium uppercase tracking-wider text-default-800"
                        >Digital agency</span
                      >
                      <h2
                        class="mt-6 text-3xl font-semibold text-default-950 md:text-4xl/snug"
                      >
                        Beyond a Design Agency
                      </h2>
                      <p class="mb-7 mt-5 text-base md:w-3/4">
                        Their ability to understand our vision and translate it
                        into a comprehensive marketing strategy is truly
                        exceptional.
                      </p>
                      <a
                        href="javascript:void(0);"
                        class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-300 hover:bg-primary hover:text-white"
                        >Get Solution
                        <lucide-angular
                          name="arrow-up-right"
                          class="size-6"
                        ></lucide-angular>
                      </a>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End-->
                </swiper-container>
              </div>
              <!-- Swiper End-->
            </div>
          </div>
        </div>
        <!-- col-span-2 End-->

        <div class="order-1 xl:order-none xl:col-span-3">
          <!-- Swiper -->
          <div class="swiper mySwiper">
            <swiper-container
              class="swiper-wrapper"
              init="false"
              [config]="heroSwiperConfig"
            >
              <swiper-slide class="swiper-slide relative">
                <img
                  src="assets/images/landing/agency/img-1.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/25"></div>
              </swiper-slide>
              <!-- swiper-slide End-->

              <swiper-slide class="swiper-slide relative">
                <img
                  src="assets/images/landing/agency/img-2.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/25"></div>
              </swiper-slide>
              <!-- swiper-slide End-->

              <swiper-slide class="swiper-slide relative">
                <img
                  src="assets/images/landing/agency/img-3.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/25"></div>
              </swiper-slide>
              <!-- swiper-slide End-->
            </swiper-container>
          </div>
          <!-- Swiper End-->
        </div>
        <!-- col-span-3 End-->
      </div>
      <!-- grid End-->
    </section>
    <!-- Hero end -->
  `,
  styles: ``,
})
export class HeroComponent {
  // home swiper
  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1500, // milliseconds between slides
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  // swiper
  heroSwiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Navigation, Autoplay],
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 1000, // milliseconds between slides
    },
    watchSlidesProgress: true,
  }
}
