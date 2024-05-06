<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar2 from '$lib/components/layouts/Navbar2.svelte';
	import Hero from './Hero.svelte';
	import Feature from './Feature.svelte';
	import Faq from './Faq.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import { projectData2 } from '$lib/utilities/common';
	import Pricing from './Pricing.svelte';
	import Service from './Service.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import Review from './Review.svelte';
	import Blog from './Blog.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'faq',
			name: 'Faq'
		},
		{
			id: 'portfolio',
			name: 'Portfolio'
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
			id: 'blog',
			name: 'Blog'
		}
	];
</script>

<Navbar2 navbarLink={navLinkData} />

<Hero />

<Feature />

<Faq />

<Portfolio tag="Our Portfolio" title="Selected Projects." projectList={projectData2} />

<Pricing />

<Service />

<section>
	<MarqueeGroup customClass="py-8" />
</section>

<Review />

<Blog />