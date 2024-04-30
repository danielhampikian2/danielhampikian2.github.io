<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Work from './Work.svelte';
	import Faq from './Faq.svelte';
	import Story from './Story.svelte';
	import Contact from './Contact.svelte';

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
			id: 'faq',
			name: 'Faq'
		},
		{
			id: 'stories',
			name: 'Stories'
		},
		{
			id: 'contact',
			name: 'Contact'
		}
	];
</script>

<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<About />

<Service />

<Work />

<Faq />

<Story />

<Contact />