<script lang="ts">
	import type { BrandType } from '$lib/types/landing';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Thumbs } from 'swiper/modules';

	export let title: string = '';
	export let brandData: BrandType[];


	onMount(() => {
		new Swiper('#brands-swiper', {
			modules: [Thumbs, FreeMode],
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
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 50
				}
			}
		});
	});
</script>

<section class="py-10 lg:py-20">
	<div class="container">
		{#if (title.length > 0)}
			<p class="text-base font-medium text-center text-default-950 mb-10">{ title }</p>
		{/if}

		<div id="brands-swiper" class="swiper">
			<div class="swiper-wrapper">

				{#each brandData as brand}
					<div class="swiper-slide">
						<img src={brand.image} alt="">
					</div>
				{/each}

			</div>
		</div>

	</div>
</section>