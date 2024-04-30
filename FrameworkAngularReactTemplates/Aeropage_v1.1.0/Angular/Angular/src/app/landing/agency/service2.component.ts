import { Component } from '@angular/core'

@Component({
  selector: 'app-service2',
  standalone: true,
  imports: [],
  template: `
    <!-- Start Services -->
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Services</span
            >
            <p class="mt-5 text-lg font-medium text-default-800">
              We help you to go online and increase your conversion rate Better
              design for your digital products.
            </p>
          </div>
        </div>
        <!-- flex End-->

        <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div class="relative -z-10 overflow-hidden">
            <img
              src="assets/images/landing/agency/img-10.jpg"
              class="h-full w-full rounded-md"
              alt=""
            />
            <div class="absolute inset-0 rounded-md bg-black/40"></div>
          </div>
          <!-- col End-->

          <div class="lg:-ms-20">
            <div
              class="divide-y divide-default-200 rounded-md bg-default-50 shadow"
            >
              <div class="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div
                    class="flex size-12 items-center justify-center rounded-md border border-default-200 bg-white/5 text-xl text-default-950"
                  >
                    01
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-medium text-default-950">
                    Graphic Design
                  </h3>
                  <p class="mt-3 text-base">
                    Donec venenatis vulputate lorem. Morbi nec metus. Phasellus
                    blandit leo ut odio.
                  </p>
                </div>
              </div>
              <!-- flex End-->

              <div class="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div
                    class="flex size-12 items-center justify-center rounded-md border border-default-200 bg-white/5 text-xl text-default-950"
                  >
                    02
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-medium text-default-950">
                    Web Design
                  </h3>
                  <p class="mt-3 text-base">
                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum
                    nec, nisi. Praesent nec nisl a purus blandit viverra.
                  </p>
                </div>
              </div>
              <!-- flex End-->

              <div class="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div
                    class="flex size-12 items-center justify-center rounded-md border border-default-200 bg-white/5 text-xl text-default-950"
                  >
                    03
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-medium text-default-950">
                    Digital Marketing
                  </h3>
                  <p class="mt-3 text-base">
                    Vestibulum rutrum, mi nec elementum vehicula, eros quam
                    gravida nisl, id fringilla neque ante vel mi.
                  </p>
                </div>
              </div>
              <!-- flex End-->
            </div>
          </div>
          <!-- col End-->
        </div>
        <!-- grid End-->
      </div>
      <!-- container End-->
    </section>
    <!-- End Services -->
  `,
  styles: ``,
})
export class Service2Component {}
