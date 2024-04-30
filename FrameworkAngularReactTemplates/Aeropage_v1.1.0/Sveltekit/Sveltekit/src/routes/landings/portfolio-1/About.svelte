<script lang="ts">
	import { CheckIcon } from 'lucide-svelte';
	import { portfolio1Img6 } from '$lib/utilities/images';
	import type { ServiceType } from '$lib/types/landing';

	const serviceData: ServiceType[] = [
		{
			title: 'Boot Your Business'
		},
		{
			title: 'Marketing Support'
		},
		{
			title: 'Talented Teams'
		},
		{
			title: '24/7 Strong Support'
		}

	];
</script>

<section id="about" class="py-10 lg:py-20">
	<div class="container">
		<div class="grid items-center gap-6 2xl:grid-cols-2">
			<div class="flex justify-center">
				<div
					class="inline-block rounded-xl border border-primary/20 bg-primary/10 p-6">
					<img src={portfolio1Img6} class="rounded-lg" alt="" />
				</div>
			</div>

			<div>
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our About
            </span>
				<h2 class="mt-6 text-3xl font-medium text-default-950 md:text-4xl">
					Fifteen Years of SEO Mastery
				</h2>
				<p class="mt-4 text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation.
				</p>

				<div class="mb-10 mt-6 grid gap-6 md:grid-cols-2">
					{#each serviceData as service}
						<div class="flex items-center gap-3">
							<div class="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
								<CheckIcon class="h-6 w-6" />
							</div>
							<h3 class="text-lg font-medium text-default-950">
								{ service.title }
							</h3>
						</div>
					{/each}
				</div>

				<div class="2xl:-ms-32">
					<div class="rounded-xl border border-default-200 bg-white p-6 dark:bg-default-50">
						<div class="grid md:grid-cols-3">
							<div class="text-center">
								<h2 class="text-4xl font-medium text-default-950">247+</h2>
								<p class="mt-1 text-lg">Completed Projects</p>
							</div>

							<div class="border-default-200 text-center md:border-x">
								<h2 class="text-4xl font-medium text-default-950">54+</h2>
								<p class="mt-1 text-lg">Satisfied Customers</p>
							</div>

							<div class="text-center">
								<h2 class="text-4xl font-medium text-default-950">43+</h2>
								<p class="mt-1 text-lg">Winning Awards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>