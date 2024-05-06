<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import Testimonial from './Testimonial.svelte';
	import Feature from './Feature.svelte';
	import Asset from './Asset.svelte';
	import Onboarding from './Onboarding.svelte';
	import Cta from './Cta.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'experts',
			name: 'Experts'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'assets',
			name: 'Assets'
		},
		{
			id: 'onboarding',
			name: 'Onboarding'
		}
	];
</script>

<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<section>
	<MarqueeGroup customClass="bg-default-100 dark:bg-default-50 py-4" />
</section>

<Testimonial />

<Feature />

<Asset />

<Onboarding />

<Cta />