import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-pagination',
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
    <h4 class="mb-4 text-xl text-default-900">Pagination</h4>
    <div class="space-y-4">
      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Simple Pagination</h4>
        </div>
        <div class="p-6">
          <!-- Pagination -->
          <nav class="flex items-center gap-x-1">
            <button
              type="button"
              class="inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-default-800 hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <lucide-angular
                name="chevron-left"
                class="size-4"
              ></lucide-angular>
            </button>
            <div class="flex items-center gap-x-1">
              <button
                type="button"
                class="flex size-10 items-center justify-center rounded-lg border border-default-200 px-3 py-2 text-sm text-default-800 focus:bg-default-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                class="flex size-10 items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-default-800 hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                2
              </button>
              <button
                type="button"
                class="flex size-10 items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-default-800 hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                3
              </button>
            </div>
            <button
              type="button"
              class="inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-default-800 hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <lucide-angular
                name="chevron-right"
                class="size-4"
              ></lucide-angular>
            </button>
          </nav>
          <!-- End Pagination -->
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Bordered Group Pagination</h4>
        </div>
        <div class="p-6">
          <!-- Pagination -->
          <nav class="flex items-center -space-x-px">
            <button
              type="button"
              class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 border border-default-200 px-2.5 py-2 text-sm text-default-800 first:rounded-s-lg last:rounded-e-lg hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <lucide-angular
                name="chevron-left"
                class="size-4"
              ></lucide-angular>
            </button>
            <button
              type="button"
              class="flex min-h-[38px] min-w-[38px] items-center justify-center border border-default-200 bg-default-200 px-3 py-2 text-sm text-default-800 first:rounded-s-lg last:rounded-e-lg focus:bg-default-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              class="flex min-h-[38px] min-w-[38px] items-center justify-center border border-default-200 px-3 py-2 text-sm text-default-800 first:rounded-s-lg last:rounded-e-lg hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              2
            </button>
            <button
              type="button"
              class="flex min-h-[38px] min-w-[38px] items-center justify-center border border-default-200 px-3 py-2 text-sm text-default-800 first:rounded-s-lg last:rounded-e-lg hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              3
            </button>
            <button
              type="button"
              class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 border border-default-200 px-2.5 py-2 text-sm text-default-800 first:rounded-s-lg last:rounded-e-lg hover:bg-default-100 focus:bg-default-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <lucide-angular
                name="chevron-right"
                class="size-4"
              ></lucide-angular>
            </button>
          </nav>
          <!-- End Pagination -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PaginationComponent {}
