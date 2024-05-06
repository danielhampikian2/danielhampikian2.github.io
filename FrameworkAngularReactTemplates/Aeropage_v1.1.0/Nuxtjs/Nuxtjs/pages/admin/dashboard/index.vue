<template>
  <AdminPageTitle title="Dashboard" subtitle="Admin" />

  <section>
    <div class="container">
      <div class="my-6 space-y-6">
        <div class="grid gap-6 lg:grid-cols-3">
          <client-only>
            <StatCardWithChart v-for="(stat, idx) in statData" :key="idx" :stat="stat" />
          </client-only>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <div
            class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50"
          >
            <div
              class="inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600"
              role="alert"
            >
              <PartyPopperIcon class="me-2 h-4 w-4" />
              <span>Congratulations John.</span>
            </div>
            <div class="p-5">
              <div class="grid grid-cols-4 items-center justify-between">
                <div class="col-span-3 h-full">
                  <div class="flex h-full flex-col items-start">
                    <div class="mb-4 grow">
                      <p class="text-lg text-default-900">
                        You have done <span class="">68%</span>😎 more sales today
                      </p>
                      <p class="text-base text-default-600">
                        Check your new badge in your profile.
                      </p>
                    </div>
                    <a
                      href="#"
                      class="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600"
                      >View Profile
                      <EyeIcon class="ms-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div class="">
                  <img
                    src="@/assets/images/other/dashboard-hero.png"
                    alt=""
                    class="h-full max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <Source />
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="rounded-md border border-default-200 bg-white dark:bg-default-50">
              <div class="border-b border-default-200 px-6 py-3">
                <h4 class="text-lg text-default-900">Revenue</h4>
              </div>
              <div class="p-5">
                <client-only>
                  <apexchart
                    :height="revenueChartData.height"
                    :series="revenueChartData.series"
                    :options="revenueChartData.options"
                    class="apex-charts"
                  />
                </client-only>
              </div>
            </div>
          </div>

          <TopPerformer />
        </div>

        <div class="grid grid-cols-1">
          <RecentOrder />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import AdminPageTitle from '@/layouts/partials/AdminPageTitle.vue'
import Source from '@/pages/admin/dashboard/components/Source.vue'
import TopPerformer from '@/pages/admin/dashboard/components/TopPerformer.vue'
import RecentOrder from '@/pages/admin/dashboard/components/RecentOrder.vue'
import StatCardWithChart from '@/components/widgets/StatCardWithChart.vue'
import type { StatType } from '@/types/admin'
import colors from 'tailwindcss/colors'

import Apexchart from 'vue3-apexcharts'

import { PartyPopperIcon, EyeIcon } from 'lucide-vue-next'

const statData: StatType[] = [
  {
    title: 'Today Revenue',
    growth: 10.21,
    numeric: 2100,
    prefix: '$',
    chart: {
      height: 90,
      series: [{ name: 'This Month', data: [98, 85, 60, 80, 100, 150, 120] }],
      options: {
        chart: { height: 90, type: 'area', toolbar: { show: !1 } },
        grid: { show: false },
        legend: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.4,
            opacityTo: 0
          }
        },
        dataLabels: { enabled: 0 },
        stroke: { curve: 'stepline' },
        colors: [colors.orange[500]],
        xaxis: {
          labels: {
            show: false,
            fill: {
              color: 'transparent'
            },
            axisBorder: {
              show: false
            }
          }
        },
        yaxis: {
          show: false
        }
      }
    }
  },
  {
    title: 'Product Sold',
    growth: -5.05,
    numeric: 558,
    chart: {
      height: 90,
      series: [{ name: 'This Month', data: [110, 79, 72, 89, 120, 150, 140] }],
      options: {
        chart: { height: 90, type: 'area', toolbar: { show: !1 } },
        grid: { show: false },
        legend: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.4,
            opacityTo: 0
          }
        },
        dataLabels: { enabled: 0 },
        stroke: { curve: 'stepline' },
        colors: [colors.teal[500]],
        xaxis: {
          labels: {
            show: false,
            fill: {
              color: 'transparent'
            },
            axisBorder: {
              show: false
            }
          }
        },
        yaxis: {
          show: false
        }
      }
    }
  },
  {
    title: 'New Customers',
    growth: 25.16,
    numeric: 65,
    chart: {
      height: 90,
      series: [{ name: 'This Month', data: [148, 100, 80, 92, 110, 160, 130] }],
      options: {
        chart: { height: 90, type: 'area', toolbar: { show: !1 } },
        grid: { show: false },
        legend: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.4,
            opacityTo: 0
          }
        },
        dataLabels: { enabled: 0 },
        stroke: { curve: 'stepline' },
        colors: [colors.sky[500]],
        xaxis: {
          labels: {
            show: false,
            fill: {
              color: 'transparent'
            },
            axisBorder: {
              show: false
            }
          }
        },
        yaxis: {
          show: false
        }
      }
    }
  }
]

const revenueChartData = {
  height: 400,
  series: [
    {
      name: 'Sales',
      data: [35.5, 35.5, 36, 36, 36.5, 36.5, 36, 36, 36.5, 36.5, 36]
    }
  ],
  options: {
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 400,
      toolbar: { show: false }
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
        stops: [0, 90, 120]
      }
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
        'Apr 15'
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        position: 'front',
        stroke: { color: colors.orange[500], width: 2 }
      },
      tooltip: {
        enabled: !0,
        formatter: void 0,
        offsetY: 0,
        style: { fontSize: '12px' }
      }
    },
    yaxis: {
      max: 37.3,
      min: 34,
      tickAmount: 8,
      labels: {
        style: { colors: colors.orange[500], fontSize: '12px' },
        formatter: function (e: any) {
          return '$' + Math.round(10 * e)
        }
      }
    },
    states: {
      normal: { filter: { type: 'none', value: 0 } },
      hover: { filter: { type: 'none', value: 0 } },
      active: {
        allowMultipleDataPointsSelection: !1,
        filter: { type: 'none', value: 0 }
      }
    },
    colors: [colors.orange[500]],
    grid: {
      borderColor: colors.orange[500],
      strokeDashArray: 6,
      yaxis: { lines: { show: true } }
    },
    markers: {
      strokeColor: colors.orange[500],
      strokeWidth: 6,
      strokeOpacity: 0.6
    }
  }
}
</script>
