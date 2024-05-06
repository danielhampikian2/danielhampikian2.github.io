import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { SolutionsComponent } from './solutions.component'
import { ProjectsComponent } from './projects.component'
import { StudiesComponent } from './studies.component'
import { FeaturesComponent } from './features.component'
import { MarketSolutionComponent } from './market-solution.component'
import { PoweredByComponent } from './powered-by.component'
import { MarqueeComponent } from './marquee.component'
import { FaqComponent } from './faq.component'
import { SignupComponent } from './signup.component'

@Component({
  selector: 'app-marketing3',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SolutionsComponent,
    ProjectsComponent,
    StudiesComponent,
    FeaturesComponent,
    SolutionsComponent,
    MarketSolutionComponent,
    PoweredByComponent,
    MarqueeComponent,
    FaqComponent,
    SignupComponent,
  ],
  template: `
    <app-header
      [customLinks]="Marketinglink3"
      [className]="'sticky'"
      [sidebarNav]="false"
    />
    <!-- hero compoenent -->
    <app-hero />
    <!-- Solution -->
    <section id="solutions" class="active py-10 lg:py-20">
      <div class="container">
        <app-solutions />
      </div>
    </section>
    <!-- project Component -->
    <app-projects />
    <!-- studies -->
    <section class="overflow-hidden py-10">
      <div class="container">
        <app-studies />
      </div>
    </section>
    <!-- features  -->
    <app-features />

    <section class="py-10 lg:py-20">
      <div class="container">
        <app-market-solution />
      </div>
    </section>

    <section class="py-10 lg:py-20">
      <div class="container">
        <app-powered-by />
      </div>
    </section>
    <app-marquee />
    <app-faq />
    <app-signup />
  `,
  styles: ``,
})
export class Marketing3Component {
  Marketinglink3 = [
    { label: 'Home', route: 'home' },
    { label: 'Solutions ', route: 'solutions' },
    { label: 'Projects', route: 'projects' },
    { label: 'Features', route: 'features' },
    { label: 'Faq', route: 'faq' },
  ]
}
