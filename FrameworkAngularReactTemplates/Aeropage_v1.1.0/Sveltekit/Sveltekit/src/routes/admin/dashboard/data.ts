import colors from 'tailwindcss/colors';
import type { StatType } from '$lib/types/admin';

export const statData: StatType[] = [
	{
		id: 'today_revenue_chart',
		title: 'Today Revenue',
		growth: 10.21,
		numeric: 2100,
		prefix: '$',
		chartOptions: {
			series: [{ name: 'This Month', data: [98, 85, 60, 80, 100, 150, 120] }],
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
			dataLabels: { enabled: false },
			stroke: { curve: 'stepline' },
			colors: [colors.orange[500]],
			xaxis: {
				labels: {
					show: false
				}
			},
			yaxis: {
				show: false
			}
		}
	},
	{
		id: 'today_product_sold_chart',
		title: 'Product Sold',
		growth: -5.05,
		numeric: 558,
		chartOptions: {
			series: [{ name: 'This Month', data: [110, 79, 72, 89, 120, 150, 140] }],
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
			dataLabels: { enabled: false },
			stroke: { curve: 'stepline' },
			colors: [colors.teal[500]],
			xaxis: {
				labels: {
					show: false
				}
			},
			yaxis: {
				show: false
			}
		}
	},
	{
		id: 'today_new_customer_chart',
		title: 'New Customers',
		growth: 25.16,
		numeric: 65,
		chartOptions: {
			series: [{ name: 'This Month', data: [148, 100, 80, 92, 110, 160, 130] }],
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
			dataLabels: { enabled: false },
			stroke: { curve: 'stepline' },
			colors: [colors.sky[500]],
			xaxis: {
				labels: {
					show: false
				}
			},
			yaxis: {
				show: false
			}
		}
	}
];

export const revenueChartData = {
	series: [
		{
			name: 'Sales',
			data: [35.5, 35.5, 36, 36, 36.5, 36.5, 36, 36, 36.5, 36.5, 36]
		}
	],
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
			formatter: function(e:any) {
				return '$' + Math.round(10 * e);
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
};