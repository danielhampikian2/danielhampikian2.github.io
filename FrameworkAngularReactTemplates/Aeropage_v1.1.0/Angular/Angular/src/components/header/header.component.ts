import { CommonModule } from '@angular/common'
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import { SharedSectionService } from '@core/service/shared-section.service'
import { landing } from '@app/home/data'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    LucideAngularModule,
    ScrollToModule,
    CommonModule,
  ],
  providers: [
    ScrollToService,
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <!-- Main Navigation Menu -->
    <header
      id="navbar"
      #homenavbar
      [ngClass]="{ 'nav-sticky': navSticky === true }"
      class="{{
        className
      }} inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80"
    >
      @if (sidebarNav) {
        <div class="container">
          <div class="flex items-center justify-between gap-4">
            <div class="shrink">
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
            </div>
            <ul
              class="menu relative mx-auto hidden grow items-center justify-center lg:flex"
            >
              @for (item of customLinks; track $index) {
                <li
                  class="menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary"
                  [ngClass]="{ active: currentSection === item.route }"
                >
                  <a
                    class="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                    [ngxScrollTo]="item.route"
                    href="javascript:void(0);"
                    >{{ item.label }}
                  </a>
                </li>
              }
              <!-- Dropdown Menu -->
              <li class="menu-item group">
                <div
                  class="hs-dropdown relative inline-flex [--placement:bottom] [--trigger:hover]"
                >
                  <a
                    class="hs-dropdown-toggle inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary group-hover:after:-bottom-16 lg:text-base"
                    href="javascript:void(0);"
                  >
                    Landing
                    <lucide-angular
                      class="me-1 ms-1 size-4"
                      name="chevron-down"
                    ></lucide-angular>
                  </a>

                  <div
                    class="hs-dropdown-menu z-10 mt-4 hidden min-w-48 rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                  >
                    <ul class="flex flex-col gap-1">
                      @for (item of landingName; track $index) {
                        <li>
                          <a
                            class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700"
                            [routerLink]="item.url"
                            >{{ item.title }}</a
                          >
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            <div class="ms-auto inline-flex shrink gap-2">
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
              >
                <lucide-angular
                  name="download-cloud"
                  class="size-4 fill-white/40"
                ></lucide-angular>
                <span class="hidden sm:block">Download</span>
              </a>
              <!-- Mobile Menu Toggle Button -->
              <button
                class="inline-block lg:hidden"
                data-hs-overlay="#mobile-menu"
              >
                <lucide-angular
                  name="menu"
                  class="size-7 text-default-600 hover:text-default-900"
                ></lucide-angular>
              </button>
            </div>
          </div>
        </div>
      } @else {
        <div class="container">
          <div
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

            <div
              id="mobileMenu"
              class="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto"
            >
              <!-- Navigation Menu -->
              <ul
                class="menu flex flex-col justify-center gap-y-2 lg:flex-row lg:items-center"
              >
                @for (item of customLinks; track $index) {
                  <li
                    class="menu-item text-default-800 transition-all hover:text-primary lg:mx-2 [&.active]:text-primary"
                    [ngClass]="{ active: currentSection === item.route }"
                  >
                    <a
                      class="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                      href="javascript:void(0);"
                      [ngxScrollTo]="item.route"
                      >{{ item.label }}</a
                    >
                  </li>
                }
                <li class="menu-item group text-default-800 lg:mx-2">
                  <div
                    class="hs-dropdown relative inline-flex [--placement:bottom]"
                  >
                    <a
                      class="hs-dropdown-toggle inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium after:absolute after:inset-0 after:-bottom-20 hover:text-primary lg:text-base"
                      href="javascript:void(0)"
                    >
                      Landing
                      <lucide-angular
                        class="mx-1 size-4"
                        name="chevron-down"
                      ></lucide-angular>
                    </a>

                    <div
                      class="hs-dropdown-menu z-10 mt-4 hidden min-w-48 rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                    >
                      <ul class="grid grid-cols-2 gap-1">
                        @for (item of landingName; track $index) {
                          <li>
                            <a
                              class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700"
                              [routerLink]="item.url"
                            >
                              {{ item.title }}</a
                            >
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="ms-auto hidden shrink gap-2 lg:inline-flex">
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
              >
                <lucide-icon
                  name="download-cloud"
                  class="size-4 fill-white/40"
                ></lucide-icon>
                <span class="hidden sm:block">Download</span>
              </a>
            </div>
          </div>
        </div>
      }
    </header>

    <!-- Mobile Menu (Sidebar Menu) -->
    <div
      id="mobile-menu"
      class="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
      tabindex="-1"
    >
      <div
        class="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300"
      >
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
        <div data-hs-overlay="#mobile-menu" class="hs-collapse-toggle">
          <lucide-angular name="x" class="size-5"></lucide-angular>
        </div>
      </div>
      <div class="h-[calc(100%-4rem)] overflow-y-auto">
        <nav
          class="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4"
        >
          <ul class="space-y-1">
            @for (item of customLinks; track $index) {
              <li
                [ngClass]="{ active: currentSection === item.route }"
                class="rounded  text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary"
              >
                <a
                  class="block w-full px-4 py-2.5 "
                  [ngxScrollTo]="item.route"
                  >{{ item.label }}</a
                >
              </li>
            }
            <li class="hs-accordion" id="landing-accordion">
              <a
                class="hs-accordion-toggle flex items-center rounded px-4 py-2.5 text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary hs-accordion-active:bg-default-400/10 [&.active]:bg-default-100 [&.active]:text-primary"
                href="javascript:void(0);"
              >
                Landing
                <lucide-angular
                  name="chevron-down"
                  class="ms-auto size-5 transition-all hs-accordion-active:rotate-180"
                ></lucide-angular>
              </a>

              <div
                id="landing-accordion"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height]"
              >
                <ul class="ps-2 pt-2">
                  @for (item of landingName; track $index) {
                    <li>
                      <a
                        class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-primary"
                        [routerLink]="item.url"
                        >{{ item.title }}</a
                      >
                    </li>
                  }
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  @Input() className!: string
  @Input() customLinks: any[] = []
  @Input() currentSection: string = 'home'
  @Input() sidebarNav: boolean = true
  @ViewChild('homenavbar') navbarRef!: ElementRef

  navSticky = false
  landingName = landing

  constructor(
    private sharedSectionService: SharedSectionService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) element.scrollIntoView()
    }

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
