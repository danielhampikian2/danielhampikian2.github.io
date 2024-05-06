<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	import { StarIcon } from 'lucide-svelte';
	export let testimonial: TestimonialType;
</script>

<div class="mx-auto max-w-4xl text-center">
	<div class="p-6">
		{#if (testimonial.author)}
			<img
				src={testimonial.author.image}
				class="mx-auto h-14 w-14 rounded-full"
				alt=""
			/>
			<h3 class="mt-5 text-xl font-medium text-default-950">
				{ testimonial.author.name }
			</h3>
			<p class="text-base">{ testimonial.author.address }</p>
		{/if}
		<p class="mt-4 md:text-2xl">
			"{ testimonial.comment }"
		</p>
		<div class="mt-4 flex items-center justify-center gap-2">
			{#each Array.from(new Array(Math.floor(testimonial.rating ?? 0))) as star}
				<StarIcon class="h-5 w-5 stroke-yellow-300 fill-yellow-300" />
			{/each}

			{#each Array.from(new Array(5 - Math.ceil(testimonial.rating ?? 0))) as star}
				<StarIcon class="h-5 w-5 stroke-yellow-300" />
			{/each}
		</div>
	</div>
</div>