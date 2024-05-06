import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { features } from '../data'

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [LucideAngularModule],
  template: `<section class="py-20" id="features">
    <div class="mx-20">
      <div class="mx-auto mb-14 text-center">
        <span
          class="mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700"
          >Features</span
        >
        <h2 class="mb-2.5 text-3xl font-semibold text-default-950">
          Awesome Template Features
        </h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        @for (item of featuresData; track $index) {
          <div
            class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
          >
            <div class="p-6">
              <div
                class="flex flex-col items-center justify-center gap-4 text-center"
              >
                <div class="shrink">
                  <div
                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                  >
                    @if (item.icon == '') {
                      <img
                        src="assets/images/demo/logo/tailwindcss.svg"
                        class="size-6"
                      />
                    }
                    @if (item.icon) {
                      <lucide-angular
                        class="size-6"
                        name="{{ item.icon }}"
                      ></lucide-angular>
                    }
                  </div>
                </div>
                <div class="grow">
                  <h4 class="mb-2 text-lg font-semibold text-default-950">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <p
        class="mt-6 text-center text-base font-medium text-primary-900 dark:text-primary-100"
      >
        Empower Your Journey with Our Engaging Landing Demo.🔥
      </p>
    </div>
  </section>`,

  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class FeatureComponent {
  // features
  featuresData = features
}
