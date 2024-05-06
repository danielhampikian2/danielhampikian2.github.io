<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

	import type { ServiceType } from '$lib/types/landing';
	import { charityImg6, charityImg9, charityImg10, charityImg11 } from '$lib/utilities/images.js';
	import { BadgeDollarSignIcon } from 'lucide-svelte';

	onMount(() => {
		const swiperEl1 = document.querySelector<HTMLElement>('.custom-swiper-1');

		if (swiperEl1) {

			new Swiper(swiperEl1, {
				modules: [Thumbs, FreeMode, Navigation, Pagination],
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

		}
	});

	const serviceData: ServiceType[] = [
		{
			image: charityImg6,
			title: 'Make a Contribution',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg9,
			title: 'Become a Volunteer',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg10,
			title: 'Fundraising',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg11,
			title: 'Make a Contribution',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg6,
			title: 'Make a Contribution',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg9,
			title: 'Become a Volunteer',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		},
		{
			image: charityImg10,
			title: 'Fundraising',
			description: 'Children growing up in poverty encounter challenges such as hunger and malnutrition.'
		}
	];
</script>

<section class="pb-10 lg:pb-20">
	<div class="relative">
		<div class="swiper custom-swiper-1 testimonials_swiper relative">
			<div class="swiper-wrapper">

				{#each serviceData as service}
					<div class="swiper-slide">
						<div class="max-w-4xl mx-auto text-center">
							<div class="relative group">
								<div class="absolute inset-0 rounded-xl bg-black/60"></div>
								<img src={service.image} class="rounded-xl" alt="">

								<div class="absolute inset-0 rounded-md bg-white/20 m-6">
									<div class="flex items-center justify-center h-full">
										<div class="text-default-950">
											<div class="flex justify-center">
												<BadgeDollarSignIcon class="h-12 w-12 text-white" />
											</div>
											<h2 class="text-3xl text-white font-medium mt-5">{ service.title }</h2>
											<p class="w-3/4 mx-auto text-base text-white/90 font-medium mt-4">{ service.description }</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}

			</div>
      <div class="swiper-pagination !static mt-6"></div>
		</div>
	</div>
</section>