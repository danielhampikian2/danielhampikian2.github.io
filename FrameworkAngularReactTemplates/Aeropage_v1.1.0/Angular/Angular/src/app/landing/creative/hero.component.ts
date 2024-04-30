import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section Start -->
    <section
      id="home"
      class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
    >
      <div class="grid grid-cols-1 items-end gap-6 xl:grid-cols-5">
        <div class="xl:col-span-3">
          <!-- Swiper -->
          <div class="swiper mySwiper swiper-hero">
            <swiper-container class="swiper-wrapper" [config]="swiperConfig">
              <swiper-slider class="swiper-slide relative">
                <img
                  src="assets/images/landing/creative/img-2.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/40"></div>
              </swiper-slider>
              <!-- swiper-slide end -->

              <swiper-slider class="swiper-slide relative">
                <img
                  src="assets/images/landing/creative/img-3.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/40"></div>
              </swiper-slider>
              <!-- swiper-slide end -->

              <swiper-slider class="swiper-slide relative">
                <img
                  src="assets/images/landing/creative/img-1.jpg"
                  class="h-full w-full"
                />
                <div class="absolute inset-0 bg-black/40"></div>
              </swiper-slider>
              <!-- swiper-slide end -->
            </swiper-container>
          </div>
          <!-- Swiper end -->
        </div>
        <!-- col-span-3 end -->

        <div class="relative p-6 xl:col-span-2 xl:p-0">
          <!-- Swiper -->
          <div class="swiper mySwiper2 swiper-hero relative me-10">
            <swiper-container
              class="swiper-wrapper"
              [config]="homeswiper"
              init="false"
            >
              <swiper-slider class="swiper-slide">
                <div
                  class="flex flex-col items-start justify-end pb-28 xl:h-full"
                >
                  <!-- <span class="text-base font-medium uppercase tracking-wider text-default-800">Digital agency</span> -->
                  <h2
                    class="mt-6 max-w-2xl text-4xl font-semibold text-default-950"
                  >
                    Crafting Vision into Reality: Design Agency at Your Service
                  </h2>
                  <p class="mt-5 w-3/4 text-base font-medium">
                    Their ability to understand our vision and translate it into
                    a comprehensive marketing strategy is truly exceptional.
                  </p>
                </div>
              </swiper-slider>
              <!-- swiper-slide end -->

              <swiper-slider class="swiper-slide">
                <div
                  class="flex flex-col items-start justify-end pb-28 xl:h-full"
                >
                  <!-- <span class="text-base font-medium uppercase tracking-wider text-default-800">Digital agency</span> -->
                  <h2
                    class="mt-6 max-w-2xl text-4xl font-semibold text-default-950"
                  >
                    Innovative Design Solutions: Unleashing Creativity for You
                  </h2>
                  <p class="mt-5 w-3/4 text-base font-medium">
                    Their ability to understand our vision and translate it into
                    a comprehensive marketing strategy is truly exceptional.
                  </p>
                </div>
              </swiper-slider>
              <!-- swiper-slide end -->

              <swiper-slider class="swiper-slide">
                <div
                  class="flex flex-col items-start justify-end pb-28 xl:h-full"
                >
                  <!-- <span class="text-base font-medium uppercase tracking-wider text-default-800">Digital agency</span> -->
                  <h2
                    class="mt-6 max-w-2xl text-4xl font-semibold text-default-950"
                  >
                    Design Excellence Redefined: Elevate Your Brand with Our
                    Agency
                  </h2>
                  <p class="mt-5 w-3/4 text-base font-medium">
                    Their ability to understand our vision and translate it into
                    a comprehensive marketing strategy is truly exceptional.
                  </p>
                </div>
              </swiper-slider>
              <!-- swiper-slide end -->
            </swiper-container>
          </div>
          <!-- Swiper end -->

          <div class="absolute inset-x-0 bottom-8 z-10">
            <div class="relative flex items-center justify-end gap-5 pe-10">
              <div class="cre-button-prev">
                <div
                  class="flex size-14 items-center justify-center rounded-full border border-default-200 bg-default-50 text-default-900 hover:bg-primary hover:text-white"
                >
                  <lucide-angular
                    name="arrow-left"
                    class="size-7"
                  ></lucide-angular>
                </div>
              </div>
              <div class="cre-button-next">
                <div
                  class="flex size-14 items-center justify-center rounded-full border border-default-200 bg-default-50 text-default-900 hover:bg-primary hover:text-white"
                >
                  <lucide-angular
                    name="arrow-right"
                    class="size-7"
                  ></lucide-angular>
                </div>
              </div>
            </div>
            <!-- flex end -->
          </div>
        </div>
        <!-- col end -->
      </div>
      <!-- grid end -->
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  // swiper config
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Navigation],
    loop: false,
    effect: 'fade',
    speed: 1000,
    watchSlidesProgress: true,
  }

  // homw swiper
  homeswiper: SwiperOptions = {
    speed: 1000,
    spaceBetween: 10,
    modules: [Thumbs, FreeMode, Autoplay, Navigation],
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.cre-button-next',
      prevEl: '.cre-button-prev',
    },
    watchSlidesProgress: true,
  }
}
