<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { marketing2Img11, marketing2Img12, marketing2Img5 } from '$lib/utilities/images';
	import BlogCard8 from '$lib/components/widgets/BlogCard8.svelte';

	const categories: string[] = ['Articles', 'Tutorials'];

	const blogData: BlogType[] = [
		{
			image: marketing2Img11,
			title: 'Steps in Content Marketing to Accelerate Business Growth',
			description: 'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
			category: categories[0],
			publish: {
				date: 13,
				month: 'February',
				year: 2022
			}
		},
		{
			image: marketing2Img12,
			title: 'Effective Content Marketing Strategies for Business Expansion',
			description: 'The micro-environment, where a firm has more control, usually encompasses employees, suppliers, and the media.',
			category: categories[1],
			publish: {
				date: 11,
				month: 'February',
				year: 2023
			}
		},
		{
			image: marketing2Img5,
			title: 'Mastering Content Propelling Business Towards Success',
			description: 'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
			category: categories[0],
			publish: {
				date: 28,
				month: 'February',
				year: 2022
			}
		}
	];
</script>

<section id="blog" class="py-10 lg:py-20">
	<div class="container">
		<div class="mx-auto mb-14 max-w-3xl text-center">
          <span
						class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Our Bolg</span>
			<h2 class="mt-4 text-4xl/tight font-medium text-default-950">
				Explore Our Blog
			</h2>
			<p class="mt-5 text-lg">
				Discover top-notch marketing resources and stay updated with the
				latest news about our company.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each blogData as blog}
				<BlogCard8 {blog} />
			{/each}
		</div>
	</div>
</section>