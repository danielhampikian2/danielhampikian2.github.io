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
      class="relative flex items-center justify-center overflow-hidden bg-[url('../images/landing/marketing/bg-1.png')] bg-cover bg-no-repeat py-40 dark:bg-[url('../images/landing/marketing/bg-1-dark.jpg')]"
    >
      <div class="container">
        <div class="relative">
          <div class="grid items-center gap-6 lg:grid-cols-2">
            <div class="mx-auto max-w-md text-center lg:ms-0 lg:text-start">
              <span
                class="rounded-md border border-default-300 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-900"
                >startups Marketing</span
              >
              <h2
                class="my-5 text-4xl font-medium text-default-900 md:text-5xl/tight"
              >
                Digital marketing the new way.
              </h2>
              <p class="text-base">
                We are a creative studio specializing in UI/UX design,
                development and strategy. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <a
                href="javascript:void(0);"
                class="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/90 px-6 py-2 text-white transition-all duration-300 hover:bg-primary hover:text-default-950"
                >Get Solution
                <lucide-angular
                  name="arrow-up-right"
                  class="size-6"
                ></lucide-angular>
              </a>
            </div>
            <!-- col End -->

            <div>
              <div class="tilt flex items-center gap-4 md:gap-6">
                <div class="flex w-full flex-col gap-4 md:gap-6">
                  <img
                    src="assets/images/landing/marketing/img-1.jpg"
                    class="h-full w-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16"
                >
                  <img
                    src="assets/images/landing/marketing/img-2.jpg"
                    class="h-40 w-full rounded-lg object-cover md:h-[278px]"
                    alt=""
                  />
                  <img
                    src="assets/images/landing/marketing/img-3.jpg"
                    class="h-40 w-full rounded-lg object-cover md:h-[278px]"
                    alt=""
                  />
                </div>
              </div>
              <!-- flex End -->
            </div>
            <!-- col End -->
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- container End -->
    </section>
    <!-- Hero Section End -->
  `,
  styles: ``,
})
export class HeroComponent {}
