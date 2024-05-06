<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
</script>

<div class="p-6 rounded-md bg-default-50">
	{#if (testimonial.author)}
		<div class="flex items-center gap-5">
			<img src={testimonial.author.image} class="h-14 w-14 rounded-full border-4 border-white/20"
					 alt="">
			<h3 class="text-lg font-medium text-default-950">{ testimonial.author.name }</h3>
		</div>
	{/if}
	<p class="text-base text-default-700 mt-4">{ testimonial.comment }</p>
	<div class="flex items-center gap-2 mt-4">

		{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300 fill-yellow-300" />
		{/each}

		{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300" />
		{/each}

	</div>
</div>