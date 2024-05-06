<script lang="ts">
	import { brand1, brand2, brand3, brand4, brand5, brand6, financeImg6, financeImg7 } from '$lib/utilities/images';
	import type { BrandType } from '$lib/types/landing';

	const brandData: BrandType[] = [
		{
			image: brand1
		},
		{
			image: brand2
		},
		{
			image: brand3
		},
		{
			image: brand4
		},
		{
			image: brand5
		},
		{
			image: brand6
		}
	];
</script>

<section id="onboarding" class="py-10 lg:py-20">
	<div class="container">

		<div class="grid lg:grid-cols-2 gap-6 items-center">
			<div>
				<div class="max-w-2xl">
            <span
							class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Smooth Onboarding</span>
					<h2 class="text-4xl font-medium text-default-950 mt-4">Effortless Integrations for a Quick Start</h2>
					<p class="text-base mt-5">Link Vault with your current financial technology stack to simplify
						data comprehension and decision-making.</p>
				</div>

				<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">

					{#each brandData as brand}
						<div class="p-10 rounded-xl border border-default-200">
							<img src={brand.image} alt="">
						</div>
					{/each}

				</div>
			</div>

			<div class="relative lg:mb-0">
				<div class="relative h-full">
					<img src={financeImg6} class="mx-auto rounded-xl h-full" alt="">
				</div>
				<div class="absolute inset-x-0 -bottom-14 hidden sm:block">
					<img src={financeImg7} class="h-full rounded-xl" alt="">
				</div>
			</div>
		</div>
	</div>
</section>