import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { NgApexchartsModule } from 'ng-apexcharts'
import colors from 'tailwindcss/colors'

@Component({
  selector: 'admin-dashboard-revenue',
  standalone: true,
  imports: [LucideAngularModule, NgApexchartsModule],
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
        <h4 class="text-lg text-default-900">Revenue</h4>
      </div>
      <div class="p-5">
        <div id="revenue_chart" class="apex-charts">
          <apx-chart
            [series]="revenueChart.series"
            [chart]="revenueChart.chart"
            [legend]="revenueChart.legend"
            [grid]="revenueChart.grid"
            [dataLabels]="revenueChart.dataLabels"
            [fill]="revenueChart.fill"
            [stroke]="revenueChart.stroke"
            [xaxis]="revenueChart.xaxis"
            [colors]="revenueChart.colors"
            [yaxis]="revenueChart.yaxis"
            dir="ltr"
          ></apx-chart>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class RevenueComponent {
  revenueChart: any
  constructor() {
    this.revenueChart = {
      series: [
        {
          name: 'Sales',
          data: [35.5, 35.5, 36, 36, 36.5, 36.5, 36, 36, 36.5, 36.5, 36],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: 400,
        toolbar: { show: false },
      },
      plotOptions: {},
      legend: { show: true },
      dataLabels: { enabled: false },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 90, 120],
        },
      },
      stroke: { curve: 'smooth', show: true, width: 3 },
      xaxis: {
        categories: [
          'Apr 01',
          'Apr 02',
          'Apr 03',
          'Apr 04',
          'Apr 05',
          'Apr 06',
          'Apr 07',
          'Apr 08',
          'Apr 09',
          'Apr 10',
          'Apr 11',
          'Apr 12',
          'Apr 13',
          'Apr 14',
          'Apr 15',
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          position: 'front',
          stroke: { color: colors.orange[500], width: 2 },
        },
        tooltip: {
          enabled: !0,
          formatter: void 0,
          offsetY: 0,
          style: { fontSize: '12px' },
        },
      },
      yaxis: {
        max: 37.3,
        min: 34,
        tickAmount: 8,
        labels: {
          style: { colors: colors.orange[500], fontSize: '12px' },
          formatter: function (value: any) {
            return '$' + parseInt(value)
          },
        },
      },
      states: {
        normal: { filter: { type: 'none', value: 0 } },
        hover: { filter: { type: 'none', value: 0 } },
        active: {
          allowMultipleDataPointsSelection: !1,
          filter: { type: 'none', value: 0 },
        },
      },
      colors: [colors.orange[500]],
      grid: {
        borderColor: colors.orange[500],
        strokeDashArray: 6,
        yaxis: { lines: { show: true } },
      },
      markers: {
        strokeColor: colors.orange[500],
        strokeWidth: 6,
        strokeOpacity: 0.6,
      },
    }
  }
}
