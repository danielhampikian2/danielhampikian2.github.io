<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';

	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Agency1Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import About from './About.svelte';
	import Service1 from './Service1.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import { projectData1 } from '$lib/utilities/common';
	import Service2 from './Service2.svelte';
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

<Navbar1 navbarLink={navLinkData} />

<Agency1Hero />

<section class="lg:pb-10">
	<MarqueeGroup />
</section>

<About />

<Service1 />

<Portfolio tag="Our Portfolio" title="Selected Projects." projectList={projectData1} />

<Service2 />

<Faq />

<Blog />

<Contact />