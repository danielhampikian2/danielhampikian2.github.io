<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import {
		photographyImg10,
		photographyImg2,
		photographyImg3, photographyImg5,
		photographyImg6,
		photographyImg9
	} from '$lib/utilities/images';

	const imageGroup1 = [photographyImg3, photographyImg2, photographyImg6, photographyImg10];
	const imageGroup2 = [photographyImg9, photographyImg2, photographyImg5, photographyImg10];
</script>

<section id="portfolio" class="py-10 lg:py-20">
	<div class="container">
		<div class="flex flex-wrap items-center justify-between gap-5">
			<div>
				<div class="mx-auto max-w-2xl">
					<h2 class="mb-4 text-4xl font-medium text-default-950">
						Our Portfolio
					</h2>
					<p class="text-base">
						A visual exhibition of remarkable animal moments captured in
						time. Each image narrates a distinct story, exalting the core
						and vitality of animals in their full splendor.
					</p>
				</div>
			</div>
			<div>
				<a
					href={null}
					class="inline-flex items-center justify-center gap-2 border border-default-200 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
				>View All</a>
			</div>
		</div>
	</div>

	<div class="mt-14">
		<div class="relative m-auto flex gap-8 overflow-hidden">
			<div
				class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
				{#each imageGroup1 as img}
					<img class="h-72 w-full object-cover"
							 src={img} alt="" />
				{/each}
			</div>

			<div
				aria-hidden="true"
				class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
				{#each imageGroup2 as img}
					<img class="h-72 w-full object-cover"
							 src={img} alt="" />
				{/each}
			</div>
		</div>

		<div class="marquee--reverse m-auto mt-8 flex gap-8 overflow-hidden">
			<div
				class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
				{#each imageGroup1 as img}
					<img class="h-72 w-full object-cover"
							 src={img} alt="" />
				{/each}
			</div>

			<div
				aria-hidden="true"
				class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
				{#each imageGroup2 as img}
					<img class="h-72 w-full object-cover"
							 src={img} alt="" />
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-12 flex items-center justify-center">
		<a
			href={null}
			class="inline-flex items-center justify-center gap-2 rounded border border-default-200 px-6 py-2 text-base font-medium text-default-950 transition-all duration-300 hover:bg-primary hover:text-default-950"
		>View More
			<MoveRightIcon class="h-5 w-5" />
		</a>
	</div>
</section>