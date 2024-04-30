import type { DateType, IconType } from '$lib/types/index';

export type ToolType = {
	image: string
	name: string
	description?: string
}

type ImageType = {
	light: string
	dark: string
}

type PageType = {
	image: ImageType
	title: string
	path: string
}

export type FeatureType = {
	icon?: IconType
	image?: string
	title: string
	description?: string
	tag?: string
	path?: string
}

export type DemoType = {
	id: string
	tag?: string
	title: string
	description?: string
	pages?: PageType[]
	features?: FeatureType[]
}

export type ServiceType = FeatureType

export type ProjectType = {
	image: string
	category?: string
	name: string
	about?: string
	path?: string
}

export type FaqType = {
	icon?: IconType
	image?: string
	question: string
	answer: string
	path?: string
}

export type AuthorType = {
	image?: string
	name: string
	expertise?: string
	address?: string
}

export type BlogType = {
	image?: string
	publish?: DateType
	category?: string
	title: string
	description?: string
	author?: AuthorType
	path?: string
}

export type ContactType = {
	icon?: IconType
	image?: string
	label?: string
	detail: string
}

export type TestimonialType = {
	publish?: DateType
	comment: string
	rating?: number
	author?: AuthorType
}

export type StatType = {
	icon?: IconType
	image?: string
	title: string
	description?: string
}

export type BrandType = {
	icon?: IconType
	image?: string
	name?: string
	about?: string
}

export type CourseType = BlogType

type ConditionType = {
	title: string
	description: string
}

export type PricingType = {
	title: string
	planFor: string
	description?: string
	price: number
	condition: ConditionType
	services?: string[]
	path?: string
}

export type StepType = FeatureType

export interface NewsType extends BlogType {
	tags?: string[]
}

export type WorkType = {
	date: string;
	title: string;
	category: string;
	description: string;
	image: string;
}