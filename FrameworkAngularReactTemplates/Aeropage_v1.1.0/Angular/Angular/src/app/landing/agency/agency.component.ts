import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element/bundle'

import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { PortfoliosComponent } from './portfolio.component'
import { Service2Component } from './service2.component'
import { FaqComponent } from './faq.component'
import { BlogComponent } from './blog.component'
import { ContactComponent } from './contact.component'
import { HeaderComponent } from '@components/header/header.component'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Marquee2Component } from '@components/marquee2/marquee2.component'

register()

@Component({
  selector: 'app-index1',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    SwiperDirective,
    HeroComponent,
    Marquee2Component,
    AboutComponent,
    ServicesComponent,
    PortfoliosComponent,
    Service2Component,
    FaqComponent,
    BlogComponent,
    ContactComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- header section -->
    <app-header
      [customLinks]="indexAgency"
      className="sticky"
      [sidebarNav]="true"
    />
    <!--hero section  -->
    <app-hero />
    <!-- marquee section -->
    <app-marquee2
      [marqueeContent]="marqueeContent"
      [customClass]="customClass"
      [parentClass]="parentClass"
      [childClass]="childClass"
    />
    <!-- about section -->
    <app-about />
    <!-- service -->
    <app-services />
    <!-- portfolio -->
    <app-portfolios />
    <!-- service2 -->
    <app-service2 />
    <!-- faq -->
    <app-faq />
    <!-- blog -->
    <app-blog />
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
export class AgencyComponent {
  currentSection = 'home'
  // header
  indexAgency = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Faq', route: 'faq' },
    { label: 'Blog', route: 'blog' },
    { label: 'Contact', route: 'contact' },
    // Add more links as needed
  ]

  // marquee
  marqueeContent: string[] = [
    'UI-UX Experience',
    'Web Development',
    'Digital Marketing',
    'Product Design',
    'Mobile Solutions',
  ]
  customClass = 'py-6'
  parentClass = 'text-4xl font-medium text-default-950'
  childClass = 'py-2'
}
