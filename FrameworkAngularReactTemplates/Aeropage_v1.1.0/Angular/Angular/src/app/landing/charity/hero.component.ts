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
    <!-- ======= hero start ======= -->
    <section
      id="home"
      class="relative bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-24 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')] lg:py-32"
    >
      <div
        class="flex items-center overflow-hidden before:absolute before:inset-0 before:left-[63.67%] before:hidden before:rounded-bl-3xl before:bg-primary/80 lg:before:block"
      >
        <div
          class="absolute -top-44 bottom-0 right-0 w-2/6 bg-contain bg-right bg-no-repeat"
          style="background-image: url(assets/images/landing/charity/bg-1.png)"
        ></div>

        <div class="container">
          <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div class="">
              <div class="flex flex-col justify-center">
                <h2
                  class="mb-4 text-2xl font-medium text-default-950 sm:text-3xl xl:text-5xl/tight"
                >
                  Let's Collaborate and Achieve Greatness Together!
                </h2>
                <p class="mt-5 text-base">
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero.
                </p>
                <div class="mt-10">
                  <a
                    href="javascript:void(0);"
                    class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all duration-300 hover:bg-primary-700"
                    >Read More
                    <lucide-angular
                      name="move-right"
                      class="size-6"
                    ></lucide-angular>
                  </a>
                </div>
              </div>
              <!-- flex End -->
            </div>

            <div class="z-10">
              <div class="tilt flex items-center gap-4 md:gap-6">
                <div class="flex w-full flex-col gap-4 md:gap-6">
                  <img
                    src="assets/images/landing/charity/img-1.jpg"
                    class="h-full w-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16"
                >
                  <img
                    src="assets/images/landing/charity/img-2.jpg"
                    class="h-40 w-full rounded-lg object-cover md:h-[278px]"
                    alt=""
                  />
                  <img
                    src="assets/images/landing/charity/img-3.jpg"
                    class="h-40 w-full rounded-lg object-cover md:h-[278px]"
                    alt=""
                  />
                </div>
              </div>
              <!-- flex End -->
            </div>
          </div>
          <!-- Grid End -->
        </div>
        <!-- Container End -->
      </div>
    </section>
    <!-- ======= hero end ======= -->

    <section class="relative -mt-40 py-10 md:-mt-32">
      <div class="container">
        <div
          class="mx-auto max-w-6xl rounded-xl bg-gradient-to-t from-default-50 via-default-100 to-default-200 shadow"
        >
          <div
            class="grid divide-y divide-default-300 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            <div class="p-8">
              <lucide-angular
                name="book-copy"
                class="size-12 text-default-950"
              ></lucide-angular>
              <h2 class="mt-5 text-xl font-medium text-default-950">
                Nutritious Meals
              </h2>
              <p class="mt-4 text-base">
                Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.
              </p>
              <div class="group mt-5">
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-900"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>

            <div class="p-8">
              <lucide-angular
                name="send"
                class="size-12 text-default-950"
              ></lucide-angular>
              <h2 class="mt-5 text-xl font-medium text-default-950">
                Pure Drinking Water
              </h2>
              <p class="mt-4 text-base">
                Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.
              </p>
              <div class="group mt-5">
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-900"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>

            <div class="p-8">
              <lucide-angular
                name="book-copy"
                class="size-12 text-default-950"
              ></lucide-angular>
              <h2 class="mt-5 text-xl font-medium text-default-950">
                Quality Education
              </h2>
              <p class="mt-4 text-base">
                Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.
              </p>
              <div class="group mt-5">
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-900"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {}
