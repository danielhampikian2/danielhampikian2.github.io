import { Component, Input } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { NgApexchartsModule } from 'ng-apexcharts'
import colors from 'tailwindcss/colors'

@Component({
  selector: 'admin-dashboard-widget',
  standalone: true,
  imports: [NgApexchartsModule, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <div class="grid gap-6 lg:grid-cols-3">
      <div
        class="rounded-md border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="p-5">
          <div class="">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-default-600"
                >Today Revenue</span
              >
              <span class="text-teal-500"
                ><lucide-angular
                  name="trending-up"
                  class="me-1 inline size-4"
                ></lucide-angular>
                +10.21%</span
              >
            </div>
            <div class="flex items-end justify-between gap-4">
              <h3 class="text-3xl font-medium text-default-800">$2100</h3>
              <!-- <div id="today_revenue_chart" class="apex-charts"> -->
              <apx-chart
                [series]="todayRevenue.series"
                [chart]="todayRevenue.chart"
                [grid]="todayRevenue.grid"
                [legend]="todayRevenue.legend"
                [fill]="todayRevenue.fill"
                [dataLabels]="todayRevenue.dataLabels"
                [stroke]="todayRevenue.stroke"
                [colors]="todayRevenue.colors"
                [yaxis]="todayRevenue.yaxis"
                [xaxis]="todayRevenue.xaxis"
                dir="ltr"
              ></apx-chart>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-md border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="p-5">
          <div class="">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-default-600"
                >Product Sold</span
              >
              <span class="text-red-500"
                ><lucide-angular
                  name="trending-down"
                  class="me-1 inline size-4"
                ></lucide-angular>
                -5.05%</span
              >
            </div>
            <div class="flex items-end justify-between gap-4">
              <h3 class="text-3xl font-medium text-default-800">558</h3>
              <div id="toda_product_sold_chart" class="apex-charts">
                <apx-chart
                  [series]="productSold.series"
                  [chart]="productSold.chart"
                  [grid]="productSold.grid"
                  [legend]="productSold.legend"
                  [fill]="productSold.fill"
                  [dataLabels]="productSold.dataLabels"
                  [stroke]="productSold.stroke"
                  [colors]="productSold.colors"
                  [yaxis]="productSold.yaxis"
                  [xaxis]="productSold.xaxis"
                  dir="ltr"
                ></apx-chart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-md border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="p-5">
          <div class="">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-default-600"
                >New Customers</span
              >
              <span class="text-teal-500"
                ><lucide-angular
                  name="trending-up"
                  class="me-1 inline size-4"
                ></lucide-angular>
                +25.16%</span
              >
            </div>
            <div class="flex items-end justify-between gap-4">
              <h3 class="text-3xl font-medium text-default-800">65</h3>
              <div id="today_new_customer_chart" class="apex-charts">
                <apx-chart
                  [series]="newCustomer.series"
                  [chart]="newCustomer.chart"
                  [legend]="newCustomer.legend"
                  [grid]="newCustomer.grid"
                  [dataLabels]="newCustomer.dataLabels"
                  [fill]="newCustomer.fill"
                  [stroke]="newCustomer.stroke"
                  [xaxis]="newCustomer.xaxis"
                  [colors]="newCustomer.colors"
                  [yaxis]="newCustomer.yaxis"
                  dir="ltr"
                ></apx-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class WidgetsComponent {
  todayRevenue: any
  productSold: any
  newCustomer: any

  constructor() {
    // revenue chart
    this.todayRevenue = {
      series: [{ name: 'This Month', data: [98, 85, 60, 80, 100, 150, 120] }],
      chart: { height: 90, type: 'area', toolbar: { show: !1 } },
      grid: { show: false },
      legend: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.4,
          opacityTo: 0,
        },
      },
      dataLabels: { enabled: 0 },
      stroke: { curve: 'stepline' },
      colors: [colors.orange[500]],
      xaxis: {
        labels: {
          show: false,
          fill: {
            color: 'transparent',
          },
          axisBorder: {
            show: false,
          },
        },
      },
      yaxis: {
        show: false,
      },
    }

    // product sold
    this.productSold = {
      series: [{ name: 'This Month', data: [110, 79, 72, 89, 120, 150, 140] }],

      chart: { height: 90, type: 'area', toolbar: { show: !1 } },
      grid: { show: false },
      legend: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.4,
          opacityTo: 0,
        },
      },
      dataLabels: { enabled: 0 },
      stroke: { curve: 'stepline' },
      colors: [colors.teal[500]],
      xaxis: {
        labels: {
          show: false,
          fill: {
            color: 'transparent',
          },
          axisBorder: {
            show: false,
          },
        },
      },
      yaxis: {
        show: false,
      },
    }

    // new Customer
    this.newCustomer = {
      series: [{ name: 'This Month', data: [148, 100, 80, 92, 110, 160, 130] }],
      chart: { height: 90, type: 'area', toolbar: { show: !1 } },
      grid: { show: false },
      legend: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.4,
          opacityTo: 0,
        },
      },
      dataLabels: { enabled: 0 },
      stroke: { curve: 'stepline' },
      colors: [colors.sky[500]],
      xaxis: {
        labels: {
          show: false,
          fill: {
            color: 'transparent',
          },
          axisBorder: {
            show: false,
          },
        },
      },
      yaxis: {
        show: false,
      },
    }
  }
}
