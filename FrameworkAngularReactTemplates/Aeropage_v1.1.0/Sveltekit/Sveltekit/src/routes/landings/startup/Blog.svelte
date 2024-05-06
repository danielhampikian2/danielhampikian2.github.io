<script lang="ts">
	import BlogCard3 from '$lib/components/widgets/BlogCard3.svelte';
	import type { BlogType } from '$lib/types/landing';
	import { startupImg8, startupImg9 } from '$lib/utilities/images';

	const blogData: BlogType[] = [
		{
			image: startupImg8,
			title: 'Elegant Branding Work for Red Circle by Oddone',
			description: 'Oddone collaborated with brand strategist Caren Williams to create elegant branding for Red Circle, a San Francisco-based startup.'
		},
		{
			image: startupImg9,
			title: 'Random Explorations with Cinema 4D and Redshift',
			description: 'Nidia Dias, a 3D designer from Portugal, showcases her impressive portfolio in random explorations with Cinema 4D and Redshift.'
		},
	]
</script>

<section id="blog" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Blog</span>
				<h2 class="my-4 text-4xl font-medium text-default-950">
					Explore Blog
				</h2>
				<p class="text-base">
					Web development offers three primary specializations: front-end
					developer, back-end developer, and full-stack developer.
				</p>
			</div>
		</div>

		<div class="grid gap-6 xl:grid-cols-2">
			{#each blogData as blog}
				<BlogCard3 {blog} />
			{/each}
		</div>
	</div>
</section>