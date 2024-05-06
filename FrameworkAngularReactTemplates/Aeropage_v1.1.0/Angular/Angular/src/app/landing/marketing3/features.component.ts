import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-features',
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
    <section id="features" class="py-10 lg:py-20">
      <div class="container">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <lucide-angular
              name="activity-square"
              class="size-12 text-default-950"
            ></lucide-angular>
            <h2 class="mt-5 text-4xl font-medium text-default-950">
              Flexibility and Expansion.
            </h2>
            <p class="mt-4 text-base">
              Transform your concepts into reality using an intuitive visual
              editor. we's Build, modify, and personalize your website visually
              without any coding required!
            </p>

            <ul role="list" class="mt-6 text-sm text-default-700">
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="dot"
                  class="inline-block size-9 text-primary"
                ></lucide-angular>
                <span class="text-base font-medium"
                  >99.9% Uptime Assurance</span
                >
              </li>
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="dot"
                  class="inline-block size-9 text-primary"
                ></lucide-angular>
                <span class="text-base font-medium"
                  >Endless Photos and Videos</span
                >
              </li>
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="dot"
                  class="inline-block size-9 text-primary"
                ></lucide-angular>
                <span class="text-base font-medium">Premium Support</span>
              </li>
            </ul>
            <!-- End list -->
          </div>

          <div class="h-[500px]">
            <img
              src="assets/images/landing/marketing-3/img-4.svg"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class FeaturesComponent {}
