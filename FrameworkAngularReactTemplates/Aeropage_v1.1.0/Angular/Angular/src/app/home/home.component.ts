import { Component } from '@angular/core'
import { NavbarComponent } from './navbar/navbar.component'
import { HeroComponent } from './hero/hero.component'
import { FooterComponent } from './footer/footer.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { FeatureComponent } from './feature/feature.component'
import { ModeSwitchComponent } from '@components/mode-switch/mode-switch.component'
import { RouterModule } from '@angular/router'
import { SharedSectionService } from '../core/service/shared-section.service'
import { ScrollspyDirective } from '@components/scrollspy/scrollspy.directive'
import { demos } from './data'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    FeatureComponent,
    LucideAngularModule,
    ModeSwitchComponent,
    RouterModule,
    ScrollspyDirective,
  ],
  templateUrl: './home.component.html',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class HomeComponent {
  demosData = demos
  constructor(private sharedSectionService: SharedSectionService) {}

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.sharedSectionService.setCurrentSection(sectionId)
  }
}
