import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Testimonials</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              What People Says?
            </h2>
          </div>
        </div>
        <!-- flex End -->

        <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div class="mx-auto">
            <div class="relative z-10">
              <div
                class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-default-200 sm:block"
              ></div>
              <img
                src="assets/images/landing/creative/img-6.png"
                class="rounded-full"
                alt=""
              />
            </div>
          </div>
          <!-- col End -->

          <div class="relative">
            <!--Start Swiper -->
            <div
              class="swiper testimonials swiper-initialized swiper-horizontal swiper-backface-hidden relative rounded-md"
            >
              <swiper-container
                class="swiper-wrapper"
                [config]="testimonial"
                init="false"
                id="swiper-wrapper-7cd02eeed10cb75d3"
                aria-live="polite"
              >
                <swiper-slider
                  class="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 2"
                  data-swiper-slide-index="0"
                  style="width: 660px;"
                >
                  <div class="rounded-md bg-default-50 p-6">
                    <div class="flex items-center gap-5">
                      <img
                        src="assets/images/avatars/img-3.jpg"
                        class="size-14 rounded-full border-4 border-white/20"
                        alt=""
                      />
                      <h3 class="text-lg font-medium text-default-950">
                        Leonard Heiser
                      </h3>
                    </div>
                    <p class="mt-4 text-base text-default-700">
                      There are many variations of passages of Lorem Ipsum
                      available but the maj have suffered alteration in some
                      form, by injected humour, or randomis words which don't
                      look even slightly believable. If you are going
                    </p>
                    <div class="mt-4 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                    </div>
                    <!-- flex End -->
                  </div>
                </swiper-slider>
                <!-- swiper-slide End -->

                <swiper-slider
                  class="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 2"
                  data-swiper-slide-index="1"
                  style="width: 660px;"
                >
                  <div class="rounded-md bg-default-50 p-6">
                    <div class="flex items-center gap-5">
                      <img
                        src="assets/images/avatars/img-2.jpg"
                        class="size-14 rounded-full border-4 border-white/20"
                        alt=""
                      />
                      <h3 class="text-lg font-medium text-default-950">
                        Leonard Heiser
                      </h3>
                    </div>
                    <p class="mt-4 text-base text-default-700">
                      Sed ut perspiciatis unde omnis iste nate error sitsau an
                      voluptatem accusantium dolore mque laudantium, totamrem
                      aperiam, inventore the ver quasi architecto again is there
                      anyone who loves or pursues Variouses versions have
                      evolved over the years.
                    </p>
                    <div class="mt-4 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="star"
                        class="lucide lucide-star size-5 fill-current text-yellow-300"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </svg>
                    </div>
                    <!-- flex End -->
                  </div>
                </swiper-slider>
                <!-- swiper-slide End -->
              </swiper-container>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            <!--End Swiper -->
          </div>
          <!-- col End -->
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class TestimonialsComponent {
  // testimonial swiper
  testimonial: SwiperOptions = {
    modules: [Thumbs, FreeMode, Navigation],
    loop: true,
    navigation: {
      nextEl: '.testimonials-button-next',
      prevEl: '.testimonials-button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
  }
}
