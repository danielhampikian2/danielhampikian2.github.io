import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { InvestorComponent } from './investor.component'
import { FormComponent } from './form.component'
import { OnbordingComponent } from './onbording.component'
import { AssetsComponent } from './assets.component'
import { ReportingComponent } from './reporting.component'
import { FeatureComponent } from './features.component'
import { ExpertComponent } from './expert.component'
import { HeroComponent } from './hero.component'
import { MarqueeComponent } from './marquee.component'

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    HeaderComponent,
    LucideAngularModule,
    HeroComponent,
    MarqueeComponent,
    ExpertComponent,
    FeatureComponent,
    ReportingComponent,
    AssetsComponent,
    OnbordingComponent,
    FormComponent,
    InvestorComponent,
  ],
  template: `
    <app-header [customLinks]="FinanceLink" className="fixed" />
    <section
      id="home"
      class="relative flex items-center justify-center overflow-hidden bg-gradient-to-l from-primary/5 via-primary/0 to-primary/10 bg-cover md:py-20"
    >
      <div class="container">
        <app-hero />
      </div>
    </section>
    <!-- marquee -->
    <section>
      <app-marquee />
    </section>
    <!-- expertise -->
    <section id="experts" class="py-10 lg:py-20">
      <div class="container">
        <app-expert />
      </div>
    </section>

    <!-- features -->
    <section id="features" class="pt-10 lg:pt-20">
      <div class="container">
        <app-features />
      </div>
    </section>
    <!-- investor -->
    <app-investor />
    <section class="py-10 lg:py-20">
      <div class="container">
        <app-reporting />
      </div>
    </section>

    <!-- assets -->
    <section id="assets" class="py-10 lg:py-20">
      <div class="container">
        <app-assets />
      </div>
    </section>

    <!-- onbording -->

    <section id="onboarding" class="py-10 lg:py-20">
      <div class="container">
        <app-onbording />
      </div>
    </section>

    <section class="py-10 lg:py-20">
      <div class="container">
        <app-form />
      </div>
    </section>
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
export class FinanceComponent {
  menuPosition = false
  FinanceLink = [
    { label: 'Home', route: 'home' },
    { label: 'Experts ', route: 'experts' },
    { label: 'Features', route: 'features' },
    { label: 'Assets', route: 'assets' },
    { label: 'Onboarding', route: 'onboarding' },
  ]
}
