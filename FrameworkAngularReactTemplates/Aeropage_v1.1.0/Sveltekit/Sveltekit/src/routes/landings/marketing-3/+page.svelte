<script lang="ts">
	import type { NavbarLinkType } from '$lib/types/layout';
	import Navbar2 from '$lib/components/layouts/Navbar2.svelte';
	import Hero from './Hero.svelte';
	import Solution from './Solution.svelte';
	import Project from './Project.svelte';
	import Feature from './Feature.svelte';
	import MarqueeGroup from '$lib/components/MarqueeGroup.svelte';
	import Faq from './Faq.svelte';
	import Cta from './Cta.svelte';

	const navLinkData: NavbarLinkType[] = [
		{
			id: 'home',
			name: 'Home'
		},
		{
			id: 'solutions',
			name: 'Solutions'
		},
		{
			id: 'projects',
			name: 'Projects'
		},
		{
			id: 'features',
			name: 'Features'
		},
		{
			id: 'faq',
			name: 'Faq'
		}
	];
</script>


<Navbar2 menuPosition="sticky" navbarLink={navLinkData} />

<Hero />

<Solution />

<Project />

<Feature />

<section class="pb-10 pt-20">
	<MarqueeGroup marqeeItems={['eCommerce','Development','Social media','Consultation']}
								customClass="gap-10 border-y py-8"
								textClass="text-5xl font-medium text-default-950" />
</section>

<Faq />

<Cta />