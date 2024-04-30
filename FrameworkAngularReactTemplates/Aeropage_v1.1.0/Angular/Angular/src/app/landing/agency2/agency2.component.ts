import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Thumbs } from 'swiper/modules'
import { SwiperDirective } from '@components/swiper-directive.component'
import { PortfolioComponent } from '@components/portfolio/portfolio.component'
import { HeroComponent } from './hero.component'
import { FeaturesComponent } from './features.component'
import { FaqComponent } from './faq.component'
import { PortfoliosComponent } from './portfolio.component'
import { PricingComponent } from './pricing.component'
import { ServiceComponent } from './service.component'
import { MarqueeComponent } from './marquee.component'
import { SinceComponent } from './since.component'
import { BlogComponent } from './blog.component'
@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    SwiperDirective,
    PortfolioComponent,
    HeroComponent,
    FeaturesComponent,
    FaqComponent,
    PortfoliosComponent,
    PricingComponent,
    ServiceComponent,
    MarqueeComponent,
    SinceComponent,
    BlogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <!--header -->
    <app-header
      [customLinks]="indexAgency2"
      className="fixed "
      [sidebarNav]="false"
    />
    <!-- Hero section -->
    <app-hero />
    <!-- app fetaure -->
    <app-features />
    <!-- faq -->
    <app-faq />
    <!-- portfolio section -->
    <app-portfolios />
    <!-- pricing section -->
    <app-pricing />
    <!-- service setion -->
    <app-service />
    <!-- marquee section -->
    <app-marquee />
    <!-- since section -->
    <app-since />
    <!-- blog section -->
    <app-blog />
  `,
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class Agency2Component {
  // agency label
  indexAgency2 = [
    { label: 'Home', route: 'home' },
    { label: 'Features', route: 'features' },
    { label: 'Faq', route: 'faq' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Pricing', route: 'pricing' },
    { label: 'Service', route: 'service' },
    { label: 'Blog', route: 'blog' },
  ]

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
