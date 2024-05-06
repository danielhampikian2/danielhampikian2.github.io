<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import Contact from './Contact.svelte';
	import Service from './Service.svelte';
	import Stat from './Stat.svelte';
	import Faq from './Faq.svelte';
	import Testimonial from './Testimonial.svelte';
	import Blog from './Blog.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'services',
			name: 'Services'
		},
		{
			id: 'faq',
			name: 'Faq'
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

<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<Contact />

<Service />

<Stat />

<Faq />

<Testimonial />

<Blog />