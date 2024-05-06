<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Thumbs, Navigation } from 'swiper/modules';
	import type { BlogType } from '$lib/types/landing';
	import {
		marketing2Img2,
		marketing2Img3,
		marketing2Img4,
		marketing2Img5,
		marketing2Img6, marketing2Img7
	} from '$lib/utilities/images';
	import BlogCard7 from '$lib/components/widgets/BlogCard7.svelte';

	const blogData: BlogType[] = [
		{
			image: marketing2Img2,
			title: `How Marketing Wire's Support Led to a 70% Increase in Data Accuracy`,
			description: '70% Growth Achieved withs'
		},
		{
			image: marketing2Img3,
			title: `How Surface Mobility Achieved a Increase in Sales in the Six Months`,
			description: 'Sales Tripled with Resonance'
		},
		{
			image: marketing2Img4,
			title: `How Gen Machine Utilizes Automation to Expand Their Subscriber Base`,
			description: 'Zero Negative Reviews with Resonance'
		},
		{
			image: marketing2Img5,
			title: `How Surface Mobility Achieved a Twofold Increase in Sales in the Six Months`,
			description: 'Sales Doubled with Resonance'
		},
		{
			image: marketing2Img6,
			title: `How Marketing Wire's Support Led to an 80% Improvement in Data Accuracy`,
			description: '80% Growth Achieved with Resonances'
		},
		{
			image: marketing2Img7,
			title: `How Gen Machine Harnesses Automation to Expand Their Subscriber Base`,
			description: 'Zero Adverse Reviews with Resonance'
		},
	]

	onMount(() => {
		new Swiper('.blog-swiper', {
			modules: [Thumbs, FreeMode, Navigation],
			loop: true,
			navigation: {
				nextEl: '.button-next',
				prevEl: '.button-prev'
			},
			pagination: {
				clickable: true,
				el: '.swiper-pagination'
			},
			breakpoints: {
				440: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		});
	});
</script>

<section id="portfolio" class="py-10 lg:py-20">
	<div class="container">
		<div class="mx-auto mb-14 max-w-3xl text-center">
          <span
						class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
					>Our Portfolio</span>
			<h2 class="mt-4 text-4xl/tight font-medium text-default-950">
				Case Studies
			</h2>
			<p class="mt-5 text-lg">
				We assist brands and enterprises in distinguishing themselves in the
				evolving digital terrain.
			</p>
		</div>

		<div class="relative">

			<div class="swiper blog-swiper relative">
				<div class="swiper-wrapper">

					{#each blogData as blog}
						<div class="swiper-slide">
							<BlogCard7 {blog} />
						</div>
					{/each}

				</div>
			</div>

		</div>

		<div class="mt-10 flex justify-center">
			<a href={null}
				 class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white">Read
				All Case Studies
				<ArrowRightIcon class="h-6 w-6" />
			</a>
		</div>
	</div>

</section>