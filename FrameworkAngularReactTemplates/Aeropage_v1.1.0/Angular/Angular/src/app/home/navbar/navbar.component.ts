import { CommonModule } from '@angular/common'
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { ScrollspyDirective } from '@components/scrollspy/scrollspy.directive'
import { SharedSectionService } from '@core/service/shared-section.service'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    ScrollspyDirective,
    ScrollToModule,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
    ScrollToService,
  ],
  template: `<header
    #homenavbar
    id="navbar"
    [ngClass]="navSticky ? 'nav-sticky' : ''"
    class="fixed inset-x-0 top-0 z-40 w-full border-b border-default-200 bg-white/80 backdrop-blur-3xl transition-all duration-300 dark:bg-default-50/80 lg:border-transparent lg:bg-transparent lg:backdrop-blur-0 [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80"
  >
    <div class="flex h-full items-center py-4">
      <div class="container">
        <nav
          class="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap"
        >
          <div class="flex w-full items-center justify-between lg:w-auto">
            <!-- Navbar Brand Logo -->
            <a routerLink="/">
              <img
                src="assets/images/logo-dark.png"
                alt="logo"
                class="flex h-10 dark:hidden"
              />
              <img
                src="assets/images/logo-light.png"
                alt="logo"
                class="hidden h-10 dark:flex"
              />
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button
              class="hs-collapse-toggle inline-block lg:hidden"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <lucide-angular
                name="menu"
                class="size-7 text-default-600 hover:text-default-900"
              ></lucide-angular>
            </button>
          </div>

          <!-- Navigation Menu -->
          <div
            id="mobileMenu"
            class="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto"
          >
            <ul
              class="menu flex flex-col justify-center gap-y-2 lg:flex-row lg:items-center"
            >
              <!-- Contact us Link -->
              <li
                [ngClass]="{ active: currentSection === 'home' }"
                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
              >
                <a
                  [ngxScrollTo]="'#home'"
                  class="inline-flex items-center rounded-full px-4 py-2 "
                  href="javascript:void(0);"
                  >Home</a
                >
              </li>
              <!-- Contact us Link -->
              <li
                [ngClass]="{ active: currentSection === 'demo' }"
                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
              >
                <a
                  [ngxScrollTo]="'#demo'"
                  class="inline-flex items-center rounded-full px-4 py-2"
                  href="javascript:void(0);"
                  >Demos</a
                >
              </li>
              <!-- Contact us Link -->
              <li
                [ngClass]="{ active: currentSection === 'features' }"
                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
              >
                <a
                  [ngxScrollTo]="'#features'"
                  class="inline-flex items-center rounded-full px-4 py-2"
                  href="javascript:void(0);"
                  >Features</a
                >
              </li>
            </ul>
          </div>

          <div class="ms-auto hidden shrink gap-2 lg:inline-flex">
            <a
              href="javascript:void(0);"
              class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all duration-300 hover:bg-primary-700"
            >
              <lucide-angular
                name="download-cloud"
                class="size-4 fill-white/40"
              ></lucide-angular>
              <span class="hidden sm:block">Download</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>`,
  styles: ``,
})
export class NavbarComponent {
  currentSection: any = 'home'
  @ViewChild('homenavbar') navbarRef!: ElementRef
  navSticky = false

  constructor(private sharedSectionService: SharedSectionService) {}

  ngOnInit() {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) element.scrollIntoView()
    }

    // current section
    this.sharedSectionService.currentSection$.subscribe((section) => {
      this.currentSection = section
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.navbarRef) {
      const scrollY = window.scrollY || window.pageYOffset
      if (scrollY >= 80) {
        this.navSticky = true
      } else {
        this.navSticky = false
      }
    }
  }
}
