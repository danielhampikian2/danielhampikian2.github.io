import { Component } from '@angular/core'

import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-feature',
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
    <!-- Start Services -->

    <div class="mb-10 flex items-end justify-between">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Services</span
        >
        <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
          We want to bring business & the digital world together.
        </h2>
      </div>
    </div>
    <!-- flex End -->

    <div class="grid items-center gap-6 lg:grid-cols-2">
      <div>
        <div
          class="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200"
        >
          <div class="group">
            <div class="flex flex-wrap items-center gap-6 p-6">
              <div>
                <lucide-angular
                  name="layers"
                  class="size-14 text-default-950"
                ></lucide-angular>
              </div>
              <div>
                <h2 class="mb-4 text-2xl font-medium text-default-950">
                  Product Design
                </h2>
                <p class="mb-6 text-base">
                  Lorem ipsum dummy text are used in this design
                </p>
                <a href="javascript:void(0);" class="text-lg text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="group border-y border-default-200">
            <div class="flex flex-wrap items-center gap-6 p-6">
              <div>
                <lucide-angular
                  name="monitor"
                  class="size-14 text-default-950"
                ></lucide-angular>
              </div>
              <div>
                <h2 class="mb-4 text-2xl font-medium text-default-950">
                  Marketing Strategy
                </h2>
                <p class="mb-6 text-base">
                  Nullam dictum felis eu pede mollis pretium.
                </p>
                <a href="javascript:void(0);" class="text-lg text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="group">
            <div class="flex flex-wrap items-center gap-6 p-6">
              <div>
                <lucide-angular
                  name="boxes"
                  class="size-14 text-default-950"
                ></lucide-angular>
              </div>
              <div>
                <h2 class="mb-4 text-2xl font-medium text-default-950">
                  E-Commerce
                </h2>
                <p class="mb-6 text-base">
                  Maecenas malesuada. Praesent congue erat at massa.
                </p>
                <a href="javascript:void(0);" class="text-lg text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- grid End -->
      </div>
      <!-- col End -->

      <div>
        <img
          src="assets/images/landing/marketing/img-4.jpg"
          class="mx-auto"
          alt=""
        />
      </div>
      <!-- col End -->
    </div>
    <!-- grid End -->
  `,
  styles: ``,
})
export class FeatureComponent {}
