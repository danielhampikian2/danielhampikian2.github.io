<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
	export let customClass: string = '';
</script>

<div class={`rounded-md bg-default-100 p-6 dark:bg-default-50 ${customClass}`}>
	{#if (testimonial.author)}
		<div class="flex items-center gap-5">
			<img src={testimonial.author.image} alt=""
					 class="h-16 w-16 rounded-full border-4 border-default-200">
			<h3 class="text-lg font-medium text-default-950">{ testimonial.author.name }</h3>
		</div>
	{/if}
	<p class="text-xl my-5 text-default-600">{ testimonial.comment }</p>
	<div class="flex items-center gap-1">

		{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-400 fill-yellow-400" />
		{/each}

		{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
			<StarIcon class="h-5 w-5 stroke-yellow-400" />
		{/each}
	</div>
</div>