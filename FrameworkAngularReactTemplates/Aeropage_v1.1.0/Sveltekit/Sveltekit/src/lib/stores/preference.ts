import { persisted } from 'svelte-persisted-store';
import { type Writable } from 'svelte/store';

export const preferences: Writable<{ theme: 'light' | 'dark' }> = persisted('aeropage_svelte_preferences', {
	theme: 'light'
});

export let currentTheme: 'light' | 'dark';
preferences.subscribe(value => currentTheme = value.theme);