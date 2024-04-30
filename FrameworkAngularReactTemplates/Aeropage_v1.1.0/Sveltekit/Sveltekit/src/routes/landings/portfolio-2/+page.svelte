<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar1 from '$lib/components/layouts/Navbar1.svelte';
	import Hero from './Hero.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import About from './About.svelte';
	import Project from './Project.svelte';
	import Advantage from './Advantage.svelte';
	import Accolades from './Accolades.svelte';
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
			id: 'project',
			name: 'Project'
		},
		{
			id: 'portfolio',
			name: 'Portfolio'
		},
		{
			id: 'advantage',
			name: 'Advantage'
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
	<MarqueeGroup customClass="bg-black" textClass="text-white" />
</section>

<About />

<Project />

<Advantage />

<Accolades />

<Testimonial />

<Blog />

<Cta />