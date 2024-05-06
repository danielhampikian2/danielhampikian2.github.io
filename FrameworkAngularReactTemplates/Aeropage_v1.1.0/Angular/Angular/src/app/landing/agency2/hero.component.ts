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
    <section
      id="home"
      class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-40 dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
    >
      <div class="container">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <div class="max-w-lg text-center lg:text-start">
              <h2
                class="text-4xl font-medium text-default-950 sm:text-5xl lg:text-6xl/tight"
              >
                Better design for your digital products.
              </h2>
              <p class="my-6 text-base">
                We are a creative studio specializing in UI/UX design, <br />
                development and strategy.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >Get Solution
                <lucide-angular
                  name="arrow-up-right"
                  class="size-6"
                ></lucide-angular>
              </a>
            </div>
          </div>

          <div>
            <img
              src="assets/images/landing/agency-2/hero.png"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
        <!-- grid End -->
      </div>
    </section>
    <!-- Hero end -->
  `,
  styles: ``,
})
export class HeroComponent {}
