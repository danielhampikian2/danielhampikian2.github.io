<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import Brands from '$lib/components/sections/Brands.svelte';
	import { brandData } from '$lib/utilities/common';
	import Pricing from './Pricing.svelte';
	import Service from './Service.svelte';
	import Cta from './Cta.svelte';
	import Feature from './Feature.svelte';
	import Testimonial from './Testimonial.svelte';
	import Faq from './Faq.svelte';
	import Extra from './Extra.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'pricing',
			name: 'Pricing'
		},
		{
			id: 'services',
			name: 'Services'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'testimonial',
			name: 'Testimonial'
		},
		{
			id: 'faq',
			name: 'Faq'
		}
	];
</script>


<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<Brands brandData={brandData} />

<Pricing />

<Service />

<Cta />

<Feature />

<Testimonial />

<Faq />

<Extra />