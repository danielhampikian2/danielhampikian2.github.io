import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
// Lucide icons
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  template: `<section
    class="bg-default-10 relative border-b border-default-100 bg-[url(../images/other/bg-lines-2.png)] py-6 dark:bg-default-50 dark:bg-[url(../images/other/bg-lines-2-dark.png)] sm:py-10 md:py-32"
    id="home"
  >
    <div class="px-6 sm:px-10 md:px-20">
      <div class="grid items-center gap-x-6 gap-y-10">
        <div class="mb-10 mt-12 flex flex-col items-center justify-center">
          <div class="text-center">
            <div class="mb-4 flex items-center justify-center gap-4">
              <span class="h-10">
                <img
                  src="assets/images/logo-sm.png"
                  alt="images"
                  class="h-full max-w-full"
                />
              </span>
              <span
                class="inline-block rounded-md bg-primary/10 px-4 text-base/loose font-semibold text-primary"
                >v1.0.0</span
              >
            </div>
            <h1
              class="mb-6 text-3xl font-semibold capitalize text-default-950 sm:text-5xl/tight"
            >
              <span class="text-primary">AeroPage</span> - One Page Template
            </h1>
            <p class="mx-auto max-w-3xl text-base text-default-700">
              The Make your website or web application perfect starting point
              for your next project and the ultimate resource for learning how
              experts build real websites with Tailwind CSS.
            </p>
          </div>

          <div class="my-16 text-center">
            <p class="text-xl font-medium text-default-900">Technology stack</p>
            <div
              class="mt-4 inline-flex flex-wrap items-center justify-center gap-3"
            >
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img
                    src="assets/images/demo/logo/tailwindcss.svg"
                    class="size-8"
                  />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  Tailwindcss
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img src="assets/images/demo/logo/html.svg" class="size-8" />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  HTML5
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img src="assets/images/demo/logo/css.svg" class="size-8" />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  CSS3
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img
                    src="assets/images/demo/logo/javascript.svg"
                    class="size-8"
                  />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  Javascript
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img src="assets/images/demo/logo/bun.svg" class="size-8" />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  Bun
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img src="assets/images/demo/logo/yarn.svg" class="size-8" />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  Yarn
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
              <div
                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
              >
                <div
                  class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                >
                  <img
                    src="assets/images/demo/logo/vitejs-logo.svg"
                    class="size-8"
                  />
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                  data-popper-placement="top"
                >
                  ViteJs
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary-600"
            >
              Landing Demos
              <lucide-angular
                name="eye"
                [class]="'ms-3 size-5'"
              ></lucide-angular
            ></a>
            <a
              routerLink="/admin/dashboard"
              target="_blank"
              class="inline-flex items-center justify-center rounded-lg bg-primary/20 px-6 py-2 font-semibold text-primary backdrop-blur-2xl transition-all duration-500 hover:bg-primary hover:text-white"
            >
              Admin Demos
              <lucide-angular
                name="airplay"
                [class]="'ms-3 size-5'"
              ></lucide-angular
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class HeroComponent {}
