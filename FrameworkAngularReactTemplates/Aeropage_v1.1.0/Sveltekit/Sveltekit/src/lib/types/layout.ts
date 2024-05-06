import type { IconType } from '$lib/types/index';

export type NavbarLinkType = {
	id?: string
	name: string
	icon?: IconType
	path?: string
}

export type SocialLinkType = {
	image?: string
	icon?: IconType
	name: string
	path?: string | null
}