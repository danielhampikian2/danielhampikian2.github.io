import { Component } from '@angular/core'
import { recentOrders } from './data'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'admin-dashboard-recent-orders',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <div class="mt-5 grid grid-cols-1">
      <div
        class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50"
      >
        <div
          class="flex items-center justify-between border-b border-default-200 px-4 py-3"
        >
          <h4 class="uppercase">Recent Orders</h4>
          <a
            href="javascript:void(0);"
            class="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-primary-700"
            >Export
            <lucide-angular name="upload" class="ms-1.5 size-4"></lucide-angular
          ></a>
        </div>

        <div class="overflow-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead>
                  <tr class="bg-default-100">
                    <th
                      scope="col"
                      class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-4 text-start text-sm font-semibold text-default-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  @for (item of recentOrderData; track $index) {
                    <tr class="hover:bg-default-100">
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm font-medium text-default-600"
                      >
                        {{ item.orderNumber }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-default-600"
                      >
                        {{ item.product }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-default-600"
                      >
                        {{ item.customer }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-start text-default-600"
                      >
                        {{ item.price }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-start text-default-600"
                      >
                        <span
                          [ngClass]="{
                            'bg-teal-500/10 text-teal-500':
                              item.status === 'Delivered',
                            'bg-yellow-500/10 text-yellow-500':
                              item.status === 'Pending',
                            'bg-red-500/10 text-red-500':
                              item.status === 'Declined'
                          }"
                          class="inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs font-medium 
                     "
                          >{{ item.status }}</span
                        >
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- end table-responsive-->
      </div>
    </div>
  `,
  styles: ``,
})
export class RecentOrdersComponent {
  recentOrderData = recentOrders
}
