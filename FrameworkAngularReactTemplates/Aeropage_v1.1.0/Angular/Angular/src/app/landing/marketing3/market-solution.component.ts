import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-market-solution',
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
    <div class="grid items-center gap-6 lg:grid-cols-2">
      <div>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <div class="h-40 w-52 rounded-xl bg-purple-500/10 p-6 text-center">
            <div class="flex justify-center">
              <lucide-angular
                name="shopping-bag"
                class="size-12 text-purple-600"
              ></lucide-angular>
            </div>
            <h3 class="mt-3 text-xl font-medium text-purple-600">Ecommerce</h3>
          </div>

          <div
            class="h-40 w-52 rounded-xl bg-green-500/10 p-6 text-center md:-mt-14"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="activity-square"
                class="size-12 text-green-600"
              ></lucide-angular>
            </div>
            <h3 class="mt-3 text-xl font-medium text-green-600">Branding</h3>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-5">
          <div class="h-40 w-52 rounded-xl bg-red-500/10 p-6 text-center">
            <div class="flex justify-center">
              <lucide-angular
                name="toggle-right"
                class="size-12 text-red-600"
              ></lucide-angular>
            </div>
            <h3 class="mt-3 text-xl font-medium text-red-600">Consultation</h3>
          </div>
          <div
            class="h-40 w-52 rounded-xl bg-sky-500/10 p-6 text-center md:-mt-14"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="component"
                class="size-12 text-sky-600"
              ></lucide-angular>
            </div>
            <h3 class="mt-3 text-xl font-medium text-sky-600">Marketing</h3>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-medium text-default-950">
          Marketing Solutions ⚡
        </h2>
        <p class="mb-10 mt-5 text-base">
          With a wealth of over 25 years in the field, we have developed
          numerous strategic discovery processes that empower us to uncover the
          layers necessary to comprehend, link, and represent effectively.
        </p>
        <a
          href="javascript:void(0);"
          class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
          >Read More
          <lucide-angular name="move-right" class="size-6"></lucide-angular>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class MarketSolutionComponent {}
