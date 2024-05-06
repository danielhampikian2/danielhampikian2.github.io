import { Component } from '@angular/core'
import { MarqueeComponent } from '@components/marquee/marquee.component'
import { HeroComponent } from '../portfolio2/hero.component'
import { HeaderComponent } from '@components/header/header.component'
import { AboutComponent } from './about.component'
import { ProjectComponent } from './project.component'
import { AdvantageComponent } from './advantage.component'
import { AcknowledgementComponent } from './acknowledgement.component'
import { TestimonialsComponent } from './testimonials.component'
import { BlogComponent } from './blog.component'
import { InnovationComponent } from './innovation.component'

@Component({
  selector: 'app-portfolio2',
  standalone: true,
  imports: [
    MarqueeComponent,
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    ProjectComponent,
    AdvantageComponent,
    AcknowledgementComponent,
    TestimonialsComponent,
    BlogComponent,
    InnovationComponent,
  ],
  template: `
    <app-header [customLinks]="portfolio2Link" [className]="'fixed'" />
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
    <!-- about -->
    <app-about />
    <!-- project -->
    <app-project />
    <!-- advantages -->
    <app-advantage />
    <!-- acknowledgement -->
    <app-acknowledgement />
    <!-- testimonials -->
    <app-testimonials />
    <!-- blog -->
    <app-blog />
    <!-- innovation -->
    <app-innovation />
  `,
  styles: ``,
})
export class Portfolio2Component {
  // marquee
  marqueeContent: string[] = [
    'UI-UX Experience',
    'Web Development',
    'Digital Marketing',
    'Product Design',
    'Mobile Solutions',
  ]
  customClass = 'text-4xl text-white'
  childClass = 'gap-28 py-6'
  parentClass = 'gap-28 bg-black'

  // header

  portfolio2Link = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Project', route: 'project' },
    { label: 'Advantage', route: 'advantages' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'Blog', route: 'blog' },
  ]
}
