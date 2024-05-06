import type { DateType } from '$lib/types/index';
import type { ApexOptions } from 'apexcharts';
// type ChartType = {
// 	type?: string
// 	series: any[]
// 	width?: number
// 	height?: number
// 	options: object
// }

export type StatType = {
	id: string
	title: string
	numeric: number
	growth: number
	prefix?: string
	postfix?: string
	chartOptions?: ApexOptions
}

export type UserType = {
	image?: string
	name?: string
	role?: string
}

export type ProjectType = {
	image?: string
	category?: string
	status: string
	name: string
	about?: string
	started: DateType
	path?: string
	comments: number
	tasks: number
	progress: number
	assignees: UserType[]
}