import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-jouney',
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
    <section class="py-10 lg:pb-20">
      <div class="container">
        <div
          class="rounded-lg border border-primary/20 bg-primary/5 bg-cover bg-no-repeat"
        >
          <div class="px-6 py-20">
            <div class="mx-auto max-w-2xl text-center">
              <h2
                class="mt-5 text-3xl font-medium text-default-950 md:text-4xl"
              >
                Embark on Your SEO Journey with Us
              </h2>
              <p class="mt-6 text-base text-default-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div class="inline-block">
                <a
                  href="javascript:void(0);"
                  class="mt-6 flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/90 px-6 py-2 text-white transition-all hover:bg-primary"
                  >Get started
                  <lucide-angular
                    name="move-right"
                    class="size-5"
                  ></lucide-angular
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End container -->
    </section>
  `,
  styles: ``,
})
export class JouneyComponent {}
