import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { hostingPricing } from './data'

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  styles: ``,
  template: `
    <!-- Start Pricing -->
    <div class="mx-auto mb-12 max-w-xl text-center">
      <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
        Our Pricing
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-10">
      @for (item of pricingData; track $index) {
        <div>
          <div class="relative mx-auto w-full lg:w-full">
            <div class="group">
              <div
                class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
              >
                <div class="bg-white p-6 dark:bg-default-50">
                  <h5 class="text-center text-2xl font-medium text-default-950">
                    {{ item.name }}
                  </h5>
                  <p
                    class="mt-1 text-center text-xs uppercase tracking-widest text-default-950"
                  >
                    {{ item.description }}
                  </p>
                  <div
                    class="mt-6 flex items-center gap-4 bg-default-100 p-5 text-default-950"
                  >
                    <h2 class="text-5xl font-semibold">
                      <sup class="text-xl">$</sup>{{ item.price }}
                    </h2>
                    <div>
                      <p class="text-lg">{{ item.billing }}</p>
                      <p class="text-xs">{{ item.priceDetail }}</p>
                    </div>
                  </div>
                  <!-- End flex -->

                  <ul role="list" class="mt-3 text-sm text-default-700">
                    @for (data of item.features; track $index) {
                      <li class="flex items-center gap-2">
                        <!-- svg icon -->
                        <lucide-angular
                          name="dot"
                          class="inline-block size-9 text-primary"
                        ></lucide-angular>
                        <span class="text-base text-default-950">{{
                          data
                        }}</span>
                      </li>
                    }
                  </ul>
                  <!-- End list -->

                  <div class="relative z-20 mx-auto mt-5 w-full lg:w-56">
                    <div class="group">
                      <div
                        class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent"
                      >
                        <div
                          class="relative z-10 flex h-4 items-center justify-center bg-primary p-6"
                        >
                          <a
                            class="button bg-primary text-white"
                            href="javascript:void(0);"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div
                        class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
              ></div>
            </div>
            <!-- group end -->
          </div>
        </div>
        <!-- col end -->
      }

      <div class="lg:col-span-3">
        <div class="relative w-full lg:w-full">
          <div class="group">
            <div
              class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
            >
              <div class="bg-white p-6 dark:bg-default-50">
                <div class="grid gap-6 md:grid-cols-3">
                  <div class="md:col-span-2">
                    <h5 class="text-2xl font-medium text-default-950">
                      Dedicated
                    </h5>
                    <p
                      class="mt-2 text-xs uppercase tracking-widest text-default-950"
                    >
                      For Businesses and large organisations.
                    </p>

                    <p
                      class="w-3/4 py-5 text-base/7 font-medium text-default-600"
                    >
                      For advanced security and more flexible contrals,the
                      Enterprise plan helps you extend your design processes
                      enterprise-wide.
                    </p>
                    <div class="flex items-center">
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex items-center text-lg font-semibold text-default-900"
                        >Learn more
                        <lucide-angular
                          name="move-right"
                          class="size-4 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100"
                        ></lucide-angular>
                      </a>
                    </div>
                    <!-- End flex -->
                  </div>
                  <!-- col-span-2 end -->

                  <div>
                    <div
                      class="flex items-center gap-4 bg-default-100 p-5 text-default-950"
                    >
                      <h2 class="text-5xl font-semibold">
                        <sup class="text-xl">$</sup>79
                      </h2>
                      <div>
                        <p class="text-lg">All users, monthly</p>
                        <p class="text-xs">for Unlimited users</p>
                      </div>
                    </div>
                    <!-- End flex -->

                    <div class="relative z-20 mx-auto mt-5 w-full lg:w-56">
                      <div class="group">
                        <div
                          class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent"
                        >
                          <div
                            class="relative z-10 flex h-4 items-center justify-center bg-primary p-6"
                          >
                            <a
                              class="button bg-primary text-white"
                              href="javascript:void(0);"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                        <div
                          class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <!-- col end -->
                </div>
                <!-- grid end -->
              </div>
            </div>
            <div
              class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
            ></div>
          </div>
          <!-- group end -->
        </div>
      </div>
      <!-- col-span-3 end -->
    </div>
    <!-- grid end -->
  `,
})
export class PricingComponent {
  pricingData = hostingPricing
}
