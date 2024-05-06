<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar2 from '$lib/components/layouts/Navbar2.svelte';
	import Hero from './Hero.svelte';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Portfolio from './Portfolio.svelte';
	import Testimonial from './Testimonial.svelte';
	import Blog from './Blog.svelte';
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
			id: 'work',
			name: 'Work'
		},
		{
			id: 'testimonials',
			name: 'Testimonials'
		},
		{
			id: 'blog',
			name: 'Blog'
		}
	];
</script>

<Navbar2 navbarLink={navLinkData} />

<Hero />

<About />

<Service />

<Portfolio />

<Testimonial />

<Blog />

<Cta />