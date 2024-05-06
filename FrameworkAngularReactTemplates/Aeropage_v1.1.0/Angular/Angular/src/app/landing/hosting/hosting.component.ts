import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { PricingComponent } from './pricing.component'
import { HeroComponent } from './hero.component'
import { SliderComponent } from './slider.component'
import { PlanComponent } from './plan.component'
import { FormComponent } from './form.component'
import { SecurityComponent } from './security.component'
import { SiteComponent } from './site.component'
import { TestimonialComponent } from './testimonial.component'
import { FaqComponent } from './FAQ.component'
import { SignUpComponent } from './signup.component'

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [
    HeaderComponent,
    PricingComponent,
    HeroComponent,
    SliderComponent,
    PlanComponent,
    FormComponent,
    SecurityComponent,
    SiteComponent,
    TestimonialComponent,
    FaqComponent,
    SignUpComponent,
  ],
  template: `
    <app-header [customLinks]="HostingLink" [className]="'fixed'" />
    <section
      id="home"
      class="flex items-center justify-center bg-default-100 py-20 dark:bg-default-50 lg:py-44"
    >
      <div class="container">
        <app-hero />
      </div>
    </section>
    <section class="py-10 lg:py-20">
      <div class="container">
        <app-slider />
      </div>
    </section>
    <section id="pricing" class="py-10 lg:py-20">
      <div class="container">
        <app-pricing />
      </div>
    </section>
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <app-plan />
      </div>
    </section>
    <section class="py-10 lg:py-20">
      <div class="container">
        <app-form />
      </div>
    </section>
    <section id="features" class="py-10 lg:py-20">
      <div class="container">
        <app-security />
      </div>
    </section>
    <section class="py-10 lg:py-20">
      <div class="container">
        <app-site />
      </div>
    </section>
    <!-- testimonials -->
    <app-testimonial />
    <!-- Start Faq -->
    <section id="faq" class="py-20">
      <div class="container">
        <app-faq />
      </div>
    </section>
    <section class="py-10 lg:py-20">
      <div class="container">
        <app-SignUp />
      </div>
    </section>
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HostingComponent {
  HostingLink = [
    { label: 'Home', route: 'home' },
    { label: 'Pricing ', route: 'pricing' },
    { label: 'Services', route: 'services' },
    { label: 'Features', route: 'features' },
    { label: 'Testimonial', route: 'testimonials' },
  ]
}
