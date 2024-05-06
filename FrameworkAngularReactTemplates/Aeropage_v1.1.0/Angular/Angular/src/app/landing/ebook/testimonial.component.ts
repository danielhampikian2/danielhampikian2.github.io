import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-testimonial',
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
  template: ` <div class="mb-10 flex items-end justify-between">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Testimonials</span
        >
        <h2 class="my-4 text-4xl font-medium text-default-950">
          Success Stories
        </h2>
        <p class="text-base">
          Uncover a realm of opportunities within our extensive ebook
          collection.
        </p>
      </div>
    </div>
    <!-- flex End -->

    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div class="col-span-2">
          <div class="h-full w-full">
            <img
              src="assets/images/landing/ebook/img-18.png"
              class="h-full max-w-full rounded-xl"
              alt=""
            />
          </div>
        </div>
        <!-- col End -->

        <div class="relative col-span-3">
          <!--Start Swiper -->
          <div class="swiper testimonials relative rounded-md">
            <swiper-container
              class="swiper-wrapper"
              [config]="swiperConfig"
              init="false"
            >
              <swiper-slider class="swiper-slide">
                <div class="pt-3">
                  <div class="flex items-center gap-6">
                    <div>
                      <img
                        src="assets/images/avatars/img-1.jpg"
                        class="h-14 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 class="text-2xl font-medium text-default-950">
                        Adam Peterson
                      </h3>
                      <p class="mt-2 text-base">Marketing Consultant</p>
                    </div>
                  </div>
                  <!-- flex End -->
                  <p class="mt-5 text-base">
                    "This template is exquisitely designed and offers fantastic
                    new features. It receives regular updates, ensuring
                    top-notch quality. The support team is unparalleled,
                    providing prompt, courteous, premium, and exceptionally
                    helpful assistance!"
                  </p>
                  <div class="mt-5 flex items-center gap-2">
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                  </div>
                  <!-- flex End -->
                </div>
              </swiper-slider>
              <!-- swiper-slide End -->

              <swiper-slider class="swiper-slide">
                <div class="pt-3">
                  <div class="flex items-center gap-6">
                    <div>
                      <img
                        src="assets/images/avatars/img-2.jpg"
                        class="h-14 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 class="text-2xl font-medium text-default-950">
                        Jordan Harvey
                      </h3>
                      <p class="mt-2 text-base">SEO/SMO Expert</p>
                    </div>
                  </div>
                  <!-- flex End -->
                  <p class="mt-5 text-base">
                    "Optimization and structure are excellent for SEO
                    fundamentals. An impressive model, everything has been
                    meticulously crafted, from the design to the various
                    adaptations. A beautiful template with clean code that's
                    easy to customize."
                  </p>
                  <div class="mt-5 flex items-center gap-2">
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                    <lucide-angular
                      name="star"
                      class="size-5 fill-yellow-400 stroke-yellow-400"
                    ></lucide-angular>
                  </div>
                  <!-- flex End -->
                </div>
              </swiper-slider>
              <!-- swiper-slide End -->
            </swiper-container>
          </div>
          <!--End Swiper -->

          <div class="hidden lg:block">
            <div class="absolute bottom-0 start-0 z-10">
              <div class="relative flex items-center justify-end gap-5 pe-10">
                <div class="testimonials-button-prev">
                  <div
                    class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
                  >
                    <lucide-angular
                      name="chevron-left"
                      class="size-6 stroke-default-950"
                    ></lucide-angular>
                  </div>
                </div>
                <div class="testimonials-button-next">
                  <div
                    class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
                  >
                    <lucide-angular
                      name="chevron-right"
                      class="size-6 stroke-default-950"
                    ></lucide-angular>
                  </div>
                </div>
              </div>
              <!-- flex end -->
            </div>
          </div>
        </div>
        <!-- col End -->
      </div>
      <!-- grid End -->
    </div>`,
  styles: ``,
})
export class TestimonialComponent {
  // swiper COnfig
  swiperConfig: SwiperOptions = {
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
