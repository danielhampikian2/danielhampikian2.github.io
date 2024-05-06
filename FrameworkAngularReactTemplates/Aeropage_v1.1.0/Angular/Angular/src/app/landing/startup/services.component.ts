import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-services',
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
    <!-- Start Steps Section -->
    <section id="services" class="p-8 md:p-16">
      <div
        class="rounded-xl bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat px-6 py-20 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
      >
        <div class="container">
          <div class="relative">
            <div class="rounded-md p-6">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div
                  class="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100"
                >
                  <h2 class="text-5xl font-medium text-default-950">180+</h2>
                  <p class="mt-3 text-base text-default-950">
                    Completed Projects
                  </p>
                </div>
                <!-- col End -->

                <div
                  class="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100"
                >
                  <h2 class="text-5xl font-medium text-default-950">90+</h2>
                  <p class="mt-3 text-base text-default-950">
                    Satisfied Clients
                  </p>
                </div>
                <!-- col End -->

                <div
                  class="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100"
                >
                  <h2 class="text-5xl font-medium text-default-950">30k</h2>
                  <p class="mt-3 text-base text-default-950">Cups of Coffee</p>
                </div>
                <!-- col End -->

                <div
                  class="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100"
                >
                  <h2 class="text-5xl font-medium text-default-950">Zero</h2>
                  <p class="mt-3 text-base text-default-950">
                    Negative Reviews
                  </p>
                </div>
                <!-- col End -->
              </div>
              <!-- grid End -->
            </div>
          </div>
        </div>
        <!-- Container End -->
      </div>
    </section>
    <!-- End Steps Section -->

    <section class="py-24">
      <div class="container">
        <div class="grid items-center gap-6 xl:grid-cols-5">
          <div class="xl:col-span-3">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="xl:-mt-8">
                <div
                  class="group relative cursor-pointer rounded-xl border border-default-200 p-6"
                >
                  <lucide-angular
                    name="layout-grid"
                    class="size-10 text-default-950"
                  ></lucide-angular>
                  <h2
                    class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary"
                  >
                    Brand Strategy
                  </h2>
                  <p class="mt-3 text-base">
                    Curabitur vel molestie dolor vulputate diam. Etiam ornare
                    facilisis eu euismod cras blandit vel purus nec varius.
                  </p>
                  <div class="mt-5">
                    <a
                      href="javascript:void(0);"
                      class="text-lg font-medium text-default-900 after:absolute after:inset-0"
                      >Read More
                      <lucide-angular
                        name="move-right"
                        class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- End col -->

              <div>
                <div
                  class="group relative cursor-pointer rounded-xl border border-default-200 p-6"
                >
                  <lucide-angular
                    name="figma"
                    class="size-10 text-default-950"
                  ></lucide-angular>
                  <h2
                    class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary"
                  >
                    UI/UX Design
                  </h2>
                  <p class="mt-3 text-base">
                    Quisque accumsan augue nec ligula gravida, eleifend
                    volutpat, vulputate imperdiet quis sed odio.
                  </p>
                  <div class="mt-5">
                    <a
                      href="javascript:void(0);"
                      class="text-lg font-medium text-default-900 after:absolute after:inset-0"
                      >Read More
                      <lucide-angular
                        name="move-right"
                        class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- End col -->

              <div class="xl:-mt-8">
                <div
                  class="group relative cursor-pointer rounded-xl border border-default-200 p-6"
                >
                  <lucide-angular
                    name="layers"
                    class="size-10 text-default-950"
                  ></lucide-angular>
                  <h2
                    class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary"
                  >
                    Motion Design
                  </h2>
                  <p class="mt-3 text-base">
                    Maecenas finibus ipsum orci, sit amet eleifend purus rutrum
                    fringilla. Nunc quis lobortis nulla.
                  </p>
                  <div class="mt-5">
                    <a
                      href="javascript:void(0);"
                      class="text-lg font-medium text-default-900 after:absolute after:inset-0"
                      >Read More
                      <lucide-angular
                        name="move-right"
                        class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- End col -->

              <div>
                <div
                  class="group relative cursor-pointer rounded-xl border border-default-200 p-6"
                >
                  <lucide-angular
                    name="airplay"
                    class="size-10 text-default-950"
                  ></lucide-angular>
                  <h2
                    class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary"
                  >
                    Research & Solutions
                  </h2>
                  <p class="mt-3 text-base">
                    Cras nisl ex, fermentum id volutpat luctus, interdum luctus
                    tortor. Nunc vestibulum accumsan.
                  </p>
                  <div class="mt-5">
                    <a
                      href="javascript:void(0);"
                      class="text-lg font-medium text-default-900 after:absolute after:inset-0"
                      >Read More
                      <lucide-angular
                        name="move-right"
                        class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- End col -->
            </div>
            <!-- End grid -->
          </div>
          <!-- End col -->

          <div class="xl:col-span-2">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Our Services</span
            >
            <h2 class="mt-6 text-4xl/tight font-medium text-default-950">
              Delivering Top-Notch Development Solutions.
            </h2>
            <p class="mt-5 text-base">
              Leveraging the power of design to solve complex problems and
              foster business solutions.
            </p>
            <div class="mt-10">
              <a
                href="javascript:void(0);"
                class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="size-6"
                ></lucide-angular>
              </a>
            </div>
          </div>
          <!-- End col-span-2 -->
        </div>
        <!-- End grid -->
      </div>
      <!-- End container -->
    </section>
  `,
  styles: ``,
})
export class ServicesComponent {}
