<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import Feature from './Feature.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import { projectData1 } from '$lib/utilities/common';
	import Service from './Service.svelte';
	import Testimonial from './Testimonial.svelte';
	import Faq from './Faq.svelte';
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
			id: 'portfolio',
			name: 'Portfolio'
		},
		{
			id: 'testimonials',
			name: 'Testimonials'
		},
		{
			id: 'faq',
			name: 'Faq'
		},
		{
			id: 'blog',
			name: 'Blog'
		}
	];
</script>


<Navbar1 navbarLink={navLinkData} />

<Hero />

<section>
	<MarqueeGroup customClass="py-8" textClass="text-5xl" />
</section>

<Feature />

<Portfolio title="Selected Projects." tag="our portfolio" projectList={projectData1} />

<Service />

<Testimonial />

<Faq />

<Blog />