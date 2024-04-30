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
    <!-- Start Testimonials -->
    <section id="testimonials" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Our Testimonials</span
            >
            <h2 class="mt-4 text-4xl font-medium capitalize text-default-950">
              Feedback from Our Clients
            </h2>
            <p class="mt-4 text-base">
              Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque
              laoreet, felis eros vehicula leo, at malesuada velit leo quis
              pede.
            </p>
          </div>
        </div>
        <!-- flex End -->

        <div class="rounded-xl bg-default-100 p-6">
          <div class="grid grid-cols-1 lg:grid-cols-5">
            <div class="col-span-2">
              <div>
                <img
                  src="assets/images/landing/portfolio-2/img-1.jpg"
                  class="rounded-xl"
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
                  @for (item of swiperSlides; track $index) {
                    <swiper-slider class="swiper-slide">
                      <div class="pt-3">
                        <div class="flex items-center gap-5">
                          <img
                            src="{{ item.avatarSrc }}"
                            class="size-16 rounded-full border-4 border-white/20"
                            alt=""
                          />
                          <div>
                            <h3 class="text-xl font-medium text-default-950">
                              {{ item.name }}
                            </h3>
                            <p class="text-base">{{ item.role }}</p>
                          </div>
                        </div>
                        <!-- flex End -->
                        <p class="mt-5 text-base">
                          {{ item.testimonial }}
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
                  }
                  <!-- swiper-slide End -->
                </swiper-container>
              </div>
              <!--End Swiper -->

              <div
                class="relative flex items-center justify-start gap-5 py-4 pe-10"
              >
                <div class="testimonials-button-prev">
                  <div
                    class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <lucide-angular
                      name="chevron-left"
                      class="size-6"
                    ></lucide-angular>
                  </div>
                </div>
                <div class="testimonials-button-next">
                  <div
                    class="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <lucide-angular
                      name="chevron-right"
                      class="size-6"
                    ></lucide-angular>
                  </div>
                </div>
              </div>
              <!-- flex end -->
            </div>
            <!-- col End -->
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- container End -->
    </section>
    <!-- End Testimonials -->
  `,
  styles: ``,
})
export class TestimonialsComponent {
  swiperSlides = [
    {
      avatarSrc: 'assets/images/avatars/img-3.jpg',
      name: 'Farhan Firoz',
      role: 'Founder & CEO',
      testimonial:
        'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
      rating: 5,
    },
    {
      avatarSrc: 'assets/images/avatars/img-1.jpg',
      name: 'Robert Henricks',
      role: 'UI/UX Designer',
      testimonial:
        "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
      rating: 5,
    },
    {
      avatarSrc: 'assets/images/avatars/img-5.jpg',
      name: 'Albert Flores',
      role: 'Marketing Officer',
      testimonial:
        'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
      rating: 5,
    },
    {
      avatarSrc: 'assets/images/avatars/img-4.jpg',
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      testimonial:
        "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
      rating: 5,
    },
  ]

  // swiper Config
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
