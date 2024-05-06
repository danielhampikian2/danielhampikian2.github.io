<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { BlogType } from '$lib/types/landing';
	import { portfolio1Img3, portfolio1Img4, portfolio1Img5 } from '$lib/utilities/images';
	import BlogCard4 from '$lib/components/widgets/BlogCard4.svelte';

	const blogData: BlogType[] = [
		{
			image: portfolio1Img4,
			title: `The Definitive SEO Guide: Enhancing Your Website's Visibility`,
			description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'
		},
		{
			image: portfolio1Img5,
			title: `Effective Social Media Marketing Tactics for Small Businesses`,
			description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'
		}
	];
</script>

<section id="blog" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Blog</span>
				<h2
					class="my-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
					Read the latest news.
				</h2>
			</div>
		</div>

		<div class="grid gap-6 xl:grid-cols-2">
			<div class="rounded-xl border border-primary/20 bg-primary/10 p-6">
				<div class="relative h-full w-full">
					<img
						src={portfolio1Img3}
						class="h-full w-full rounded-md"
						alt="" />
					<div class="absolute inset-x-0 bottom-0 top-auto hidden md:block">
						<div class="m-2 rounded-xl bg-black/10 p-2 backdrop-blur-md">
							<div class="group text-center">
								<h3 class="my-3 font-medium text-white md:text-3xl">
									Free advertising you online business.
								</h3>
								<a
									href={null}
									class="text-lg font-medium text-white"
								>Read More
									<MoveRightIcon
										class="inline-block h-5 w-5 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{#each blogData as blog,idx}
					<BlogCard4 {blog} customClass={idx%2!==0?'mt-6':''} titleClass="text-2xl" />
				{/each}
			</div>

		</div>
	</div>
</section>