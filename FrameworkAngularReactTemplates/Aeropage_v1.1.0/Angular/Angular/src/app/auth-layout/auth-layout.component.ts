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
import { LoaderComponent } from '@components/loader/loader.component'

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, LoaderComponent],
  template: `
    @if (showLoader) {
      <app-loader></app-loader>
    }
    <router-outlet />
  `,
  styles: ``,
})
export class AuthLayoutComponent {
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
