<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { QuoteIcon } from 'lucide-svelte';

	export let testimonial: TestimonialType;
</script>

<div class="max-w-4xl mx-auto text-center">
	<div class="p-6">
		<QuoteIcon class="h-9 w-9 text-default-400 mx-auto" />
		<p class="md:text-xl mt-4 mb-6">"{ testimonial.comment }"</p>

		{#if (testimonial.author)}
			<img src={testimonial.author.image} class="h-14 w-14 rounded-full mx-auto" alt="">
			<h3 class="text-xl font-medium text-default-950 mt-5">{ testimonial.author.name }</h3>
			<p class="text-base">{ testimonial.author.address }</p>
		{/if}

	</div>
</div>