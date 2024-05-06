import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Thumbs } from 'swiper/modules'
import { SliderComponent } from '../hosting/slider.component'

@Component({
  selector: 'app-corporation',
  standalone: true,
  imports: [SwiperDirective, SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Start -->
    <section class="py-10 lg:py-20">
      <div class="container">
        <div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-6">
          <div class="xl:col-span-2">
            <h2 class="text-3xl font-medium text-default-950 md:text-4xl/tight">
              Preferred Partner for Major Corporations
            </h2>
          </div>

          <div class="xl:col-span-4">
            <!-- Swiper -->
            <app-slider />
            <!-- End Swiper -->
          </div>
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
    <!-- End -->
  `,
  styles: ``,
})
export class CorporationComponent {
  swiperSlides = [
    {
      imageSrc: 'assets/images/brand/1.png',
    },
    {
      imageSrc: 'assets/images/brand/2.png',
    },
    {
      imageSrc: 'assets/images/brand/3.png',
    },
    {
      imageSrc: 'assets/images/brand/4.png',
    },
    {
      imageSrc: 'assets/images/brand/5.png',
    },
    {
      imageSrc: 'assets/images/brand/1.png',
    },
    {
      imageSrc: 'assets/images/brand/2.png',
    },
    {
      imageSrc: 'assets/images/brand/3.png',
    },
    {
      imageSrc: 'assets/images/brand/4.png',
    },
    {
      imageSrc: 'assets/images/brand/5.png',
    },
  ]

  // swiper config
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  }
}
