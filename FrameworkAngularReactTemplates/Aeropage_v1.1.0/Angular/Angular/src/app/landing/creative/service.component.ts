import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start Services -->
    <section id="testimonial" class="py-10 lg:py-20">
      <div class="container">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div class="2xl:py-20">
            <div class="mb-10 flex items-end justify-between">
              <div class="mx-auto max-w-md text-center lg:text-start xl:ms-0">
                <span
                  class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
                  >Services</span
                >
                <p class="mt-5 text-base">
                  We help you to go online and increase your conversion rate
                  Better design for your digital products.
                </p>
              </div>
            </div>
            <!-- flex End -->

            <div class="rounded-md bg-default-50">
              <div class="grid 2xl:grid-cols-2">
                <div class="divide-y divide-white/10">
                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      Graphic Design
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      Web Design
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      Digital Marketing
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>
                </div>
                <!-- col End -->

                <div
                  class="divide-y divide-white/10 border-t border-default-200 2xl:border-s 2xl:border-t-0"
                >
                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      Development
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>
                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      UI/UX Design
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>
                  <div class="flex items-center justify-between p-6">
                    <h3 class="text-2xl font-medium text-default-950">
                      Branding
                    </h3>
                    <div
                      class="flex size-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary"
                    >
                      <lucide-angular
                        name="move-right"
                        class="size-6"
                      ></lucide-angular>
                    </div>
                  </div>
                </div>
                <!-- col End -->
              </div>
              <!-- grid End -->
            </div>
          </div>
          <!-- col End -->

          <div class="relative overflow-hidden rounded-md">
            <img
              src="assets/images/landing/creative/img-3.jpg"
              class="h-full w-full rounded-md"
              alt=""
            />
            <div class="absolute inset-0 bg-black/60"></div>
          </div>
          <!-- col End -->
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class ServiceComponent {}
