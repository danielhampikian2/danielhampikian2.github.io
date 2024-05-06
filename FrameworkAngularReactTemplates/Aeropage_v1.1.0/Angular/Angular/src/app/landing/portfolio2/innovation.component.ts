import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-innovation',
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
    <section class="bg-default-100 py-10 lg:py-20">
      <div class="container">
        <div class="mx-auto text-center">
          <h2
            class="mt-5 text-3xl font-medium text-default-950 md:text-4xl/tight"
          >
            Let's Explore the Next Major Innovation
          </h2>
          <p class="mt-6 text-base text-default-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div class="mt-7 flex flex-wrap items-center justify-center gap-6">
            <a
              href="javascript:void(0);"
              class="flex items-center justify-center gap-2 rounded-lg bg-primary/90 px-8 py-3 text-lg text-white transition-all hover:bg-primary"
              >Write A Message
              <lucide-angular name="move-right" class="size-7"></lucide-angular
            ></a>
            <a
              href="javascript:void(0);"
              class="flex items-center justify-center gap-2 rounded-lg bg-black px-8 py-3 text-lg text-white transition-all"
              >Discuss Project
              <lucide-angular name="move-right" class="size-7"></lucide-angular
            ></a>
          </div>
        </div>
        <!-- flex End -->
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class InnovationComponent {}
