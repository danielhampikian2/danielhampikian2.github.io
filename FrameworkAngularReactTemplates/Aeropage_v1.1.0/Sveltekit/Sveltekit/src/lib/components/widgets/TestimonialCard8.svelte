<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
</script>

<div
	class="border-e border-y border-s-4 border-default-200 relative z-10 h-full rounded-xl bg-white p-6 dark:bg-default-50">
	{#if (testimonial.author)}
		<div class="flex items-center gap-3">
			<div class="rounded-full border p-1">
				<img src={testimonial.author.image}
						 class="h-12 w-12 rounded-full"
						 alt="" />
			</div>
			<div>
				<h3 class="text-xl font-medium text-default-950">
					{ testimonial.author.name }
				</h3>
				<p class="mt-1 text-sm">{ testimonial.author.expertise }</p>
			</div>
		</div>
	{/if}

	<p class="mt-4 max-w-xs text-base">
		{ testimonial.comment }
	</p>

	<div class="mt-3 flex items-center gap-1">

		{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300 fill-yellow-300" />
		{/each}

		{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300" />
		{/each}

	</div>
</div>