import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-cources',
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
    <div class="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
      <div class="order-2 lg:order-1 lg:col-span-2">
        <img
          src="assets/images/landing/ebook/img-5.jpg"
          class="h-full w-full rounded-xl shadow-md"
          alt=""
        />
      </div>

      <div class="order-1 lg:order-2 lg:col-span-3">
        <h2 class="text-4xl font-medium text-default-950">
          Our Featured Courses
        </h2>
        <p class="font-me mt-4 text-base">
          Lorem ipsum dolor sit amet, consectetur, adipiscing elit. pellentesque
          quils arcu nisl. pellentesque quis arcu nisl. pellentesque ac tortor
          et est dignissim vulputate. proin quis sagittis est. phasellus
          dignissim dui et ipsum elementum, et auctor risus posuere.
        </p>

        <div class="mt-6">
          <div
            class="overflow-hidden rounded-lg bg-white shadow-md dark:bg-default-50"
          >
            <div class="grid sm:grid-cols-5">
              <div>
                <img
                  src="assets/images/landing/ebook/img-2.jpg"
                  class="h-full w-full"
                  alt=""
                />
              </div>

              <div class="group p-6 sm:col-span-4">
                <h3
                  class="cursor-pointer text-2xl font-medium text-default-950 transition-all hover:text-primary"
                >
                  Digital Marketing Course
                </h3>
                <p class="mt-3 text-base text-default-950">Jane willow</p>
                <div class="mt-5 flex items-center justify-between">
                  <p class="text-base text-default-950">June 13,2018</p>
                  <div class="flex items-center gap-4">
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="clock-10"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="star"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="airplay"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- col-span-2 End -->
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->

          <div
            class="my-6 overflow-hidden rounded-lg bg-white shadow-md dark:bg-default-50"
          >
            <div class="grid sm:grid-cols-5">
              <div>
                <img
                  src="assets/images/landing/ebook/img-3.jpg"
                  class="h-full w-full"
                  alt=""
                />
              </div>

              <div class="group p-6 sm:col-span-4">
                <h3
                  class="cursor-pointer text-2xl font-medium text-default-950 transition-all hover:text-primary"
                >
                  Graphic Design Coures
                </h3>
                <p class="mt-3 text-base text-default-950">Stiven oswald</p>
                <div class="mt-5 flex items-center justify-between">
                  <p class="text-base text-default-950">June 17,2018</p>
                  <div class="flex items-center gap-4">
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="brush"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="star"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="panel-right"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- col-span-2 End -->
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->

          <div
            class="overflow-hidden rounded-lg bg-white shadow-md dark:bg-default-50"
          >
            <div class="grid sm:grid-cols-5">
              <div>
                <img
                  src="assets/images/landing/ebook/img-4.jpg"
                  class="h-full w-full"
                  alt=""
                />
              </div>

              <div class="group p-6 sm:col-span-4">
                <h3
                  class="cursor-pointer text-2xl font-medium text-default-950 transition-all hover:text-primary"
                >
                  Financial Analyst Course
                </h3>
                <p class="mt-3 text-base text-default-950">Andrew clarkson</p>
                <div class="mt-5 flex items-center justify-between">
                  <p class="text-base text-default-950">June 24,2018</p>
                  <div class="flex items-center gap-4">
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="clock-10"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="star"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                    <a href="javascript:void(0);">
                      <lucide-angular
                        name="airplay"
                        class="size-5 transition-all hover:text-primary"
                      ></lucide-angular>
                    </a>
                  </div>
                </div>
              </div>
              <!-- col-span-2 End -->
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CourcesComponent {}
