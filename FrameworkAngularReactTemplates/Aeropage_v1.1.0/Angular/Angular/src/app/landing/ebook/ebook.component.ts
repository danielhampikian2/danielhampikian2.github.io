import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { SwiperDirective } from '@components/swiper-directive.component'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.omponent'
import { BenefitsComponent } from './benefits.component'
import { CourcesComponent } from './cources.component'
import { TestimonialComponent } from './testimonial.component'
import { BookauthoreCompoent } from './bookauthore.component'

@Component({
  selector: 'app-ebook',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    SwiperDirective,
    HeroComponent,
    AboutComponent,
    BenefitsComponent,
    CourcesComponent,
    TestimonialComponent,
    BookauthoreCompoent,
  ],
  template: `
    <app-header
      [customLinks]="ebookLink"
      className="fixed"
      [sidebarNav]="false"
    />
    <app-hero />
    <!-- About Start -->
    <section id="about" class="py-10 lg:py-20">
      <div class="container">
        <app-about />
      </div>
    </section>

    <section id="benefits" class="py-10 lg:py-20">
      <div class="container">
        <app-benefit />
      </div>
    </section>

    <!-- Features Start -->
    <section id="courses" class="bg-default-100 py-10 lg:py-20">
      <div class="container">
        <app-cources />
      </div>
    </section>

    <!-- Start Testimonials -->
    <section id="testimonials" class="py-10 lg:py-20">
      <div class="container">
        <app-testimonial />
      </div>
    </section>
    <section class="bg-default-100 dark:bg-default-50">
      <div class="container">
        <app-bookauthore />
      </div>
    </section>
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
export class EbookComponent {
  ebookLink = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Benefits', route: 'benefits' },
    { label: 'Courses', route: 'courses' },
    { label: 'Testimonials', route: 'testimonials' },
  ]
}
