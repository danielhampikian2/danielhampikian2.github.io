import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, input } from '@angular/core'
import { FreeMode, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '../swiper-directive.component'
import { register } from 'swiper/element/bundle'
import { swiperImage } from '@app/landing/agency/portfolio.component'

register()
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styles: ``,
})
export class PortfolioComponent {
  @Input() Swiper!: swiperImage[]

  // hoportfolio swiper
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode],
    initialSlide: 2,
    slidesPerView: 3,
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
    },
  }
}
