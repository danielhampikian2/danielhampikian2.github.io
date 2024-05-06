<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { BookCopyIcon, CookingPotIcon, GlassWaterIcon } from 'lucide-svelte';
	import ServiceCard2 from '$lib/components/widgets/ServiceCard2.svelte';

	const serviceData: ServiceType[] = [
		{
			icon: CookingPotIcon,
			title: 'Nutritious Meals',
			description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.'
		},
		{
			icon: GlassWaterIcon,
			title: 'Pure Drinking Water',
			description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.'
		},
		{
			icon: BookCopyIcon,
			title: 'Quality Education',
			description: 'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.'
		}
	];
</script>

<section class="relative -mt-40 md:-mt-32 py-10">
	<div class="container">
		<div class="max-w-6xl mx-auto rounded-xl shadow bg-gradient-to-t from-default-50 via-default-100 to-default-200">
			<div class="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-default-300">
				{#each serviceData as service}
					<ServiceCard2 {service} />
				{/each}
			</div>
		</div>
	</div>
</section>