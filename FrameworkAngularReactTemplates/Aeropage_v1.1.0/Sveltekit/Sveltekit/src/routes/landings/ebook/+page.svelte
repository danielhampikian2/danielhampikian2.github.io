<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar2 from '$lib/components/layouts/Navbar2.svelte';
	import Hero from './Hero.svelte';
	import About from './About.svelte';
	import Benefits from './Benefits.svelte';
	import Course from './Course.svelte';
	import Testimonial from './Testimonial.svelte';
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
			id: 'benefits',
			name: 'Benefits'
		},
		{
			id: 'courses',
			name: 'Courses'
		},
		{
			id: 'testimonials',
			name: 'Testimonials'
		}
	];
</script>

<Navbar2 navbarLink={navLinkData} />

<Hero />

<About />

<Benefits />

<Course />

<Testimonial />

<Contact />