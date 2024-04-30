import { Component } from '@angular/core'
import { plans } from './data'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-plan',
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
    <!-- Start Services -->
    <div class="mx-auto mb-12 max-w-xl text-center">
      <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
        Comprehensive Plan
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      @for (item of hostingPlan; track $index) {
        <div class="relative {{ item.order }} mx-auto h-fit w-full">
          <div class="group">
            <div
              class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
            >
              <div class="bg-white p-6 text-center dark:bg-default-50">
                <lucide-angular
                  name="{{ item.icon }}"
                  class="inline-block size-12 text-default-950"
                ></lucide-angular>
                <h2 class="mt-5 text-2xl font-medium text-default-950">
                  {{ item.title }}
                </h2>
                <p class="mt-4 text-base">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div
              class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
            ></div>
          </div>
          <!-- group end -->
        </div>
      }
    </div>
    <!-- End grid -->
  `,
  styles: ``,
})
export class PlanComponent {
  hostingPlan = plans
}
