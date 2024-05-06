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
  selector: 'app-swiper',
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
    <section class="pb-10 lg:pb-20">
      <div class="relative">
        <!--Start Swiper -->
        <div class="swiper testimonials_swiper  relative">
          <swiper-container
            class="swiper-wrapper"
            [config]="swiperConfig"
            init="false"
          >
            @for (item of charityData; track $index) {
              <swiper-slide class="swiper-slide">
                <div class="mx-auto max-w-4xl text-center">
                  <div class="group relative">
                    <div class="absolute inset-0 rounded-xl bg-black/60"></div>
                    <img src="{{ item.imageSrc }}" class="rounded-xl" alt="" />

                    <div class="absolute inset-0 m-6 rounded-md bg-white/20">
                      <div class="flex h-full items-center justify-center">
                        <div class="text-default-950">
                          <div class="flex justify-center">
                            <lucide-angular
                              name="{{ item.icon }}"
                              class="size-12 text-white"
                            ></lucide-angular>
                          </div>
                          <h2 class="mt-5 text-3xl font-medium text-white">
                            {{ item.title }}
                          </h2>
                          <p
                            class="mx-auto mt-4 w-3/4 text-base font-medium text-white/90"
                          >
                            {{ item.description }}
                          </p>
                        </div>
                      </div>
                      <!-- fle End -->
                    </div>
                  </div>
                </div>
              </swiper-slide>
            }
            <!-- swiper-slide End -->
          </swiper-container>
          <div class="swiper-pagination !static mt-6"></div>
        </div>
        <!--End Swiper -->
      </div>
      <!-- col End -->
    </section>
    <!-- End Testimonials -->
  `,
  styles: ``,
})
export class SwiperComponent {
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Navigation],
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      440: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }
  // json of charity

  charityData = [
    {
      imageSrc: 'assets/images/landing/charity/img-6.jpg',
      icon: 'badge-dollar-sign',
      title: 'Make a Contribution',
      description:
        'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-9.jpg',
      icon: 'hand',
      title: 'Become a Volunteer',
      description:
        'Children growing up in poverty encounter challenges like hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-10.jpg',
      icon: 'dollar-sign',
      title: 'Fundraising',
      description:
        'Children growing up in poverty face challenges such as hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-11.jpg',
      icon: 'indian-rupee',
      title: 'Make a Contribution',
      description:
        'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-6.jpg',
      icon: 'badge-dollar-sign',
      title: 'Make a Contribution',
      description:
        'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-9.jpg',
      icon: 'hand',
      title: 'Become a Volunteer',
      description:
        'Children growing up in poverty encounter challenges like hunger and malnutrition.',
    },
    {
      imageSrc: 'assets/images/landing/charity/img-10.jpg',
      icon: 'dollar-sign',
      title: 'Fundraising',
      description:
        'Children growing up in poverty face challenges such as hunger and malnutrition.',
    },
  ]
}
