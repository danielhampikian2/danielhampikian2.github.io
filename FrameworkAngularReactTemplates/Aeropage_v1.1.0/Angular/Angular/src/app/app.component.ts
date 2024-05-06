import { Component } from '@angular/core'
import { Event, RouterOutlet } from '@angular/router'
import { Router } from '@angular/router'
import { NavigationEnd } from '@angular/router'
import { IStaticMethods } from 'preline/preline'
import { TitleService } from './core/service/title'
import { LoaderComponent } from '@components/loader/loader.component'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit()
        }, 100)
      }
    })
    this.titleService.init()
  }
}
