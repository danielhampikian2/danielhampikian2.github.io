import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { CorporationComponent } from './corporation.component'
import { FeaturesComponent } from './features.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { TestimonialsComponent } from './testimonials.component'
import { BlogComponent } from './blog.component'
import { FaqComponent } from './faq.component'
import { JouneyComponent } from './journey.component'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CorporationComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    BlogComponent,
    FaqComponent,
    JouneyComponent,
  ],
  template: `
    <app-header [customLinks]="portfolioLink" [className]="'fixed'" />
    <!-- home section -->
    <app-hero />
    <!-- corporation -->
    <app-corporation />
    <!-- features -->
    <app-features />
    <!-- About -->
    <app-about />
    <!-- services -->
    <app-services />
    <!-- testimonials -->
    <app-testimonials />
    <!-- blog component -->
    <app-blog />
    <!-- faq -->
    <app-faq />
    <!-- journey -->
    <app-jouney />
  `,
  styles: ``,
})
export class PortfolioComponent {
  portfolioLink = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'Blog', route: 'blog' },
    { label: 'Faq', route: 'faq' },
  ]
}
