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
    <!-- Hero Section Start -->
    <section id="home" class="relative overflow-hidden">
      <div class="px-4 md:px-10">
        <div
          class="overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
          style="
            background-image: url(assets/images/landing/marketing-3/img-1.jpg);
          "
        >
          <div class="rounded-2xl bg-black/60">
            <div class="container">
              <div class="relative p-6">
                <div class="flex h-full items-center justify-center py-36">
                  <div class="relative mx-auto max-w-3xl text-center">
                    <span
                      class="rounded-md bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white"
                      >AI knowledge hub</span
                    >
                    <h1
                      class="mt-10 text-3xl font-medium text-white md:text-5xl/snug"
                    >
                      Build Quickly, Earn More
                    </h1>
                    <p class="mx-auto mt-5 w-3/4 text-base text-white/80">
                      Leverage customer data to create exceptional and robust
                      product experiences that drive conversions.
                    </p>

                    <div class="mt-10 flex justify-center">
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
                </div>
                <!-- flex End -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Container End -->
    </section>
    <!-- Hero end  -->
  `,
  styles: ``,
})
export class HeroComponent {}
