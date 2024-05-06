import { Component } from '@angular/core'
import { VideoPlayerComponent } from '@components/video-player.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-investment-steps',
  standalone: true,
  imports: [VideoPlayerComponent, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <div
      class="absolute inset-0 bg-[url(../images/landing/marketing-2/img-8.jpg)] bg-cover bg-center bg-repeat"
    >
      <div class="absolute inset-0 h-full w-full bg-black/50"></div>
    </div>

    <div class="relative">
      <div class="grid items-center gap-6 sm:grid-cols-3">
        <div class="sm:col-span-2">
          <div class="rounded-md p-6">
            <h2 class="text-center text-4xl font-medium text-white">
              Achieving Success in Three Simple Investment Steps
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-6">
              <div
                class="rounded-md bg-white/60 p-6 backdrop-blur-xl dark:bg-black/60"
              >
                <div class="flex flex-wrap items-center gap-6 md:flex-nowrap">
                  <div>
                    <lucide-angular
                      name="map-pin"
                      class="size-12 stroke-primary"
                    ></lucide-angular>
                  </div>
                  <div>
                    <h2 class="text-2xl font-medium text-default-950">
                      Crafting Your Path Forward
                    </h2>
                    <p class="mt-3 text-base text-default-950">
                      Businesses purchase products in substantial quantities for
                      distribution to consumers.
                    </p>
                  </div>
                </div>
                <!-- flex End -->
              </div>
              <!-- col End -->

              <div
                class="rounded-md bg-white/60 p-6 backdrop-blur-xl dark:bg-black/60"
              >
                <div class="flex flex-wrap items-center gap-6 md:flex-nowrap">
                  <div>
                    <lucide-angular
                      name="send"
                      class="size-12 stroke-primary"
                    ></lucide-angular>
                  </div>
                  <div>
                    <h2 class="text-2xl font-medium text-default-950">
                      Executing Your Strategy
                    </h2>
                    <p class="mt-3 text-base text-default-950">
                      Consumers acquire products in smaller volumes suited for
                      personal use.
                    </p>
                  </div>
                </div>
                <!-- flex End -->
              </div>
              <!-- col End -->

              <div
                class="rounded-md bg-white/60 p-6 backdrop-blur-xl dark:bg-black/60"
              >
                <div class="flex flex-wrap items-center gap-6 md:flex-nowrap">
                  <div>
                    <lucide-angular
                      name="network"
                      class="size-12 stroke-primary"
                    ></lucide-angular>
                  </div>
                  <div>
                    <h2 class="text-2xl font-medium text-default-950">
                      Enhancing Through Empowerment
                    </h2>
                    <p class="mt-3 text-base text-default-950">
                      The market for businesses to target is relatively smaller
                      compared to direct consumers.
                    </p>
                  </div>
                </div>
                <!-- flex End -->
              </div>
              <!-- col End -->
            </div>
            <!-- Grid End -->
          </div>
        </div>
        <!-- col-span-2 End -->

        <div class="relative h-full">
          <div class="flex h-full items-center justify-center">
            <app-video-player [classname]="classname" />
          </div>
        </div>
      </div>
    </div>

    <!-- Watch Video Modal Start -->

    <!-- Watch Video Modal End -->
  `,
  styles: ``,
})
export class InvestmentStepsComponent {
  classname =
    'relative flex size-20 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-white ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary'
}
