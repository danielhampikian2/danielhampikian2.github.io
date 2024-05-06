import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { HeaderComponent } from '@components/header/header.component'
import { SwiperDirective } from '@components/swiper-directive.component'
import { HeroComponent } from './hero.component'
import { AdvantagesComponent } from './advantages.component'
import { ServiceComponent } from './service.component'
import { FaqComponent } from './faq.component'
import { TestimonialsComponent } from './testimonials.component'
import { BlogComponent } from './blog.component'

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    LucideAngularModule,
    HeaderComponent,
    SwiperDirective,
    HeroComponent,
    AdvantagesComponent,
    ServiceComponent,
    FaqComponent,
    TestimonialsComponent,
    BlogComponent,
  ],
  template: `
    <app-header [customLinks]="companyLink" className="fixed"></app-header>
    <!-- hero section -->
    <app-hero />
    <!-- Competetive Advantages  -->
    <app-advantages />
    <!-- service section -->
    <app-service />
    <!-- faq section -->
    <app-faq />
    <!-- testimonial section -->
    <app-testimonials />
    <!-- blog section -->
    <app-blog />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class CompanyComponent {
  // companylink
  companyLink = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Faq', route: 'faq' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'Blog', route: 'blog' },
  ]
}
