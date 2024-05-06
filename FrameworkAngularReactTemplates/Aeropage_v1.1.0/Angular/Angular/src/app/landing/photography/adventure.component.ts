import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-adventure',
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
    <section class="py-10 lg:py-20">
      <div class="container">
        <div class="border border-primary/10 bg-primary/5 p-14">
          <div class="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h2 class="text-4xl/tight font-medium text-default-950">
                Embark on Your Animal Photography Adventure Now
              </h2>
              <p class="mb-7 mt-4 text-base">
                Dive into the enchanting realm of animal photography alongside
                our seasoned team.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center justify-center gap-2 bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
                >Contact us
                <lucide-angular
                  name="move-right"
                  class="size-6"
                ></lucide-angular>
              </a>
            </div>
            <!-- col End-->

            <div>
              <img
                src="assets/images/landing/photography/img-11.jpg"
                class="mx-auto"
                alt=""
              />
            </div>
            <!-- col End-->
          </div>
          <!-- grid End-->
        </div>
      </div>
      <!-- container End-->
    </section>
  `,
  styles: ``,
})
export class AdventureComponent {}
