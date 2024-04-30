<script lang="ts">
	import type { PricingType } from '$lib/types/landing';
	import PricingCard1 from '$lib/components/widgets/PricingCard1.svelte';
	import PricingCard2 from '$lib/components/widgets/PricingCard2.svelte';

	const pricingData: PricingType[] = [
		{
			title: 'Shared',
			planFor: 'For individuals and teams',
			price: 8,
			condition: {
				title: 'Per editor,monthly',
				description: 'With Unlimited email'
			},
			services: ['Unlimited Email', 'Unlimited Updates', 'Free 5 host & domain', '24/7 Dedicated Support', 'Backing', 'Up to 10 users monthly']
		},
		{
			title: 'Wordpress',
			planFor: 'For individuals and teams',
			price: 12,
			condition: {
				title: 'For team,monthly',
				description: 'team With 8 users'
			},
			services: ['Unlimited Email', 'Unlimited Updates', 'Free 5 host & domain', '24/7 Dedicated Support', 'Backing', 'Up to 30 users monthly']
		},
		{
			title: 'VPS',
			planFor: 'For individuals and teams',
			price: 37,
			condition: {
				title: 'All users, monthly',
				description: 'for Unlimited users'
			},
			services: ['Unlimited Email', 'Unlimited Updates', 'Free 5 host & domain', '24/7 Dedicated Support', 'Backing', 'Up to 80 users monthly']
		},

		{
			title: 'Dedicated',
			planFor: 'For Businesses and large organisations',
			description: 'For advanced security and more flexible controls,the Enterprise plan helps you extend your design processes enterprise-wide.',
			price: 79,
			condition: {
				title: 'All users, monthly',
				description: 'for Unlimited users'
			}
		}
	];
</script>

<section id="pricing" class="py-10 lg:py-20">
	<div class="container">
		<div class="mx-auto mb-12 max-w-xl text-center">
			<h2 class="text-3xl font-medium text-default-950 md:text-4xl">
				Our Pricing
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-10">
			{#each pricingData.slice(0, 3) as plan}
				<PricingCard1 {plan} />
			{/each}
			<div class="lg:col-span-3">
				<PricingCard2 plan={pricingData[3]} />
			</div>

		</div>
	</div>

</section>