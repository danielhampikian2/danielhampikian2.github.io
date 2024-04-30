import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
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
    <div class="relative">
      <!--Start Swiper -->
      <div class="swiper testimonials relative rounded-md">
        <swiper-container
          class="swiper-wrapper"
          [config]="testimonial"
          init="false"
        >
          <swiper-slider class="swiper-slide">
            <div class="rounded-md bg-default-100 p-6 dark:bg-default-50">
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
              <p class="mt-4 text-base">
                There are many variations of passages of Lorem Ipsum available
                but the maj have suffered alteration in some form, by injected
                humour, or randomis words which don't look even slightly
                believable. If you are going
              </p>
              <div class="mt-4 flex items-center gap-2">
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

          <swiper-slider class="swiper-slide">
            <div class="rounded-md bg-default-100 p-6 dark:bg-default-50">
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
              <p class="mt-4 text-base">
                Sed ut perspiciatis unde omnis iste nate error sitsau an
                voluptatem accusantium dolore mque laudantium, totamrem aperiam,
                inventore the ver quasi architecto again is there anyone who
                loves or pursues Variouses versions have evolved over the years.
              </p>
              <div class="mt-4 flex items-center gap-2">
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
    </div>
    <!-- col End -->
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
