<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { agency2Img1, agency2Img2, agency2Img3 } from '$lib/utilities/images';
	import BlogCard2 from '$lib/components/widgets/BlogCard2.svelte';

	const blogData: BlogType[] = [
		{
			image: agency2Img1,
			title: 'Free advertising you online business.',
			description: 'Content king that means bringing and strategic approach.'
		},
		{
			image: agency2Img2,
			title: 'Investment monitor top 2023',
			description: 'We are thrilled to the Investment Top 2023, recognizing the excellence and innovation.'
		},
		{
			image: agency2Img3,
			title: 'Advancing Innovation and Collaboration',
			description: 'Join us for a transformative event focused on Advancing Innovation and Collaboration.'
		}
	];
</script>

<section id="blog" class="lg:py-20 py-10">
	<div class="container">
		<div class="flex items-end justify-between mb-10">
			<div class="max-w-2xl mx-auto text-center">
          <span
						class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Blog</span>
				<h2 class="text-3xl font-medium capitalize text-default-950 my-4">Read the latest news.</h2>
			</div>
		</div>

		<div class="grid xl:grid-cols-3 gap-6">
			{#each blogData as blog}
				<BlogCard2 {blog} />
			{/each}
		</div>
	</div>
</section>