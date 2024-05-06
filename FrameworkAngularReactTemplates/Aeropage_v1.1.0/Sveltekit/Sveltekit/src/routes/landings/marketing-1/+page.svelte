<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import About from './About.svelte';
	import Service1 from './Service1.svelte';
	import Service2 from './Service2.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import { projectData1 } from '$lib/utilities/common';
	import Faq from './Faq.svelte';
	import Testimonial from './Testimonial.svelte';
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
			id: 'about',
			name: 'About'
		},
		{
			id: 'services',
			name: 'Services'
		},
		{
			id: 'portfolio',
			name: 'Portfolio'
		},
		{
			id: 'faq',
			name: 'Faq'
		},
		{
			id: 'testimonial',
			name: 'Testimonial'
		},
		{
			id: 'blog',
			name: 'Blog'
		}
	];
</script>


<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<section>
	<MarqueeGroup />
</section>

<Service1 />

<About />

<Service2 />

<Portfolio title="Selected Projects." tag="Our Portfolio" projectList={projectData1} />

<Faq />

<Testimonial />

<Blog />