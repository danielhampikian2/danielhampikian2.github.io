<script lang="ts">

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Thumbs } from 'swiper/modules';
	import { brandData } from '$lib/utilities/common';

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
		<div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-6">
			<div class="xl:col-span-2">
				<h2 class="text-3xl font-medium text-default-950 md:text-4xl/tight">
					Preferred Partner for Major Corporations
				</h2>
			</div>

			<div class="xl:col-span-4">

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
		</div>
	</div>
</section>