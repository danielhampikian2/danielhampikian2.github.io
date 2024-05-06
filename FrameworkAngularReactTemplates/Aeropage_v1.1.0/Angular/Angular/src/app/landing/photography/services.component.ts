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
    <!-- Start Services-->
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950"
              >Our Services</span
            >
            <h2 class="my-4 text-4xl font-medium capitalize text-default-950">
              Our Offerings
            </h2>
            <p class="text-base">
              Explore a realm of exceptional animal photography services.
            </p>
          </div>
        </div>
        <!-- end flex -->

        <div class="grid gap-6 xl:grid-cols-2">
          <div class="border border-default-100 bg-default-50 p-6">
            <div class="flex flex-wrap gap-6 md:flex-nowrap">
              <div>
                <div
                  class="flex size-14 items-center justify-center border border-primary/10 bg-primary/5"
                >
                  <lucide-angular
                    name="camera"
                    class="size-10 text-primary"
                  ></lucide-angular>
                </div>
              </div>
              <div>
                <h2 class="text-5xl font-medium text-default-950">01</h2>
                <h3 class="mt-2 text-3xl font-medium text-default-950">
                  Pet Portraits
                </h3>
                <p class="mt-4 text-base">
                  Preserve the distinct personality and soul of your cherished
                  pets with beautiful and heartwarming portraits.
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->

          <div class="border border-default-100 bg-default-50 p-6">
            <div class="flex flex-wrap gap-6 md:flex-nowrap">
              <div>
                <div
                  class="flex size-14 items-center justify-center border border-primary/10 bg-primary/5"
                >
                  <lucide-angular
                    name="square-user"
                    class="size-10 text-primary"
                  ></lucide-angular>
                </div>
              </div>
              <div>
                <h2 class="text-5xl font-medium text-default-950">02</h2>
                <h3 class="mt-2 text-3xl font-medium text-default-950">
                  Wildlife Photography
                </h3>
                <p class="mt-4 text-base">
                  Embark on an exhilarating adventure into the untamed, seizing
                  breathtaking instances of wildlife in their native
                  environments.
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->

          <div class="border border-default-100 bg-default-50 p-6">
            <div class="flex flex-wrap gap-6 md:flex-nowrap">
              <div>
                <div
                  class="flex size-14 items-center justify-center border border-primary/10 bg-primary/5"
                >
                  <lucide-angular
                    name="projector"
                    class="size-10 text-primary"
                  ></lucide-angular>
                </div>
              </div>
              <div>
                <h2 class="text-5xl font-medium text-default-950">03</h2>
                <h3 class="mt-2 text-3xl font-medium text-default-950">
                  Nature Videography
                </h3>
                <p class="mt-4 text-base">
                  These videos encompass everything from awe-inspiring
                  landscapes to intricate details of flora and fauna, showcasing
                  the tranquility and grandeur of nature in all its splendor.
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->

          <div class="border border-default-100 bg-default-50 p-6">
            <div class="flex flex-wrap gap-6 md:flex-nowrap">
              <div>
                <div
                  class="flex size-14 items-center justify-center border border-primary/10 bg-primary/5"
                >
                  <lucide-angular
                    name="git-fork"
                    class="size-10 text-primary"
                  ></lucide-angular>
                </div>
              </div>
              <div>
                <h2 class="text-5xl font-medium text-default-950">04</h2>
                <h3 class="mt-2 text-3xl font-medium text-default-950">
                  Commercial Projects
                </h3>
                <p class="mt-4 text-base">
                  Highlight your brand's distinctive narrative with our tailored
                  commercial photography services designed for the animal
                  industry.
                </p>
              </div>
            </div>
            <!-- flex End -->
          </div>
          <!-- col End -->
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
    <!-- End Services-->
  `,
  styles: ``,
})
export class ServicesComponent {}
