import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { PortfolioComponent } from './portfolio.component'
import { InvestmentStepsComponent } from './investment-steps.component'
import { VideoPlayerComponent } from '@components/video-player.component'
import { TestimonialsComponent } from './testimonials.component'
import { BlogComponent } from './blog.component'
import { DomainNameComponent } from './domain-name.component'
import { ContactComponent } from './contact.component'
import { MarqueeComponent } from '@components/marquee/marquee.component'
import { MarketingBoostComponent } from './marketing-boost.component'

@Component({
  selector: 'app-marketing2',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    MarqueeComponent,
    PortfolioComponent,
    InvestmentStepsComponent,
    VideoPlayerComponent,
    TestimonialsComponent,
    BlogComponent,
    DomainNameComponent,
    ContactComponent,
    MarketingBoostComponent,
  ],
  template: `
    <app-header
      [customLinks]="Marketinglink2"
      [className]="'fixed'"
      [sidebarNav]="true"
    />
    <!-- hero compoenent -->
    <app-hero />
    <!-- marquee component -->
    <section>
      <app-marquee
        [marqueeContent]="marqueeContent"
        [customClass]="customClass"
        [childClass]="childClass"
        [parentClass]="parentClass"
      />
    </section>
    <!-- Start About -->
    <section id="about" class="py-10 lg:py-20">
      <div class="container">
        <app-about />
      </div>
    </section>

    <!-- Start Services -->
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <app-services />
      </div>
    </section>

    <!-- Start Portfolio -->
    <section id="portfolio" class="py-10 lg:py-20">
      <div class="container">
        <app-portfolio />
      </div>
    </section>
    <!-- investmentSteps -->

    <!-- Start Steps Section -->
    <section class="relative h-full py-16 lg:py-32">
      <div class="container">
        <app-investment-steps />
      </div>
    </section>

    <!-- Start Testimonials -->
    <section id="testimonial" class="py-10 lg:py-20">
      <div class="container">
        <app-testimonials />
      </div>
    </section>

    <!-- marketing Boost -->
    <app-marketing-boost />

    <!-- Start Blog -->
    <section id="blog" class="py-10 lg:py-20">
      <div class="container">
        <app-blog />
      </div>
    </section>

    <!-- domain name -->
    <section>
      <div class="container">
        <app-domain-name />
      </div>
    </section>

    <!-- contact start -->
    <section id="contact" class="py-10 lg:py-20">
      <div class="container">
        <app-contact />
      </div>
    </section>
  `,
  styles: ``,
})
export class Marketing2Component {
  Marketinglink2 = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Testimonial', route: 'testimonial' },
    { label: 'Blog', route: 'blog' },
    { label: 'Contact', route: 'contact' },
  ]

  marqueeContent: string[] = [
    'UI-UX Experience',
    'Web Development',
    'Digital Marketing',
    'Product Design',
    'Mobile Solutions',
  ]
  customClass = 'py-6 text-4xl text-default-950'
  childClass = 'gap-28'
  parentClass = 'bg-default-100 dark:bg-default-50'
}
