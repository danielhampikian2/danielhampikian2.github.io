import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { WidgetsComponent } from './widgets.component'
import { SourceComponent } from './source.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { RevenueComponent } from './revenue.component'
import { PerformanceComponent } from './performance.component'
import { RecentOrdersComponent } from './recent-orders.component'

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    WidgetsComponent,
    SourceComponent,
    LucideAngularModule,
    RevenueComponent,
    PerformanceComponent,
    RecentOrdersComponent,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <app-breadcrumb [pageTitle]="'Dashboard'" />
    <section>
      <div class="container">
        <div class="my-6 space-y-6">
          <admin-dashboard-widget />

          <div class="grid gap-6 lg:grid-cols-2">
            <div
              class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50"
            >
              <div
                class="inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600"
                role="alert"
              >
                <lucide-angular
                  name="party-popper"
                  class="me-2 size-4"
                ></lucide-angular>
                <span>Congratulations John.</span>
              </div>
              <div class="p-5">
                <div class="grid grid-cols-4 items-center justify-between">
                  <div class="col-span-3 h-full">
                    <div class="flex h-full flex-col items-start">
                      <div class="mb-4 grow">
                        <p class="text-lg text-default-900">
                          You have done <span class="">68%</span>😎 more sales
                          today
                        </p>
                        <p class="text-base text-default-600">
                          Check your new badge in your profile.
                        </p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600"
                        >View Profile
                        <lucide-angular
                          name="eye"
                          class="ms-1 size-4"
                        ></lucide-angular
                      ></a>
                    </div>
                  </div>
                  <div class="">
                    <img
                      src="assets/images/other/dashboard-hero.png"
                      alt=""
                      class="h-full max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <admin-dashboard-source />
          </div>
          <div class="grid gap-6 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <admin-dashboard-revenue />
            </div>
            <!-- Top Performance -->
            <admin-dashboard-performance />
          </div>
          <div class="grid grid-cols-1">
            <admin-dashboard-recent-orders />
          </div>
          <!-- recentOrders -->
        </div>
      </div>
      <!-- </div> -->
    </section>
  `,
  styles: ``,
})
export class DashboardsComponent {}
