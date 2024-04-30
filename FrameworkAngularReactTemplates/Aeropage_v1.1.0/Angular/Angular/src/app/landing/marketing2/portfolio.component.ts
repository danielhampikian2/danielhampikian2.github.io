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
  selector: 'app-portfolio',
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
    <div class="mx-auto mb-14 max-w-3xl text-center">
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Our Portfolio</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Case Studies
      </h2>
      <p class="mt-5 text-lg">
        We assist brands and enterprises in distinguishing themselves in the
        evolving digital terrain.
      </p>
    </div>

    <div class="relative">
      <!--Start Swiper -->
      <div class="swiper testimonials_swiper relative">
        <swiper-container
          class="swiper-wrapper"
          [config]="swiperConfig"
          init="false"
        >
          @for (item of swiper; track $index) {
            <swiper-slider class="swiper-slide">
              <div class="overflow-hidden">
                <div class="group relative overflow-hidden">
                  <div class="overflow-hidden rounded-xl">
                    <img
                      src="{{ item.imageSrc }}"
                      class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
                      alt=""
                    />
                  </div>
                  <div class="mt-6 text-center">
                    <h3
                      class="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary"
                    >
                      {{ item.title }}
                    </h3>
                    <p class="mt-4 text-base text-default-900">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slider>
          }
          <!-- swiper-slide End -->
        </swiper-container>
      </div>
      <!--End Swiper -->
    </div>
    <!-- col End -->

    <div class="mt-10 flex justify-center">
      <a
        href="javascript:void(0);"
        class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
        >Read All Case Studies
        <lucide-angular name="arrow-right" class="size-6"></lucide-angular>
      </a>
    </div>
    <!-- flex End -->
  `,
  styles: ``,
})
export class PortfolioComponent {
  swiper = [
    {
      imageSrc: 'assets/images/landing/marketing-2/img-2.jpg',
      title:
        "How Marketing Wire's Support Led to a 70% Increase in Data Accuracy",
      description: '70% Growth Achieved withs',
    },
    {
      imageSrc: 'assets/images/landing/marketing-2/img-3.jpg',
      title:
        'How Surface Mobility Achieved a Increase in Sales in the Six Months',
      description: 'Sales Tripled with ResonanceF',
    },
    {
      imageSrc: 'assets/images/landing/marketing-2/img-4.jpg',
      title:
        'How Gen Machine Utilizes Automation to Expand Their Subscriber Base',
      description: 'Zero Negative Reviews with Resonance',
    },
    {
      imageSrc: 'assets/images/landing/marketing-2/img-5.jpg',
      title:
        'How Surface Mobility Achieved a Twofold Increase in Sales in the Six Months',
      description: 'Sales Doubled with Resonance',
    },
    {
      imageSrc: 'assets/images/landing/marketing-2/img-6.jpg',
      title:
        "How Marketing Wire's Support Led to an 80% Improvement in Data Accuracy",
      description: '80% Growth Achieved with Resonances',
    },
    {
      imageSrc: 'assets/images/landing/marketing-2/img-7.jpg',
      title:
        'How Gen Machine Harnesses Automation to Expand Their Subscriber Base',
      description: 'Zero Adverse Reviews with Resonance',
    },
  ]

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
}
