<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar2 from '$lib/components/layouts/Navbar2.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Portfolio from './Portfolio.svelte';
	import Faq from './Faq.svelte';
	import Blog from './Blog.svelte';
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
			id: 'faq',
			name: 'Faq'
		}
	];
</script>

<Navbar2 menuPosition="sticky" navbarLink={navLinkData} />

<Hero />

<section>
	<MarqueeGroup
		marqeeItems={['Wildlife photography','Pet portraits','Nature photography','Wildlife photography','Pet portraits','Nature photography']}
		customClass="relative m-auto flex gap-28 overflow-hidden bg-black py-6"
		textClass="text-4xl text-white"
	/>
</section>

<About />

<Service />

<Portfolio />

<Faq />

<Blog />

<Contact />