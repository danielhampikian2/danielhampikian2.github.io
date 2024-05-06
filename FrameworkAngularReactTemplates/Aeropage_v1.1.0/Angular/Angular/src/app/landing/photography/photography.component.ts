import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { PortfolioComponent } from './portfolio.component'
import { FaqComponent } from './faq.component'
import { LatestUpdatesComponent } from './latest-updates.component'
import { AdventureComponent } from './adventure.component'
import { MarqueeComponent } from '@components/marquee/marquee.component'

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    MarqueeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    FaqComponent,
    LatestUpdatesComponent,
    AdventureComponent,
  ],
  template: `
    <app-header
      [customLinks]="photographyLinks"
      [className]="'sticky'"
      [sidebarNav]="false"
    />
    <!-- hero component -->
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
    <!-- services -->
    <app-services />
    <!-- portfolio -->
    <app-portfolio />
    <!-- faq  -->
    <app-faq />
    <!-- latest updates -->
    <app-latest-updates />
    <!-- Adventure -->
    <app-adventure />
    <!-- marquee -->
    <section>
      <app-marquee
        [marqueeContent]="marqueeContent"
        [customClass]="customClass"
        [childClass]="childClass"
        [parentClass]="parentClass"
      />
    </section>
  `,
  styles: ``,
})
export class PhotographyComponent {
  photographyLinks = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Faq', route: 'faq' },
  ]

  marqueeContent: string[] = [
    'Wildlife photography',
    'Pet portraits',
    'Nature photography ',
    'Pet portraits',
    'Nature photography',
  ]
  customClass = 'text-4xl text-white'
  childClass = 'gap-28 py-6'
  parentClass = 'gap-28 bg-black'
}
