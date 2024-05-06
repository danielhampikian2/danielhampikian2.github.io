<script lang="ts">
	import { AirplayIcon, FigmaIcon, LayersIcon, LayoutGridIcon, MoveRightIcon } from 'lucide-svelte';
	import type { ServiceType } from '$lib/types/landing';
	import ServiceCard8 from '$lib/components/widgets/ServiceCard8.svelte';

	const statData: ServiceType[] = [
		{
			title: '180+',
			description: 'Completed Projects'
		},
		{
			title: '90+',
			description: 'Satisfied Clients'
		},
		{
			title: '30k',
			description: 'Cups of Coffee'
		},
		{
			title: 'Zero',
			description: 'Negative Reviews'
		}
	];

	const serviceData: ServiceType[] = [
		{
			icon: LayoutGridIcon,
			title: 'Brand Strategy',
			description: 'Curabitur vel molestie dolor vulputate diam. Etiam ornare facilisis eu euismod cras blandit vel purus nec varius.'
		},
		{
			icon: FigmaIcon,
			title: 'UI/UX Design',
			description: 'Quisque accumsan augue nec ligula gravida, eleifend volutpat, vulputate imperdiet quis sed odio.'
		},
		{
			icon: LayersIcon,
			title: 'Motion Design',
			description: 'Maecenas finibus ipsum orci, sit amet eleifend purus rutrum fringilla. Nunc quis lobortis nulla.'
		},
		{
			icon: AirplayIcon,
			title: 'Research & Solutions',
			description: 'Cras nisl ex, fermentum id volutpat luctus, interdum luctus tortor. Nunc vestibulum accumsan.'
		}
	];
</script>

<section id="services" class="p-8 md:p-16">
	<div
		class="rounded-xl bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat px-6 py-20 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
		<div class="container">
			<div class="relative">
				<div class="rounded-md p-6">
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

						{#each statData as item }
							<div class="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100">
								<h2 class="text-5xl font-medium text-default-950">{ item.title }</h2>
								<p class="mt-3 text-base text-default-950">
									{ item.description }
								</p>
							</div>
						{/each}

					</div>

				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-24">
	<div class="container">
		<div class="grid items-center gap-6 xl:grid-cols-5">
			<div class="xl:col-span-3">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">

					{#each serviceData as service,idx}
						<ServiceCard8 {service} customClass={idx%2===0 ? 'xl:-mt-8':''} />
					{/each}
				</div>

			</div>

			<div class="xl:col-span-2">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Services</span>
				<h2 class="mt-6 text-4xl/tight font-medium text-default-950">
					Delivering Top-Notch Development Solutions.
				</h2>
				<p class="mt-5 text-base">
					Leveraging the power of design to solve complex problems and
					foster business solutions.
				</p>
				<div class="mt-10">
					<a
						href={null}
						class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
					>Read More
						<MoveRightIcon class="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>

	</div>
</section>