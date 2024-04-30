<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
</script>

<div class="p-8 text-center">
	<h5 class="text-xl font-medium text-default-950">
		"{ testimonial.comment }"
	</h5>

	{#if testimonial.author}
		<p class="mt-4 text-lg text-default-950">
			Rated { testimonial.rating } on { testimonial.author.name }
		</p>
	{/if}

	<div class="mt-5 flex items-center justify-center gap-1">

		{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-6 w-6 stroke-yellow-300 fill-yellow-300" />
		{/each}

		{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-6 w-6 stroke-yellow-300" />
		{/each}

	</div>
</div>