import { CUSTOM_ELEMENTS_SCHEMA, Component, Renderer2 } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperOptions } from 'swiper/types'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SwiperDirective } from '@components/swiper-directive.component'
import { MarqueeComponent } from '@components/marquee/marquee.component'
import { HeroComponent } from './hero.component'
import { Marquee2Component } from '@components/marquee2/marquee2.component'
import { FeaturesComponent } from './features.component'
import { PortfolioComponent } from '@components/portfolio/portfolio.component'
import { ServiceComponent } from './service.component'
import { TestimonialsComponent } from './testimonials.component'
import { FaqComponent } from './faq.component'
import { BlogComponent } from './blog.component'

@Component({
  selector: 'app-creative',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    SwiperDirective,
    MarqueeComponent,
    PortfolioComponent,
    BlogComponent,
    HeaderComponent,
    HeroComponent,
    Marquee2Component,
    FeaturesComponent,
    ServiceComponent,
    TestimonialsComponent,
    FaqComponent,
  ],
  template: `
    <!-- header section -->
    <app-header [customLinks]="creativeLink" className="sticky " />

    <!-- hero section -->
    <app-hero />

    <!-- Marquee section -->
    <section>
      <app-marquee2
        [marqueeContent]="marqueeContent"
        [customClass]="customClass"
        [childClass]="childClass"
        [parentClass]="parentClass"
      />
    </section>

    <!-- feature -->
    <app-features />

    <!-- portfolio -->
    <app-portfolio [Swiper]="swiperImage" />

    <!-- services -->
    <app-service />

    <!-- testimonials -->
    <app-testimonials />

    <!-- faq -->
    <app-faq />

    <!-- blog -->
    <app-blog />
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class CreativeComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg-default-100')
  }
  // Marquee Conntent
  marqueeContent: string[] = [
    'UI-UX Experience',
    'Web Development',
    'Digital Marketing',
    'Product Design',
    'Mobile Solutions',
  ]
  customClass = 'py-8'
  childClass = 'text-5xl font-medium text-default-950'
  parentClass = 'py-3'

  // header Link
  creativeLink = [
    { label: 'Home', route: 'home' },
    { label: 'Features ', route: 'features' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Testimonial', route: 'testimonial' },
    { label: 'Faq', route: 'faq' },
    { label: 'Blog', route: 'blog' },
  ]

  // swiper Image
  swiperImage = [
    {
      image: 'assets/images/landing/creative/img-2.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/creative/img-4.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/creative/img-5.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
  ]

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
