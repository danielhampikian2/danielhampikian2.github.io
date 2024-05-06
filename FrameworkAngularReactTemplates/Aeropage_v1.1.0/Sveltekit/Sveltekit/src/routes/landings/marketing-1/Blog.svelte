<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { marketing1Img12, marketing1Img13, marketing1Img14 } from '$lib/utilities/images';
	import BlogCard6 from '$lib/components/widgets/BlogCard6.svelte';

	const blogData: BlogType[] = [
		{
			image: marketing1Img12,
			title: 'We craft elements to pave the way for your future success and growth.'
		},
		{
			image: marketing1Img13,
			title: 'Creative advertising in our life became a info noise.'
		},
		{
			image: marketing1Img14,
			title: 'Creative advertising in our lives has evolved into a sea of information noise.'
		}
	];
</script>

<section id="blog" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Our Blog</span>
				<h2 class="my-4 text-3xl font-medium capitalize text-default-950">
					Latest from our blog
				</h2>
				<p class="text-base">
					In this guide, we're going to share the essential SEO ranking
					factors you need to dominate search. By the end of this post,
					you'll have a well-optimized site
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

			{#each blogData as blog}
				<BlogCard6 {blog} />
			{/each}

		</div>
	</div>
</section>