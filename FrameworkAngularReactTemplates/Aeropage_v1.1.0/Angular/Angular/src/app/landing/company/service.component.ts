import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start Services -->
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <div class="mx-auto mb-12 max-w-xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Services</span
          >
          <h2 class="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
            Comprehensive Plan
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          <div class="rounded-lg bg-default-100 text-center dark:bg-default-50">
            <div class="p-6">
              <div class="flex justify-center">
                <lucide-angular
                  name="truck"
                  class="size-12 text-default-950"
                ></lucide-angular>
              </div>
              <h3
                class="mb-4 mt-6 text-xl font-medium text-default-950 md:text-2xl"
              >
                Fuel Delivery
              </h3>
              <p class="mb-4 md:text-base">
                Efficiently delivers diverse fuels (gasoline, diesel, propane,
                etc.) promptly to residential, commercial, or industrial sites.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-2 text-lg font-medium text-default-950"
                >Read more
                <lucide-angular
                  name="move-right"
                  class="size-5"
                ></lucide-angular
              ></a>
            </div>
          </div>
          <!-- col End -->

          <div class="rounded-lg bg-default-100 text-center dark:bg-default-50">
            <div class="p-6">
              <div class="flex justify-center">
                <lucide-angular
                  name="database"
                  class="size-12 text-default-950"
                ></lucide-angular>
              </div>
              <h3
                class="mb-4 mt-6 text-xl font-medium text-default-950 md:text-2xl"
              >
                Fuel Storage Solutions
              </h3>
              <p class="mb-4 md:text-base">
                Supplying secure fuel storage solutions with tanks or
                containers, ensuring adherence to safety standards and
                regulations.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-2 text-lg font-medium text-default-950"
                >Read more
                <lucide-angular
                  name="move-right"
                  class="size-5"
                ></lucide-angular
              ></a>
            </div>
          </div>
          <!-- col End -->

          <div class="rounded-lg bg-default-100 text-center dark:bg-default-50">
            <div class="p-6">
              <div class="flex justify-center">
                <lucide-angular
                  name="codesandbox"
                  class="size-12 text-default-950"
                ></lucide-angular>
              </div>
              <h3
                class="mb-4 mt-6 text-xl font-medium text-default-950 md:text-2xl"
              >
                Equipment Maintenanceegies
              </h3>
              <p class="mb-4 md:text-base">
                Providing maintenance for fuel-related equipment like pumps,
                tanks, and generators to ensure safety compliance and
                functionality.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-2 text-lg font-medium text-default-950"
                >Read more
                <lucide-angular
                  name="move-right"
                  class="size-5"
                ></lucide-angular
              ></a>
            </div>
          </div>
          <!-- col End -->
        </div>
        <!-- End grid -->
      </div>
      <!-- End container -->
    </section>
    <!-- End Services -->

    <section class="bg-default-100 py-10 dark:bg-default-50 lg:py-20">
      <div class="container">
        <div class="relative z-20">
          <div class="hidden xl:block">
            <div
              class="before:absolute before:-end-10 before:-top-10 before:-z-10 before:h-24 before:w-24 before:bg-[url('../images/landing/company/dot.svg')] after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:h-24 after:w-24 after:bg-[url('../images/landing/company/dot.svg')]"
            ></div>
          </div>

          <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <img
                src="assets/images/landing/company/img-2.jpg"
                alt=""
                class="rounded-lg"
              />
            </div>
            <!-- col End -->

            <div>
              <div class="rounded-lg bg-white p-10 dark:bg-default-100">
                <h2 class="text-3xl font-medium text-default-950">
                  Transforming Challenges into Profit
                </h2>
                <p class="mt-6 text-base text-default-800">
                  Intuition and strategy form the foundation of our research
                  methodology, which we apply to both traditional and digital
                  media.
                </p>
                <p class="mt-4 text-base text-default-800">
                  We firmly believe that the human element is vital in
                  initiating any successful project, as it is here that
                  meaningful emotional connections between the company and
                  individuals are cultivated.
                </p>
              </div>

              <div class="p-9">
                <div class="flex items-center gap-7">
                  <div class="text-center">
                    <h3 class="text-5xl font-medium text-default-950">200+</h3>
                    <p class="mt-1 text-base">Clients served</p>
                  </div>
                  <div class="text-center">
                    <h3 class="text-5xl font-medium text-default-950">95%</h3>
                    <p class="mt-1 text-base">Growth rate</p>
                  </div>
                </div>
                <!-- flex End -->
              </div>
            </div>
            <!-- col End -->
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class ServiceComponent {}
