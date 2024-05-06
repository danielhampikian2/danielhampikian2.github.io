<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Portfolio from './Portfolio.svelte';
	import Step from './Step.svelte';
	import Testimonial from './Testimonial.svelte';
	import Action from './Action.svelte';
	import Blog from './Blog.svelte';
	import Cta from './Cta.svelte';
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
			id: 'portfolio',
			name: 'Portfolio'
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
			id: 'contact',
			name: 'Contact'
		}
	];
</script>

<Navbar1 menuPosition="fixed" navbarLink={navLinkData} />

<Hero />

<section class="lg:-mt-[72px]">
	<MarqueeGroup customClass="bg-default-100 dark:bg-default-50 border-none" />
</section>

<About />

<Service />

<Portfolio />

<Step />

<Testimonial />

<Action />

<Blog />

<Cta />

<Contact />