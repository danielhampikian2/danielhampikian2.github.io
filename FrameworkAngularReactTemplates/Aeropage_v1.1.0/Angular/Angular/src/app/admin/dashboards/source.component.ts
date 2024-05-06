import { Component } from '@angular/core'
import { sources } from './data'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'admin-dashboard-source',
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
    <div class="grid grid-cols-1">
      <div
        class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50"
      >
        <div
          class="flex items-center justify-between border-b border-default-200 px-4 py-3"
        >
          <h4 class="text-lg text-default-900">Sources</h4>
          <a
            href="javascript:void(0);"
            class="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-primary-700"
            >Export
            <lucide-angular name="upload" class="ms-1.5 size-4"></lucide-angular
          ></a>
        </div>

        <div class="">
          <table class="w-full">
            <thead class="border-b border-default-200 bg-default-100">
              <tr>
                <th
                  class="p-2 text-start text-sm font-semibold text-default-900"
                >
                  Types
                </th>
                <th
                  class="p-2 text-start text-sm font-semibold text-default-900"
                >
                  Sessions
                </th>
                <th
                  class="p-2 text-start text-sm font-semibold text-default-900"
                >
                  Views
                </th>
              </tr>
            </thead>
            <tbody class="divide-y dark:divide-default-200">
              @for (item of sourcesData; track $index) {
                <tr>
                  <td class="p-2">{{ item.source }}</td>
                  <td class="p-2">{{ item.visits }}</td>
                  <td class="p-2">{{ item.conversions }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <!-- end p-6-->
      </div>
    </div>
  `,
  styles: ``,
})
export class SourceComponent {
  sourcesData = sources
}
