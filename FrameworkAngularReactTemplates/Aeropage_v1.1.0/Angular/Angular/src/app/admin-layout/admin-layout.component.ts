import { Component } from '@angular/core'
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router'
import { AdminFooterComponent } from '@components/admin-footer/admin-footer.component'
import { AdminTopbarComponent } from '@components/admin-topbar/admin-topbar.component'
import { LoaderComponent } from '@components/loader/loader.component'
import { ModeSwitchComponent } from '@components/mode-switch/mode-switch.component'

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterModule,
    AdminTopbarComponent,
    ModeSwitchComponent,
    AdminFooterComponent,
    LoaderComponent,
  ],
  template: `
    @if (showLoader) {
      <app-loader></app-loader>
    }
    <app-admin-topbar />
    <router-outlet />
    <app-mode-switch />
    <app-admin-footer />
  `,
  styles: ``,
})
export class AdminLayoutComponent {
  showLoader: boolean = true

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.checkRouteChange(event)
    })
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
