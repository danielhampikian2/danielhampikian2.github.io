<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import { creativeImg3 } from '$lib/utilities/images';
	import type { ServiceType } from '$lib/types/landing';

	const serviceData: ServiceType[] = [
		{
			title: 'Graphic Design'
		},
		{
			title: 'Web Design'
		},
		{
			title: 'Digital Marketing'
		},
		{
			title: 'Development'
		},
		{
			title: 'UI/UX Design'
		},
		{
			title: 'Branding'
		}
	];
</script>

<section class="py-10 lg:py-20">
	<div class="container">
		<div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
			<div class="2xl:py-20">
				<div class="flex items-end justify-between mb-10">
					<div class="max-w-md lg:text-start mx-auto xl:ms-0 text-center">
              <span
								class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Services</span>
						<p class="text-base mt-5">We help you to go online and increase your
							conversion rate Better design for your digital products.</p>
					</div>
				</div>

				<div class="bg-default-50 rounded-md">
					<div class="grid 2xl:grid-cols-2">
						<div class="divide-y divide-white/10">

							{#each serviceData.slice(0, 3) as service}
								<div class="p-6 flex items-center justify-between">
									<h3 class="text-2xl font-medium text-default-950">{ service.title }</h3>
									<div
										class="h-12 w-12 rounded-md cursor-pointer flex items-center justify-center transition-all border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
										<MoveRightIcon class="w-6 h-6" />
									</div>
								</div>
							{/each}

						</div>

						<div class="2xl:border-s 2xl:border-t-0 border-t border-default-200 divide-y divide-white/10">

							{#each serviceData.slice(3, serviceData.length) as service}
								<div class="p-6 flex items-center justify-between">
									<h3 class="text-2xl font-medium text-default-950">{ service.title }</h3>
									<div
										class="h-12 w-12 rounded-md cursor-pointer flex items-center justify-center transition-all border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
										<MoveRightIcon class="w-6 h-6" />
									</div>
								</div>
							{/each}

						</div>
					</div>
				</div>
			</div>

			<div class="relative overflow-hidden rounded-md">
				<img src={creativeImg3} class="h-full w-full rounded-md" alt="">
				<div class="absolute inset-0 bg-black/30"></div>
			</div>
		</div>
	</div>
</section>