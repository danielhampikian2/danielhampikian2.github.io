import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-testimonials',
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
  template: `
    <div class="mb-10 flex items-end justify-between">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Testimonials</span
        >
        <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
          Client Success Stories
        </h2>
      </div>
    </div>
    <!-- flex End -->

    <div class="grid grid-cols-1 items-center lg:grid-cols-2">
      <div class="me-0 lg:mx-auto">
        <div class="relative z-10">
          <div
            class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block"
          ></div>
          <img
            src="assets/images/landing/marketing-2/img-9.png"
            class="mx-auto rounded-full"
            alt=""
          />
        </div>
      </div>
      <!-- col End -->

      <div class="relative">
        <!--Start Swiper -->
        <div class="swiper testimonials relative rounded-md">
          <swiper-container
            class="swiper-wrapper"
            [config]="swiperConfig"
            init="false"
          >
            <swiper-slider class="swiper-slide">
              <div class="pb-10 sm:p-10">
                <div class="mt-5 flex items-center gap-6">
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
                <p class="mt-5 text-lg">
                  "This template is exquisitely designed and offers fantastic
                  new features. It receives regular updates, ensuring top-notch
                  quality. The support team is unparalleled, providing prompt,
                  courteous, premium, and exceptionally helpful assistance!"
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
              <div class="pb-10 sm:p-10">
                <div class="mt-5 flex items-center gap-6">
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
                <p class="mt-5 text-lg">
                  "Optimization and structure are excellent for SEO
                  fundamentals. An impressive model, everything has been
                  meticulously crafted, from the design to the various
                  adaptations. A beautiful template with clean code that's easy
                  to customize."
                </p>
                <div class="mt-5 flex items-center gap-2">
                  <lucide-angular
                    name="star"
                    class="size-5 stroke-yellow-300"
                  ></lucide-angular>
                  <lucide-angular
                    name="star"
                    class="size-5 stroke-yellow-300"
                  ></lucide-angular>
                  <lucide-angular
                    name="star"
                    class="size-5 stroke-yellow-300"
                  ></lucide-angular>
                  <lucide-angular
                    name="star"
                    class="size-5 stroke-yellow-300"
                  ></lucide-angular>
                  <lucide-angular
                    name="star"
                    class="size-5 stroke-yellow-300"
                  ></lucide-angular>
                </div>
                <!-- flex End -->
              </div>
            </swiper-slider>
            <!-- swiper-slide End -->
          </swiper-container>
        </div>
        <!--End Swiper -->

        <div class="absolute -bottom-8 z-10 sm:start-10">
          <div class="relative flex items-center justify-end gap-5 pe-10">
            <div class="testimonials-button-prev">
              <div
                class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
              >
                <lucide-angular
                  name="move-left"
                  class="size-6 stroke-default-950"
                ></lucide-angular>
              </div>
            </div>
            <div class="testimonials-button-next">
              <div
                class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50"
              >
                <lucide-angular
                  name="move-right"
                  class="size-6 stroke-default-950"
                ></lucide-angular>
              </div>
            </div>
          </div>
          <!-- flex end -->
        </div>
      </div>
      <!-- col End -->
    </div>
    <!-- grid End -->
  `,
  styles: ``,
})
export class TestimonialsComponent {
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
