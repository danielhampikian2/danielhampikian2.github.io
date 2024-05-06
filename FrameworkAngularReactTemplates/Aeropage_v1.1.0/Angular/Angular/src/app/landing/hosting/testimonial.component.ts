import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Pagination, Thumbs } from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [LucideAngularModule, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: ` <!-- Start Testimonials -->
    <section id="testimonials">
      <div class="container">
        <div class="rounded-lg bg-default-100 dark:bg-default-50">
          <div
            class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat p-10 dark:bg-[url('../images/other/bg-lines-2-dark.png')] md:p-20"
          >
            <div class="mx-auto mb-12 max-w-2xl text-center">
              <span
                class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
                >Our Testimonials</span
              >
              <h2
                class="mt-3 text-3xl font-medium text-default-950 md:text-4xl"
              >
                Explore the feedback from our clients.
              </h2>
            </div>
            <div class="relative">
              <!--Start Swiper -->
              <div class="swiper testimonials relative">
                <swiper-container
                  class="swiper-wrapper"
                  [config]="swiperConfig"
                  init="false"
                >
                  <swiper-slide class="swiper-slide">
                    <div class="mx-auto max-w-4xl text-center">
                      <div class="p-6">
                        <lucide-angular
                          name="quote"
                          class="mx-auto size-9 text-default-400"
                        ></lucide-angular>
                        <p class="mb-6 mt-4 md:text-xl">
                          "We've been utilizing Vault for the past five years.
                          Vault is exceptional. It goes without saying that we
                          are incredibly content with the outcomes. Training was
                          not even necessary."
                        </p>
                        <img
                          src="assets/images/avatars/img-1.jpg"
                          class="mx-auto size-14 rounded-full"
                          alt=""
                        />
                        <h3 class="mt-5 text-xl font-medium text-default-950">
                          Enagol Ame
                        </h3>
                        <p class="text-base">Brazil</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End -->

                  <swiper-slide class="swiper-slide">
                    <div class="mx-auto max-w-4xl text-center">
                      <div class="p-6">
                        <lucide-angular
                          name="quote"
                          class="mx-auto size-9 text-default-400"
                        ></lucide-angular>
                        <p class="mb-6 mt-4 md:text-xl">
                          "Setting up was incredibly straightforward. I had no
                          prior experience with hosting, but Vault has made
                          everything appear easy."
                        </p>
                        <img
                          src="assets/images/avatars/img-2.jpg"
                          class="mx-auto size-14 rounded-full"
                          alt=""
                        />
                        <h3 class="mt-5 text-xl font-medium text-default-950">
                          Rashed ka.
                        </h3>
                        <p class="text-base">Italy</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End -->

                  <swiper-slide class="swiper-slide">
                    <div class="mx-auto max-w-4xl text-center">
                      <div class="p-6">
                        <lucide-angular
                          name="quote"
                          class="mx-auto size-9 text-default-400"
                        ></lucide-angular>
                        <p class="mb-6 mt-4 md:text-xl">
                          "Vault is the next game-changing application. I'm at a
                          loss for words. I'll definitely inform my mom about
                          this; she could benefit greatly from using Vault!"
                        </p>
                        <img
                          src="assets/images/avatars/img-3.jpg"
                          class="mx-auto size-14 rounded-full"
                          alt=""
                        />
                        <h3 class="mt-5 text-xl font-medium text-default-950">
                          Jackma Kalin
                        </h3>
                        <p class="text-base">USA</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- swiper-slide End -->
                </swiper-container>
              </div>
              <!--End Swiper -->

              <div
                class="absolute start-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div class="testimonials-button-prev">
                  <div class="relative">
                    <span
                      class="absolute -start-1.5 top-1/2 -z-10 size-8 -translate-y-1/2 rounded-full border-2 border-primary"
                    ></span>
                    <lucide-angular
                      name="move-left"
                      class="size-10 text-default-950"
                    ></lucide-angular>
                  </div>
                </div>
              </div>
              <div
                class="absolute end-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2"
              >
                <div class="testimonials-button-next">
                  <div class="relative">
                    <span
                      class="absolute -end-1.5 top-1/2 -z-10 size-8 -translate-y-1/2 rounded-full border-2 border-primary"
                    ></span>
                    <lucide-angular
                      name="move-right"
                      class="size-10 text-default-950"
                    ></lucide-angular>
                  </div>
                </div>
              </div>
            </div>
            <!-- col End -->
          </div>
        </div>
      </div>
      <!-- container End -->
    </section>
    <!-- Start Testimonials -->`,
  styles: ``,
})
export class TestimonialComponent {
  // hoportfolio swiper
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Pagination],
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonials-button-next',
      prevEl: '.testimonials-button-prev',
    },
  }
}
