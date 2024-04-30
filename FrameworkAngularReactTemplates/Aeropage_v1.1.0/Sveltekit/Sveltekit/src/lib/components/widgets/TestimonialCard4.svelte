<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
	export let customClass: string = '';
</script>

<div class={`pt-3 ${customClass}`}>
	{#if (testimonial.author)}
		<div class="flex items-center gap-6">
			<div>
				<img src={testimonial.author.image} class="h-14 rounded-full" alt="">
			</div>
			<div>
				<h3 class="text-2xl font-medium text-default-950">{ testimonial.author.name }</h3>
				<p class="text-base mt-2">{ testimonial.author.expertise }</p>
			</div>
		</div>
	{/if}
	<p class="text-base mt-5">"{ testimonial.comment }"</p>
	<div class="flex items-center gap-2 mt-5">
		{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300 fill-yellow-300" />
		{/each}

		{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-300" />
		{/each}
	</div>
</div>