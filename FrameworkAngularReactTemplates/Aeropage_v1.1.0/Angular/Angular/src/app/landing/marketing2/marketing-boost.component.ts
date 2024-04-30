import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-marketing-boost',
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
    <!--start Call to Action Section -->
    <section class="relative h-full py-56">
      <div class="container">
        <div
          class="absolute inset-0 bg-[url('../images/landing/marketing-2/img-10.jpg')] bg-cover bg-no-repeat"
        >
          <div class="absolute inset-0 h-full w-full bg-black/60"></div>
        </div>

        <div class="relative">
          <div class="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 class="mb-4 text-4xl font-medium text-white">
                Marketing Boost for Your Business
              </h2>
              <p class="mb-10 text-lg text-zinc-300">
                The marketing audit is typically carried out by a third party,
                not an internal member of the organization.
              </p>
              <a
                href="javascript:void(0);"
                class="rounded-md bg-primary px-6 py-3 text-sm text-white transition-all hover:bg-primary-700"
                >Get a Consultation</a
              >

              <div class="mt-10 grid gap-5 md:grid-cols-2">
                <div class="flex items-center gap-4">
                  <lucide-angular
                    name="check-circle-2"
                    class="size-6 text-primary"
                  ></lucide-angular>
                  <p class="text-base text-zinc-300">Business-to-Business</p>
                </div>
                <!-- flex End -->

                <div class="flex items-center gap-4">
                  <lucide-angular
                    name="check-circle-2"
                    class="size-6 text-primary"
                  ></lucide-angular>
                  <p class="text-base text-zinc-300">Business-to-Customer</p>
                </div>
                <!-- flex End -->

                <div class="flex items-center gap-4">
                  <lucide-angular
                    name="check-circle-2"
                    class="size-6 text-primary"
                  ></lucide-angular>
                  <p class="text-base text-zinc-300">Nonprofit Organization</p>
                </div>
                <!-- flex End -->

                <div class="flex items-center gap-4">
                  <lucide-angular
                    name="check-circle-2"
                    class="size-6 text-primary"
                  ></lucide-angular>
                  <p class="text-base text-zinc-300">Ecommerce</p>
                </div>
                <!-- flex End -->
              </div>
              <!-- grid End -->
            </div>
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- container End -->
    </section>
    <!--End Call to Action Section -->
  `,
  styles: ``,
})
export class MarketingBoostComponent {}
