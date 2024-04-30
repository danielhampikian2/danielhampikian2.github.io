import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <!-- Hero Section Start -->
    <section
      id="home"
      class="relative overflow-hidden bg-primary/5 py-24 lg:py-40"
    >
      <div class="container">
        <div
          class="mb-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2"
        >
          <div class="max-w-xl">
            <div
              class="inline-block rounded-full border border-primary/20 pe-5"
            >
              <div class="flex items-center gap-2">
                <div
                  class="flex size-6 items-center justify-center rounded-full bg-primary/20"
                >
                  <lucide-angular
                    name="bell"
                    class="size-4 text-default-950"
                  ></lucide-angular>
                </div>
                <span class="text-xs font-medium text-default-950 md:text-sm"
                  >Startup Business</span
                >
              </div>
            </div>
            <h1
              class="my-4 max-w-lg text-4xl font-medium text-default-950 md:text-4xl/tight"
            >
              Empowering startups to fuel their business growth
            </h1>
            <p class="md:text-lg">
              Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
              velit <br />
              nibh arcu eu. Id sem varius malesuada tincidunt sodales.
            </p>

            <div class="inline-block">
              <a
                href="javascript:void(0);"
                class="mt-6 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-primary-700"
                >Get started now</a
              >
            </div>
          </div>
          <!-- col End -->

          <div class="">
            <img src="assets/images/landing/company/hero-img.png" alt="" />
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div
            class="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:text-start"
          >
            <div
              class="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0"
            >
              <div class="sm:pe-5">
                <lucide-angular
                  name="settings"
                  class="mx-auto size-10 text-default-950"
                ></lucide-angular>
              </div>

              <div class="border-primary/20 sm:border-s sm:ps-5">
                <h2 class="text-xl font-medium text-default-950">
                  Immediate Deployment
                </h2>
                <p class="mt-3 text-base">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->

          <div
            class="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:text-start"
          >
            <div
              class="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0"
            >
              <div class="sm:pe-5">
                <lucide-angular
                  name="app-window"
                  class="mx-auto size-10 text-default-950"
                ></lucide-angular>
              </div>

              <div class="border-primary/20 sm:border-s sm:ps-5">
                <h2 class="text-xl font-medium text-default-950">
                  DOS Protection
                </h2>
                <p class="mt-3 text-base">
                  But I need to clarify how this erroneous concept is
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->

          <div
            class="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:text-start"
          >
            <div
              class="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0"
            >
              <div class="sm:pe-5">
                <lucide-angular
                  name="headphones"
                  class="mx-auto size-10 text-default-950"
                ></lucide-angular>
              </div>

              <div class="border-primary/20 sm:border-s sm:ps-5">
                <h2 class="text-xl font-medium text-default-950">
                  Premium Support
                </h2>
                <p class="mt-3 text-base">
                  we disapprove of those who uphold righteous indignation.
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {}
