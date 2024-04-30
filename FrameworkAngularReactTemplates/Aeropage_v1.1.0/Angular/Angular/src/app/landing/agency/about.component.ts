import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-about',
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
    <!-- Start about -->
    <section id="about" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >About</span
            >
            <h2 class="my-4 text-4xl font-medium capitalize text-default-950">
              About Us
            </h2>
            <!-- <p class="text-base">There are many variations of passages of passages of lorem lpsum available but the majority have suffered alteration in some form by inject rated humour or randomised this like.</p> -->
          </div>
        </div>
        <!-- flex End-->

        <div class="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div class="grid items-center gap-6 sm:grid-cols-2">
            <div class="space-y-6">
              <div>
                <img
                  src="assets/images/landing/agency/img-3.jpg"
                  alt=""
                  class="h-full max-w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="assets/images/landing/agency/img-4.jpg"
                  alt=""
                  class="h-full max-w-full rounded-lg"
                />
              </div>
            </div>
            <div>
              <img
                src="assets/images/landing/agency/img-5.jpg"
                alt=""
                class="h-full max-w-full rounded-lg"
              />
            </div>
          </div>
          <!-- grid End-->

          <div>
            <h2 class="text-3xl font-medium text-default-950">
              The Best of Product Your Business
            </h2>
            <div class="mt-10 flex justify-center gap-6">
              <div>
                <lucide-angular
                  name="component"
                  class="size-10 text-default-950"
                ></lucide-angular>
              </div>
              <div>
                <h2 class="text-xl font-medium text-default-950">
                  High Standard
                </h2>
                <p class="mt-4 text-base">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <!-- flex End-->

            <div class="my-10 flex justify-center gap-6">
              <div>
                <lucide-angular
                  name="layers"
                  [class]="'size-10 text-default-950'"
                ></lucide-angular>
              </div>
              <div>
                <h2 class="text-xl font-medium text-default-950">
                  Ease of Communication
                </h2>
                <p class="mt-4 text-base">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <!-- flex End-->

            <a
              href="javascript:void(0);"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all hover:bg-primary hover:text-white"
              >View All Our News
              <lucide-angular
                name="arrow-up-right"
                class="size-6"
              ></lucide-angular>
            </a>
          </div>
          <!-- col End-->
        </div>
        <!-- grid End-->
      </div>
    </section>
    <!-- End about -->
  `,
  styles: ``,
})
export class AboutComponent {}
