import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Event, RouterModule } from '@angular/router'
import { FooterComponent } from '@components/footer/footer.component'
import { ModeSwitchComponent } from '@components/mode-switch/mode-switch.component'
import { HeaderComponent } from '@components/header/header.component'
import { ScrollspyDirective } from '@components/scrollspy/scrollspy.directive'
import { SharedSectionService } from '../core/service/shared-section.service'
import { LoaderComponent } from '@components/loader/loader.component'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    ModeSwitchComponent,
    ScrollspyDirective,
    LoaderComponent,
  ],
  template: `
    @if (showLoader) {
      <app-loader></app-loader>
    }
    <div
      appScrollspy
      [spiedTags]="['SECTION']"
      (sectionChange)="onSectionChange($event)"
    >
      <router-outlet />
      <app-footer />
      <app-mode-switch />
    </div>
  `,
  styles: ``,
})
export class LayoutComponent {
  showLoader: boolean = true
  constructor(
    private sharedSectionService: SharedSectionService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      this.checkRouteChange(event)
    })
  }
  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.sharedSectionService.setCurrentSection(sectionId)
  }

  checkRouteChange(routerEvent: Event) {
    // if route change started
    if (routerEvent instanceof NavigationStart) {
      this.showLoader = true
    }
    // if route change ended
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.showLoader = false
      }, 200)
    }
  }
}
