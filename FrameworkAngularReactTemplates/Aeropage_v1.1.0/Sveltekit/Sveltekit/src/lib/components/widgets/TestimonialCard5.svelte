<script lang="ts">
	import type { TestimonialType } from '$lib/types/landing';
	export let testimonial: TestimonialType;
</script>

<div class="bg-default-100 dark:bg-default-50">
	<div class="sm:p-10 p-8">
		{#if (testimonial.author)}
			<div class="flex items-center gap-5 mb-6">
				<img src={testimonial.author.image} class="h-14 rounded-full" alt="">
				<div>
					<a href={null}>
						<h4 class="text-xl font-medium text-default-950">{ testimonial.author.name }</h4>
					</a>
					<p class="text-base">{ testimonial.author.expertise }</p>
				</div>
			</div>
		{/if}
		<p class="text-base text-default-900">"{ testimonial.comment }"</p>
	</div>
</div>