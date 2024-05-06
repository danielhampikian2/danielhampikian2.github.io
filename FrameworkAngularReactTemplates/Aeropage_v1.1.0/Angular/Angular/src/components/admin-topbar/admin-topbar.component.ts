import { Component, Inject } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { adminMenu } from './data'
import { Router, RouterModule } from '@angular/router'
import { CommonModule, DOCUMENT } from '@angular/common'
import { AdminNavDirective } from '@components/admin-nav.directive'
import { AuthenticationService } from '@core/service/auth.service'

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterModule,
    CommonModule,
    AdminNavDirective,
    RouterModule,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <header class="sticky top-0 z-50">
      <div
        class="z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4"
      >
        <nav class="container flex w-full items-center justify-between gap-6">
          <div>
            <a href="index.html" class="block">
              <img
                src="assets/images/logo-light.png"
                class="flex h-8"
                alt="images"
              />
            </a>
          </div>

          <div class="flex items-center gap-3">
            <div class="relative hidden lg:block">
              <lucide-angular
                name="search"
                class="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
              ></lucide-angular>
              <input
                type="search"
                class="h-10 w-full rounded-full border-0 bg-zinc-800 pe-4 ps-11 text-zinc-300 placeholder-zinc-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
              />
            </div>

            <!-- Fullscreen Button -->
            <div class="hidden sm:flex">
              <button
                (click)="fullscreen()"
                data-toggle="fullscreen"
                type="button"
                class="inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
              >
                @if (fullscreens) {
                  <lucide-angular
                    name="maximize"
                    class="size-5"
                  ></lucide-angular>
                } @else {
                  <lucide-angular
                    name="minimize"
                    class="size-5"
                  ></lucide-angular>
                }
              </button>
            </div>

            <!-- Notification Dropdown -->
            <div class="hidden sm:flex">
              <div
                class="hs-dropdown relative inline-flex [--placement:bottom-right]"
              >
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  class="hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
                >
                  <lucide-angular name="mail" class="size-5"></lucide-angular>
                  <span
                    class="absolute -end-0 -top-0 size-4 rounded-full bg-primary text-xs font-medium text-white"
                    >2</span
                  >
                </button>

                <div
                  class="hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                >
                  <div class="flex items-center justify-between px-4 py-3">
                    <h6 class="text-base font-semibold text-default-900">
                      Messages
                    </h6>
                    <a
                      href="javascript: void(0);"
                      class="border-b border-dashed border-default-300 font-semibold text-default-800"
                    >
                      <small>Clear All</small>
                    </a>
                  </div>

                  <div
                    class="h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
                  >
                    <a
                      class="mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100"
                    >
                      <span
                        class="inline-flex size-9 items-center justify-center rounded-full bg-primary/20 text-primary"
                        ><lucide-angular
                          name="alert-octagon"
                          class="size-5"
                        ></lucide-angular
                      ></span>
                      <span class="px-3">
                        <h6 class="text-sm font-semibold text-default-800">
                          Check this out!
                        </h6>
                        <p class="text-xs text-default-600">
                          Please review this file.
                        </p>
                      </span>
                    </a>
                    <a
                      class="mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100"
                    >
                      <span
                        class="inline-flex size-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-500"
                        ><lucide-angular
                          name="shield-half"
                          class="size-5"
                        ></lucide-angular
                      ></span>
                      <span class="px-3">
                        <h6 class="text-sm font-semibold text-default-800">
                          Congratulations!
                        </h6>
                        <p class="text-xs text-default-600">
                          Your OS System successfully updated.
                        </p>
                      </span>
                    </a>
                    <a
                      class="mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100"
                    >
                      <span
                        class="inline-flex size-9 items-center justify-center rounded-full bg-red-500/20 text-red-500"
                        ><lucide-angular
                          name="shield-half"
                          class="size-5"
                        ></lucide-angular
                      ></span>
                      <span class="px-3">
                        <h6 class="text-sm font-semibold text-default-800">
                          An error occurred
                        </h6>
                        <p class="text-xs text-default-600">
                          There was a problem in your code.
                        </p>
                      </span>
                    </a>
                  </div>

                  <a
                    href="javascript:void(0);"
                    class="block px-4 py-3 text-center text-sm font-medium text-primary"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>

            <!-- Language -->
            <div class="hidden sm:flex">
              <div
                class="hs-dropdown relative inline-flex [--placement:bottom-right]"
              >
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  class="hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
                >
                  <lucide-angular
                    name="layout-grid"
                    class="size-5"
                  ></lucide-angular>
                </button>

                <div
                  class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                >
                  <div class="grid grid-cols-3 gap-3">
                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/github.png"
                        class="h-6"
                        alt="Github"
                      />
                      <span>GitHub</span>
                    </a>

                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/bitbucket.png"
                        class="h-6"
                        alt="bitbucket"
                      />
                      <span>Bitbucket</span>
                    </a>

                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/dropbox.png"
                        class="h-6"
                        alt="dropbox"
                      />
                      <span>Dropbox</span>
                    </a>

                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/slack.png"
                        class="h-6"
                        alt="slack"
                      />
                      <span>Slack</span>
                    </a>

                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/dribbble.png"
                        class="h-6"
                        alt="dribbble"
                      />
                      <span>Dribbble</span>
                    </a>

                    <a
                      class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
                      href="javascript:void(0);"
                    >
                      <img
                        src="assets/images/brand/behance.png"
                        class="h-6"
                        alt="Behance"
                      />
                      <span>Behance</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Profile Dropdown -->
            <div class="flex">
              <div class="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  class="hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all"
                >
                  <img
                    class="inline-block size-9 rounded-full"
                    src="assets/images/avatars/img-1.jpg"
                  />
                  <div class="hidden text-start lg:block">
                    <p class="text-sm font-bold text-white">Diane Berry</p>
                    <p class="mt-1 text-xs font-semibold text-zinc-400">
                      Admin
                    </p>
                  </div>
                </button>

                <div
                  class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                >
                  <a
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                    href="javascript:void(0);"
                  >
                    <lucide-angular name="user" class="size-4"></lucide-angular>
                    My Profile
                  </a>
                  <a
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                    routerLink="/"
                    target="_blank"
                  >
                    <lucide-angular
                      name="newspaper"
                      class="size-4"
                    ></lucide-angular>
                    Landing
                  </a>
                  <a
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
                    href="javascript:void(0);"
                  >
                    <lucide-angular
                      name="settings"
                      class="size-4"
                    ></lucide-angular>
                    Setting
                  </a>

                  <hr class="-mx-2 my-2 border-default-200" />

                  <a
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-400/10"
                    (click)="logout()"
                  >
                    <lucide-angular
                      name="log-out"
                      class="size-4"
                    ></lucide-angular>
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <nav
        appAdminNav
        class="admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50"
      >
        <div
          class="custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5"
        >
          @for (item of adminMenus; track $index) {
            <div class="shrink-0 snap-center px-2">
              <a
                class="inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary"
                [class.active]="item.active"
                routerLink="{{ item.link }}"
              >
                <lucide-angular
                  name="{{ item.icon }}"
                  class="size-5"
                ></lucide-angular>
                <span>{{ item.text }}</span>
              </a>
            </div>
          }
        </div>
      </nav>
    </header>
  `,
  styles: ``,
})
export class AdminTopbarComponent {
  adminMenus = adminMenu
  element: any
  fullscreens: boolean = true
  link = '/admin/dashboard'

  constructor(
    @Inject(DOCUMENT) private document: any,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.adminMenus = adminMenu
  }

  ngOnInit(): void {
    this.element = document.documentElement
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    // Check if this.element is defined
    if (!this.element) {
      console.error('Element is not defined.')
      return
    }

    document.body.classList.toggle('open')

    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen()
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen()
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen()
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen()
      }
      this.fullscreens = false
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen()
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen()
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen()
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen()
      }
      this.fullscreens = true
    }
  }

  // logout
  logout() {
    this.router.navigate(['/auth/logout'])
    this.authenticationService.logout()
  }
}
