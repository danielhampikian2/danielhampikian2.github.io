<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { AirplayIcon, CircleDollarSignIcon, MailIcon } from 'lucide-svelte';
	import ServiceCard7 from '$lib/components/widgets/ServiceCard7.svelte';

	interface NewServiceType {
		service: ServiceType;
		variant?: string;
	}

	const serviceData: NewServiceType[] = [
		{
			service: {
				icon: AirplayIcon,
				title: 'SEO Solutions',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
			},
			variant: 'sky-500'
		},
		{
			service: {
				icon: CircleDollarSignIcon,
				title: 'PPC Marketing',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
			},
			variant: 'pink-500'
		},
		{
			service: {
				icon: MailIcon,
				title: 'Email Marketing',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
			},
			variant: 'purple-500'
		}
	];
</script>

<section id="services" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Services</span>
				<h2
					class="my-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
					Services
				</h2>
				<p class="text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each serviceData as item}
				<ServiceCard7 service={item.service} variant={item.variant} />
			{/each}
		</div>
	</div>
</section>