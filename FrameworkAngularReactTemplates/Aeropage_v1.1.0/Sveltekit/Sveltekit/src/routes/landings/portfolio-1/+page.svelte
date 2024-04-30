<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import Brands from './Brands.svelte';
	import Feature from './Feature.svelte';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Blog from './Blog.svelte';
	import Faq from './Faq.svelte';
	import Cta from './Cta.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
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
			id: 'testimonial',
			name: 'Testimonial'
		},
		{
			id: 'blog',
			name: 'Blog'
		},
		{
			id: 'faq',
			name: 'Faq'
		}
	];
</script>

<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<Brands />

<Feature />

<About />

<Service />

<Blog />

<Faq />

<Cta />