import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { FeatureComponent } from './feature.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { PortfoliomarketComponent } from './portfolio.component'
import { FaqComponent } from './faq.component'
import { TestimonialsComponent } from './testimonials.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { BlogComponent } from './blog.component'
import { MarqueeComponent } from '@components/marquee/marquee.component'

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    AboutComponent,
    ServicesComponent,
    PortfoliomarketComponent,
    FaqComponent,
    TestimonialsComponent,
    LucideAngularModule,
    BlogComponent,
    MarqueeComponent,
  ],

  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <app-header [customLinks]="Marketinglink" [className]="'fixed'" />
    <!-- hero section -->
    <app-hero />
    <!-- marquee -->
    <section>
      <app-marquee
        [marqueeContent]="marqueeContent"
        [customClass]="customClass"
        [childClass]="childClass"
        [parentClass]="parentClass"
      />
    </section>
    <!-- features -->
    <section id="features" class="py-10 lg:py-20">
      <div class="container">
        <app-feature />
      </div>
    </section>

    <!-- about section -->
    <app-about />

    <app-services />

    <!-- portfolio -->
    <app-portfoliomarket />

    <!-- Start Faq -->
    <section id="faq" class="bg-white py-10 dark:bg-default-50 lg:py-20">
      <div class="container">
        <app-faq />
      </div>
    </section>

    <!-- Start Testimonials -->
    <section id="testimonial" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Testimonials</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              What People Says?
            </h2>
          </div>
        </div>
        <!-- flex End -->
        <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div class="relative">
            <app-testimonials />
            <div class="z-10 hidden pt-6 md:block">
              <div class="relative flex items-center justify-end gap-5 pe-10">
                <div class="testimonials-button-prev">
                  <div
                    class="flex size-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary"
                  >
                    <lucide-angular
                      name="arrow-left"
                      class="size-7"
                    ></lucide-angular>
                  </div>
                </div>
                <div class="testimonials-button-next">
                  <div
                    class="flex size-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary"
                  >
                    <lucide-angular
                      name="arrow-right"
                      class="size-7"
                    ></lucide-angular>
                  </div>
                </div>
              </div>
              <!-- flex end -->
            </div>
          </div>
          <!-- col End -->

          <div class="me-0 lg:mx-auto">
            <div class="relative z-10">
              <div
                class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block"
              ></div>
              <img
                src="assets/images/landing/marketing/img-11.png"
                class="mx-auto rounded-full"
                alt=""
              />
            </div>
          </div>
          <!-- col End -->
        </div>
      </div>
    </section>

    <!-- blog -->
    <!-- Start Blog -->
    <section id="blog" class="py-10 lg:py-20">
      <div class="container">
        <app-blog />
      </div>
    </section>
  `,

  styles: ``,
})
export class MarketingComponent {
  Marketinglink = [
    { label: 'Home', route: 'home' },
    { label: 'Features ', route: 'features' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Faq', route: 'faq' },
    { label: 'Testimonial', route: 'testimonial' },
    { label: 'Blog  ', route: 'blog' },
  ]

  marqueeContent: string[] = [
    'UI-UX Experience',
    'Web Development',
    'Digital Marketing',
    'Product Design',
    'Mobile Solutions',
  ]
  customClass = 'text-4xl font-medium text-default-950'
  childClass = 'gap-28'
  parentClass = 'border border-default-200 py-6'
}
