import { Directive, ElementRef, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Directive({
  selector: '[appAdminNav]',
  standalone: true,
})
export class AdminNavDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.setActiveClass()
        })
      }
    })
  }

  private setActiveClass(): void {
    const currentUrl = window.location.href.split(/[?#]/)[0]
    const links = this.el.nativeElement.querySelectorAll('.admin-menu a')

    links.forEach((link: HTMLAnchorElement) => {
      // Check for an exact match of the current URL and the routerLink
      if (
        link.href === currentUrl ||
        link.getAttribute('routerLink') === currentUrl
      ) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
}
