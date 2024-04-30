import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { FreeMode, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SwiperDirective],
  template: ` <!-- Start brands -->
    <!-- Swiper -->
    <div id="testimonial_directory" class="swiper">
      <swiper-container
        class="swiper-wrapper"
        [config]="swiperConfig"
        init="false"
      >
        @for (item of hostingSwiper; track $index) {
          <swiper-slider class="swiper-slide">
            <img src="{{ item.imageSrc }}" alt="" />
          </swiper-slider>
        }
        <!-- swiper-slide End -->
      </swiper-container>
    </div>
    <!-- End brands -->`,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {
  hostingSwiper = [
    { imageSrc: 'assets/images/brand/1.png' },
    { imageSrc: 'assets/images/brand/2.png' },
    { imageSrc: 'assets/images/brand/3.png' },
    { imageSrc: 'assets/images/brand/4.png' },
    { imageSrc: 'assets/images/brand/5.png' },
    { imageSrc: 'assets/images/brand/1.png' },
    { imageSrc: 'assets/images/brand/2.png' },
    { imageSrc: 'assets/images/brand/3.png' },
    { imageSrc: 'assets/images/brand/4.png' },
    { imageSrc: 'assets/images/brand/5.png' },
  ]

  // swiper COnfig
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
