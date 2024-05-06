<script lang="ts">
	import { onMount } from 'svelte';
	import type { ProjectType } from '$lib/types/landing';
	import Swiper from 'swiper';

	export let tag: string;
	export let title: string;
	export let projectList: ProjectType[];

	onMount(() => {
		const swiperEl = document.querySelector<HTMLElement>('.custom-swiper-3');
		if (swiperEl) {
			new Swiper(swiperEl, {
					slidesPerView: 1,
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					autoplay: {
						delay: 3500,
						disableOnInteraction: false
					},
					breakpoints: {
						400: {
							slidesPerView: 1,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40
						}
					}
				}
			);
		}
	});
</script>

<section id="portfolio" class="pt-20 pb-10">
	<div class="flex items-end justify-between mb-10">
		<div class="max-w-2xl mx-auto text-center">
          <span
						class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">{ tag }</span>
			<h2 class="text-4xl font-medium capitalize text-default-950 my-4">{ title }</h2>
		</div>
	</div>

	<div>
		<div class="swiper custom-swiper-3">
			<div class="swiper-wrapper rounded-md relative">

				{#each projectList as project}
					<div class="swiper-slide">
						<div class="relative group rounded-3xl overflow-hidden">
							<img src={project.image} class="h-full w-full" alt="">
							<div class="absolute inset-0 bg-black/60"></div>
							<div class="absolute inset-x-0 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
								<div class="text-center">
									<h5 class="inline-block text-xl font-medium text-white bg-black py-1 px-3 mb-1">
										{ project.category }</h5> <br>
									<h2 class="inline-block text-2xl font-medium text-white bg-black py-1 px-3">{ project.name }</h2>
								</div>
							</div>
						</div>
					</div>
				{/each}

			</div>
		</div>

	</div>
</section>