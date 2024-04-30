import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { performance } from './data'

@Component({
  selector: 'admin-dashboard-performance',
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
    <div
      class="rounded-md border border-default-200 bg-white dark:bg-default-50"
    >
      <div class="border-b border-default-200 px-6 py-3">
        <h4 class="text-lg text-default-900">Top Performers</h4>
      </div>

      <div
        class="h-[440px] divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1"
      >
        @for (item of performanceList; track $index) {
          <div class="flex items-center p-2.5">
            <img
              src="{{ item.image }}"
              class="me-3 h-12 rounded-full"
              alt="shreyu"
            />
            <div class="flex-grow">
              <h5 class="mt-1 text-default-900">{{ item.name }}</h5>
              <h6 class="mt-1 text-default-600">{{ item.position }}</h6>
            </div>
            <div class="h-4">
              <div
                class="hs-dropdown relative inline-flex [--placement:left-top] rtl:[--placement:bottom-left]"
              >
                <button type="button" class="hs-dropdown-toggle rounded">
                  <lucide-angular
                    name="more-vertical"
                    class="size-4"
                  ></lucide-angular>
                </button>

                <div
                  class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white py-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                >
                  <a
                    class="mx-1.5 flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                    href="javascript:void(0);"
                  >
                    <lucide-angular
                      name="pencil"
                      class="me-1.5 size-4"
                    ></lucide-angular>
                    <span>Edit</span>
                  </a>
                  <a
                    class="mx-1.5 flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                    href="javascript:void(0);"
                  >
                    <lucide-angular
                      name="log-out"
                      class="me-1.5 size-4"
                    ></lucide-angular>
                    <span>Remove from Team</span>
                  </a>
                  <hr class="my-2 border-default-200" />
                  <a
                    class="mx-1.5 flex items-center rounded px-3 py-2 text-red-500 transition-all hover:bg-red-500/10"
                    href="javascript:void(0);"
                  >
                    <lucide-angular
                      name="trash-2"
                      class="me-1.5 size-4"
                    ></lucide-angular>
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class PerformanceComponent {
  performanceList = performance
}
