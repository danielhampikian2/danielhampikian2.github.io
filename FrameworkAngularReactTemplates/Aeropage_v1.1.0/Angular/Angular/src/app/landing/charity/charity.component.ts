import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { FreeMode, Pagination, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { HeroComponent } from './hero.component'
import { JoinComponent } from './join.component'
import { CounterComponent } from './counter.component'
import { CausesComponent } from './causes.component'
import { SwiperComponent } from './swiper.component'
import { BlogComponent } from './blog.component'
import { SubscriberComponent } from './subscriber.component'
import { ContactComponent } from './contact.component'
import { SwiperDirective } from '@components/swiper-directive.component'

@Component({
  selector: 'app-charity',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    SwiperDirective,
    HeroComponent,
    JoinComponent,
    CounterComponent,
    CausesComponent,
    SwiperComponent,
    BlogComponent,
    SubscriberComponent,
    ContactComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-header
      [customLinks]="charity"
      className="fixed"
      [sidebarNav]="false"
    />
    <!-- home page -->
    <app-hero />
    <!-- join sectionn -->
    <app-join />
    <!-- counter -->
    <app-counter />
    <!-- causes -->
    <app-causes />
    <!-- swiper -->
    <app-swiper />
    <!-- blog section -->
    <app-blog />
    <!-- subscriber -->
    <app-subscriber />
    <!-- contact section -->
    <app-contact />
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
export class CharityComponent {
  charity = [
    { label: 'Home', route: 'home' },
    { label: 'Join', route: 'join' },
    { label: 'Causes', route: 'causes' },
    { label: 'Blog', route: 'blog' },
    { label: 'Contact', route: 'contact' },
  ]

  // hoportfolio swiper
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Pagination],
    initialSlide: 3,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  }
}
