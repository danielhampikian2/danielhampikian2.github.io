import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export type IconType = ComponentType<Icon>

export type DateType = {
	date?: number
	month?: string | number
	year?: number
	hours?: number
	minute?: number
}

